#!/usr/bin/env node
/**
 * scan-remote.mjs — inventory skills that are published upstream but not on this disk.
 *
 * The atlas proper scans the filesystem, so a skill that was evaluated and passed
 * over leaves no trace: the decision is recorded in SOURCES.md, the skills themselves
 * are nowhere. This walks the repos listed in tools/sources.json instead, so the
 * shelf you did not install is still searchable when you need something from it.
 *
 * Repos are shallow-cloned to a temp directory and deleted again. Nothing outside
 * this repo is written, and the recorded commit makes any row reproducible.
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const REPO = process.argv[2] || process.cwd();
const OUT = process.argv[3] || path.join(REPO, "data", "remote-raw.json");
const SOURCES = path.join(REPO, "tools", "sources.json");

const PRUNE = new Set(["node_modules", ".git", "dist", "build", "target", "__pycache__", "venv", ".venv"]);

// ── frontmatter ──────────────────────────────────────────────────────────────
// Deliberately a copy of the parser in scan.mjs. That file is a script: importing
// it to share the function would run a full disk scan as a side effect. Two callers
// is not enough to justify a third module — but the two must stay in step.
function parseFrontmatter(text) {
  if (!text.startsWith("---")) return {};
  const end = text.indexOf("\n---", 3);
  if (end === -1) return {};
  const body = text.slice(3, end);
  const out = {};
  let key = null;
  let buf = [];
  const flush = () => {
    if (key !== null) out[key] = buf.join("\n").trim();
    key = null;
    buf = [];
  };
  for (const rawLine of body.split("\n")) {
    const line = rawLine.replace(/\r$/, "");
    const m = /^([A-Za-z0-9_.-]+):\s?(.*)$/.exec(line);
    if (m && !/^\s/.test(line)) {
      flush();
      key = m[1];
      const v = m[2].trim();
      buf = v === ">" || v === "|" || v === ">-" || v === "|-" ? [] : [v];
    } else if (key !== null) {
      buf.push(line.trim());
    }
  }
  flush();
  for (const k of Object.keys(out)) {
    out[k] = out[k].replace(/^["']|["']$/g, "").replace(/\s+/g, " ").trim();
  }
  return out;
}

// ── shell ────────────────────────────────────────────────────────────────────
const run = (cmd, args, opts = {}) =>
  execFileSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...opts }).trim();

// Repo metadata is a nicety, not the point. A missing or unauthenticated gh
// leaves the fields null rather than failing the scan.
function repoMeta(repo) {
  try {
    const raw = run("gh", ["api", `repos/${repo}`, "--jq",
      "{stars:.stargazers_count,forks:.forks_count,pushedAt:.pushed_at,license:.license.spdx_id,branch:.default_branch,description:.description}"]);
    return JSON.parse(raw);
  } catch {
    return { stars: null, forks: null, pushedAt: null, license: null, branch: null, description: null };
  }
}

// ── walk ─────────────────────────────────────────────────────────────────────
function findSkillDirs(root) {
  const found = [];
  const walk = (dir) => {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    if (entries.some((e) => e.isFile() && e.name === "SKILL.md")) found.push(dir);
    for (const e of entries) {
      if (!e.isDirectory() || PRUNE.has(e.name)) continue;
      walk(path.join(dir, e.name));
    }
  };
  walk(root);
  return found;
}

function readSkill(repo, root, dir) {
  const skillPath = path.join(dir, "SKILL.md");
  const text = fs.readFileSync(skillPath, "utf8");
  const fm = parseFrontmatter(text);
  const rel = path.relative(root, dir).split(path.sep).join("/");
  const siblings = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.name !== "SKILL.md")
    .map((e) => (e.isDirectory() ? e.name + "/" : e.name))
    .sort();

  let bytes = Buffer.byteLength(text);
  for (const s of siblings) {
    if (s.endsWith("/")) continue;
    try {
      bytes += fs.statSync(path.join(dir, s)).size;
    } catch {
      /* unreadable sibling does not invalidate the row */
    }
  }

  return {
    repo,
    name: fm.name || path.basename(dir),
    dirName: path.basename(dir),
    group: rel.includes("/") ? rel.split("/").slice(0, -1).join("/") : "",
    repoPath: rel,
    description: fm.description || "",
    modelInvocable: String(fm["disable-model-invocation"] || "").toLowerCase() !== "true",
    files: siblings,
    entryBytes: Buffer.byteLength(text),
    bytes,
    // Same digest as scan.mjs, so a remote row can be matched against the disk by
    // content rather than by name — two repos reuse a name for unrelated skills.
    hash: crypto.createHash("sha1").update(text.replace(/\r/g, "")).digest("hex").slice(0, 12),
    // Same estimator as scan.mjs, so remote and installed rows compare directly.
    descTokens: Math.ceil(Buffer.byteLength(fm.description || "") / 4),
    skillTokens: Math.ceil(Buffer.byteLength(text) / 4),
  };
}

// ── scan ─────────────────────────────────────────────────────────────────────
const { tracked } = JSON.parse(fs.readFileSync(SOURCES, "utf8"));
const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "skill-atlas-remote-"));
const repos = [];
const skills = [];

for (const src of tracked) {
  const dest = path.join(tmpRoot, src.repo.replace("/", "__"));
  process.stdout.write(`  ${src.repo} … `);
  let commit = null;
  try {
    run("git", ["clone", "--depth", "1", "--quiet", `https://github.com/${src.repo}.git`, dest]);
    commit = run("git", ["-C", dest, "rev-parse", "HEAD"]);
  } catch (e) {
    console.log("clone failed");
    repos.push({ ...src, error: "clone failed", skills: 0 });
    continue;
  }

  const dirs = findSkillDirs(dest).sort();
  const rows = dirs.map((d) => readSkill(src.repo, dest, d));
  skills.push(...rows);
  repos.push({
    ...src,
    ...repoMeta(src.repo),
    commit,
    skills: rows.length,
    bytes: rows.reduce((a, s) => a + s.bytes, 0),
    descTokens: rows.reduce((a, s) => a + s.descTokens, 0),
  });
  console.log(`${rows.length} skills`);
}

fs.rmSync(tmpRoot, { recursive: true, force: true });

const out = {
  generated: new Date().toISOString().slice(0, 10),
  totals: { repos: repos.length, skills: skills.length },
  repos,
  skills: skills.sort((a, b) => a.repo.localeCompare(b.repo) || a.name.localeCompare(b.name)),
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
console.log(`\nwrote ${path.relative(REPO, OUT)} — ${skills.length} skills across ${repos.length} repos`);
