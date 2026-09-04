#!/usr/bin/env node
/**
 * scan.mjs — inventory every AI "skill" unit on this machine.
 *
 * A skill unit is a directory containing SKILL.md. Units are deduplicated by
 * SKILL.md content hash, because the same skill is installed into a dozen tool
 * directories and counting it a dozen times tells you nothing.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import os from "node:os";

const HOME = os.homedir();
const OUT = process.argv[2] || path.join(process.cwd(), "scan.json");

// ── where to look ────────────────────────────────────────────────────────────
// surface: how the skill reaches a model. installed = loadable now.
const ROOTS = [
  { dir: ".agents/skills",              tool: "shared-store",tool2: "agents-std", surface: "canonical", status: "installed" },
  { dir: ".claude/skills",              tool: "claude-code", surface: "personal",   status: "installed" },
  { dir: ".claude/.agents/skills",      tool: "agents-std",  surface: "shared",     status: "installed" },
  { dir: ".claude/plugins/cache",       tool: "claude-code", surface: "plugin",     status: "installed" },
  { dir: ".claude/plugins/marketplaces",tool: "claude-code", surface: "marketplace",status: "available" },
  { dir: ".codex/skills",               tool: "codex",       surface: "personal",   status: "installed" },
  { dir: ".codex/plugins",              tool: "codex",       surface: "plugin",     status: "installed" },
  { dir: ".cursor/skills",              tool: "cursor",      surface: "personal",   status: "installed" },
  { dir: ".cursor/skills-cursor",       tool: "cursor",      surface: "managed",    status: "installed" },
  { dir: ".cursor/plugins",             tool: "cursor",      surface: "plugin",     status: "installed" },
  { dir: ".gemini/skills",              tool: "gemini",      surface: "personal",   status: "installed" },
  { dir: ".gemini/extensions",          tool: "gemini",      surface: "plugin",     status: "installed" },
  { dir: ".continue/skills",            tool: "continue",    surface: "personal",   status: "installed" },
  { dir: ".factory/skills",             tool: "factory",     surface: "personal",   status: "installed" },
  { dir: ".qwen/skills",                tool: "qwen-code",   surface: "personal",   status: "installed" },
  { dir: ".kilocode/skills",            tool: "kilocode",    surface: "personal",   status: "installed" },
  { dir: ".roo/skills",                 tool: "roo-code",    surface: "personal",   status: "installed" },
  { dir: ".cline/skills",               tool: "cline",       surface: "personal",   status: "installed" },
  { dir: ".trae/skills",                tool: "trae",        surface: "personal",   status: "installed" },
  { dir: ".windsurf/skills",            tool: "windsurf",    surface: "personal",   status: "installed" },
];

const PROJECT_SCAN_ROOTS = [path.join(HOME, "Desktop", "Open-Source")];
const PRUNE = new Set(["node_modules", ".git", "dist", "build", "target", "__pycache__", "venv", ".venv"]);

// ── frontmatter ──────────────────────────────────────────────────────────────
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

// ── walking ──────────────────────────────────────────────────────────────────
function* walk(dir, depth = 0, maxDepth = 8) {
  if (depth > maxDepth) return;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  yield { dir, entries };
  for (const e of entries) {
    if (!e.isDirectory() && !e.isSymbolicLink()) continue;
    if (PRUNE.has(e.name)) continue;
    const full = path.join(dir, e.name);
    let st;
    try {
      st = fs.statSync(full);
    } catch {
      continue;
    }
    if (!st.isDirectory()) continue;
    yield* walk(full, depth + 1, maxDepth);
  }
}

function dirStats(dir) {
  let files = 0;
  let bytes = 0;
  const kinds = new Set();
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        if (PRUNE.has(e.name)) continue;
        kinds.add(e.name.toLowerCase());
        stack.push(full);
      } else {
        files++;
        try {
          bytes += fs.statSync(full).size;
        } catch {}
      }
    }
  }
  return { files, bytes, subdirs: [...kinds] };
}

function linkInfo(p) {
  try {
    const l = fs.lstatSync(p);
    if (l.isSymbolicLink()) {
      let target = null;
      try {
        target = fs.readlinkSync(p);
      } catch {}
      return { isLink: true, target };
    }
  } catch {}
  return { isLink: false, target: null };
}

// ── classification ───────────────────────────────────────────────────────────
const CATEGORIES = [
  ["Frontend & UI", ["ui", "ux", "css", "tailwind", "react", "component", "shadcn", "frontend", "design system", "responsive", "animation", "landing page", "figma", "material design", "layout", "typography", "visual design", "hig", "storybook", "svelte", "vue", "nextjs", "next.js", "scroll", "artboard", "canvas", "theme", "dark mode", "accessib", "wcag", "a11y", "icon", "brand"]],
  ["Backend & APIs", ["api", "rest", "graphql", "endpoint", "fastapi", "express", "server", "backend", "microservice", "webhook", "grpc", "openapi", "auth", "jwt", "oauth", "session", "middleware", "rate limit", "queue", "worker"]],
  ["Data & Databases", ["database", "sql", "postgres", "supabase", "prisma", "schema", "migration", "orm", "redis", "mongo", "sqlite", "data model", "etl", "warehouse", "analytics", "bigquery", "duckdb", "vector", "embedding"]],
  ["AI & Agents", ["agent", "llm", "prompt", "mcp", "rag", "subagent", "orchestrat", "context window", "eval", "fine-tun", "inference", "machine learning", "pytorch", "tensor", "swarm", "coordinator", "consensus", "hive", "neural", "goal planner", "memory system", "embedding", "anthropic", "openai", "claude", "multi-agent", "autonomous"]],
  ["DevOps & Infra", ["deploy", "docker", "kubernetes", "k8s", "terraform", "ci/cd", "pipeline", "vercel", "aws", "cloudflare", "infra", "container", "helm", "ansible", "monitoring", "observab", "datadog", "log", "incident", "sre", "nginx", "network", "dns"]],
  ["Testing & QA", ["test", "tdd", "pytest", "vitest", "jest", "coverage", "e2e", "playwright", "cypress", "qa", "regression", "fixture", "mock", "assertion", "flaky"]],
  ["Code Quality & Review", ["review", "refactor", "lint", "code smell", "code quality", "static analysis", "analyzer", "clean code", "dead code", "simplif", "readab", "maintainab", "technical debt", "complexity", "naming", "comment", "style guide", "convention"]],
  ["Security", ["security", "vulnerab", "owasp", "secret", "credential", "injection", "xss", "csrf", "pentest", "threat", "encrypt", "sanitiz", "audit", "compliance", "cve"]],
  ["Debugging & Performance", ["debug", "bug", "root cause", "profil", "performance", "optimiz", "bottleneck", "memory leak", "latency", "slow", "trace", "stack trace", "crash", "error handling"]],
  ["Languages & Frameworks", ["rust", "python", "golang", "typescript", "javascript", "java", "kotlin", "swift", "c++", "cpp", "csharp", "f#", "ruby", "php", "dart", "flutter", "django", "spring", "tauri", "arkts", "harmonyos", "bun", "node"]],
  ["Git & Workflow", ["git", "commit", "branch", "pull request", "merge", "rebase", "worktree", "changelog", "release", "version", "monorepo", "conventional commit"]],
  ["Docs & Writing", ["document", "readme", "docs", "writing", "changelog", "tutorial", "guide", "article", "blog", "technical writ", "explain", "diagram", "mermaid", "excalidraw", "draw.io", "slide", "presentation", "note"]],
  ["Planning & Product", ["plan", "prd", "requirement", "roadmap", "spec", "brainstorm", "product", "user story", "estimat", "backlog", "jira", "ticket", "issue", "discovery", "architecture", "adr", "design doc"]],
  ["Marketing & Growth", ["marketing", "seo", "copywrit", "ad ", "campaign", "growth", "conversion", "cro", "email sequence", "funnel", "pricing", "churn", "referral", "social", "launch", "outreach", "cold email", "landing"]],
  ["Meta & Skill Tooling", ["skill", "hook", "plugin", "slash command", "settings.json", "harness", "instinct", "meta", "scaffold", "generator", "install", "marketplace", "config"]],
  ["Personal & Communication", ["meeting", "standup", "communicat", "feedback", "conversation", "workplace", "career", "interview", "journal", "todo", "productiv", "note-taking", "obsidian", "slack", "discord", "imessage", "telegram", "whatsapp", "calendar", "inbox", "triage"]],
  ["Games & XR", ["unity", "unreal", "roblox", "godot", "shader", "game design", "game audio", "visionos", "spatial", "xr", "vr ", "ar ", "immersive", "level design", "narrative design", "sprite", "physics engine"]],
  ["Business & Ops", ["accounts payable", "invoice", "supply chain", "procurement", "sales", "crm", "governance", "compliance", "finance", "payroll", "hr ", "legal", "contract", "vendor", "operations", "project management", "resourcing", "budget", "stakeholder"]],
  ["Research & Analysis", ["research", "market research", "competitive", "benchmark", "survey", "literature", "citation", "paper", "perplexity", "web search", "scrape", "crawl", "data extraction", "osint", "due diligence"]],
  ["Browser & Automation", ["browser", "puppeteer", "selenium", "headless", "form fill", "click through", "web automation", "workflow automation", "rpa", "crawler", "bot"]],
  ["Media & Content", ["image", "video", "audio", "pdf", "photo", "render", "transcode", "ffmpeg", "thumbnail", "meme", "podcast", "subtitle", "translat", "ocr", "screenshot", "gif"]],
];

// Pack prefixes carry no topical meaning: `agent-authentication` is a backend
// skill, not an agent skill. Strip the prefix before scoring, and keep it as a
// separate "family" axis.
const FAMILY_PREFIXES = [
  ["agency-", "agency-roles"],
  ["agent-", "agent-pack"],
  ["caveman-", "caveman"],
  ["ecc-", "ecc"],
  ["prp-", "prp"],
  ["cavecrew", "caveman"],
];

function familyOf(rec) {
  const n = rec.name.toLowerCase();
  for (const [pre, fam] of FAMILY_PREFIXES) if (n.startsWith(pre)) return fam;
  if (rec.origin.plugin) return rec.origin.plugin;
  if (rec.pathKey.includes("/skills/ecc/")) return "ecc";
  if (rec.pathKey.includes(".agents/skills")) return "agents-std-store";
  return "standalone";
}

function stripFamily(name) {
  let n = name.toLowerCase();
  for (const [pre] of FAMILY_PREFIXES) if (n.startsWith(pre)) n = n.slice(pre.length);
  return n;
}

const wordRe = new Map();
function hits(hay, kw) {
  if (!wordRe.has(kw)) {
    const t = kw.trim();
    const esc = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    // Short keywords anchor on a left word boundary only, so "auth" still
    // matches "authentication" but not "oauthorize"; long ones match anywhere.
    // <=3 chars must be a whole word ("pr" must not match "prompt"); 4-5 chars
    // anchor left only ("auth" matches "authentication"); longer match anywhere.
    const pat = t.length <= 3 ? `(^|[^a-z0-9])${esc}([^a-z0-9]|$)`
      : t.length <= 5 ? `(^|[^a-z0-9])${esc}` : esc;
    wordRe.set(kw, new RegExp(pat, "i"));
  }
  return wordRe.get(kw).test(hay);
}

function classify(rec) {
  const shortName = stripFamily(rec.name).replace(/[-_]/g, " ");
  const desc = (rec.description || "").toLowerCase().slice(0, 900);
  const scores = CATEGORIES.map(([cat, kws]) => {
    let s = 0;
    for (const kw of kws) {
      if (hits(shortName, kw)) s += 5;
      if (hits(desc, kw)) s += 3;
    }
    return [cat, s];
  }).sort((a, b) => b[1] - a[1]);
  const [top, score] = scores[0];
  const second = scores[1];
  return {
    category: score >= 4 ? top : "Uncategorized",
    confidence: score,
    alt: second && second[1] >= 5 && second[1] >= score * 0.6 ? second[0] : null,
  };
}

// ── collect ──────────────────────────────────────────────────────────────────
const units = [];
const emptyDirs = [];
const links = [];
const seenDir = new Set();

function originFromPath(rel) {
  const parts = rel.split(/[\\/]/);
  const i = parts.indexOf("marketplaces");
  const j = parts.indexOf("cache");
  if (i !== -1) return { kind: "marketplace", marketplace: parts[i + 1] || null, plugin: parts[i + 2] || null };
  if (j !== -1 && parts.includes("plugins")) return { kind: "plugin", marketplace: parts[j + 1] || null, plugin: parts[j + 2] || null };
  return { kind: "standalone", marketplace: null, plugin: null };
}

function addRoot(rootAbs, meta) {
  if (!fs.existsSync(rootAbs)) return;
  for (const { dir, entries } of walk(rootAbs)) {
    const hasSkill = entries.some((e) => e.isFile() && e.name.toLowerCase() === "skill.md");
    if (hasSkill) {
      if (seenDir.has(dir)) continue;
      seenDir.add(dir);
      const skillPath = path.join(dir, "SKILL.md");
      let text = "";
      try {
        text = fs.readFileSync(skillPath, "utf8");
      } catch {
        continue;
      }
      const fm = parseFrontmatter(text);
      const stats = dirStats(dir);
      const rel = path.relative(HOME, dir).replace(/\\/g, "/");
      const li = linkInfo(dir);
      if (li.isLink) links.push({ path: rel, target: li.target });
      units.push({
        name: fm.name || path.basename(dir),
        dirName: path.basename(dir),
        description: fm.description || "",
        frontmatter: fm,
        tool: meta.tool,
        surface: meta.surface,
        status: meta.status,
        pathKey: rel,
        origin: originFromPath(rel),
        isLink: li.isLink,
        linkTarget: li.target,
        bodyBytes: Buffer.byteLength(text),
        bodyLines: text.split("\n").length,
        descTokens: Math.ceil(Buffer.byteLength(fm.description || "") / 4),
        skillTokens: Math.ceil(Buffer.byteLength(text) / 4),
        files: stats.files,
        bytes: stats.bytes,
        subdirs: stats.subdirs,
        hash: crypto.createHash("sha1").update(text.replace(/\r/g, "")).digest("hex").slice(0, 12),
        mtime: (() => {
          try {
            return fs.statSync(skillPath).mtime.toISOString().slice(0, 10);
          } catch {
            return null;
          }
        })(),
      });
    }
  }
}

// empty-dir detection: only directly under a skills root
function findEmpty(rootAbs, meta) {
  if (!fs.existsSync(rootAbs)) return;
  let entries;
  try {
    entries = fs.readdirSync(rootAbs, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const full = path.join(rootAbs, e.name);
    let inner = [];
    try {
      inner = fs.readdirSync(full);
    } catch {}
    if (inner.length === 0) {
      emptyDirs.push({ path: path.relative(HOME, full).replace(/\\/g, "/"), tool: meta.tool, name: e.name });
    }
  }
}

for (const r of ROOTS) {
  const abs = path.join(HOME, r.dir);
  addRoot(abs, r);
  if (r.surface === "personal" || r.surface === "managed" || r.surface === "shared") findEmpty(abs, r);
}

// project-local skills
for (const base of PROJECT_SCAN_ROOTS) {
  if (!fs.existsSync(base)) continue;
  const stack = [[base, 0]];
  while (stack.length) {
    const [d, depth] = stack.pop();
    if (depth > 3) continue;
    let entries;
    try {
      entries = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of entries) {
      if (!e.isDirectory() || PRUNE.has(e.name)) continue;
      const full = path.join(d, e.name);
      if (e.name === ".claude") {
        addRoot(path.join(full, "skills"), {
          tool: "claude-code",
          surface: "project",
          status: "installed",
        });
      }
      stack.push([full, depth + 1]);
    }
  }
}

// ── dedupe ───────────────────────────────────────────────────────────────────
const byHash = new Map();
for (const u of units) {
  const key = u.hash;
  if (!byHash.has(key)) {
    byHash.set(key, { ...u, locations: [], installCount: 0, tools: new Set(), surfaces: new Set() });
  }
  const g = byHash.get(key);
  g.locations.push({ path: u.pathKey, tool: u.tool, surface: u.surface, status: u.status, isLink: u.isLink });
  g.tools.add(u.tool);
  g.surfaces.add(u.surface);
  g.installCount++;
  // prefer an installed record as the canonical one
  if (u.status === "installed" && g.status !== "installed") {
    Object.assign(g, { ...u, locations: g.locations, installCount: g.installCount, tools: g.tools, surfaces: g.surfaces });
  }
}

const catalog = [...byHash.values()].map((g) => {
  const c = classify(g);
  return {
    ...g,
    family: familyOf(g),
    tools: [...g.tools].sort(),
    surfaces: [...g.surfaces].sort(),
    category: c.category,
    categoryConfidence: c.confidence,
    categoryAlt: c.alt,
    anyInstalled: g.locations.some((l) => l.status === "installed"),
  };
});

// Keyword scoring leaves a tail unclassified. Rather than invent a rule per
// skill, fall back to what the rest of the skill's own pack was classified as:
// a pack is topically coherent, so the mode of its confident members is a
// better guess than "Uncategorized", and it is flagged as inferred.
for (const s of catalog) s.categorySource = s.category === "Uncategorized" ? "none" : "keywords";
const famHist = new Map();
for (const s of catalog) {
  if (s.categorySource !== "keywords") continue;
  if (!famHist.has(s.family)) famHist.set(s.family, new Map());
  const h = famHist.get(s.family);
  h.set(s.category, (h.get(s.category) || 0) + 1);
}
for (const s of catalog) {
  if (s.categorySource !== "none") continue;
  const h = famHist.get(s.family);
  if (!h || h.size === 0) continue;
  const [cat, n] = [...h.entries()].sort((a, b) => b[1] - a[1])[0];
  const total = [...h.values()].reduce((a, b) => a + b, 0);
  if (n / total >= 0.3 && n >= 3) {
    s.category = cat;
    s.categorySource = "family-inference";
  }
}

catalog.sort((a, b) => a.name.localeCompare(b.name));

// name collisions across different content
const byName = new Map();
for (const s of catalog) {
  if (!byName.has(s.name)) byName.set(s.name, []);
  byName.get(s.name).push(s);
}
const collisions = [...byName.entries()]
  .filter(([, v]) => v.length > 1)
  .map(([name, v]) => ({ name, variants: v.map((x) => ({ hash: x.hash, path: x.pathKey, tokens: x.skillTokens })) }));

// ── recoverability of the empty dirs ─────────────────────────────────────────
// A hollow ~/.claude/skills/<x> is recoverable when the canonical shared store
// still holds <x>: the content exists, only the link into Claude Code is gone.
const canonicalNames = new Set(
  fs.existsSync(path.join(HOME, ".agents", "skills"))
    ? fs.readdirSync(path.join(HOME, ".agents", "skills"), { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)
    : []
);
for (const e of emptyDirs) {
  e.recoverable = canonicalNames.has(e.name);
  e.canonical = e.recoverable ? `~/.agents/skills/${e.name}` : null;
}

// ── companion inventories: agents, commands, plugins, MCP, hooks ─────────────
function readMd(file) {
  try {
    const t = fs.readFileSync(file, "utf8");
    const fm = parseFrontmatter(t);
    return {
      name: fm.name || path.basename(file, ".md"),
      description: fm.description || "",
      tools: fm.tools || fm["allowed-tools"] || "",
      model: fm.model || "",
      bytes: Buffer.byteLength(t),
      tokens: Math.ceil(Buffer.byteLength(t) / 4),
      path: path.relative(HOME, file).replace(/\\/g, "/"),
    };
  } catch {
    return null;
  }
}

function collectMd(dirAbs, label) {
  const out = [];
  if (!fs.existsSync(dirAbs)) return out;
  const stack = [dirAbs];
  while (stack.length) {
    const d = stack.pop();
    let entries;
    try {
      entries = fs.readdirSync(d, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        if (!PRUNE.has(e.name)) stack.push(full);
      } else if (e.name.endsWith(".md") && e.name.toLowerCase() !== "skill.md" && !/^readme/i.test(e.name)) {
        const r = readMd(full);
        if (r) out.push({ ...r, source: label });
      }
    }
  }
  return out;
}

const agents = [
  ...collectMd(path.join(HOME, ".claude", "agents"), "user"),
  ...(() => {
    const base = path.join(HOME, ".claude", "plugins", "cache");
    const res = [];
    if (!fs.existsSync(base)) return res;
    for (const mp of fs.readdirSync(base)) {
      const mpDir = path.join(base, mp);
      let plugins = [];
      try {
        plugins = fs.readdirSync(mpDir);
      } catch {
        continue;
      }
      for (const pl of plugins) {
        let vers = [];
        try {
          vers = fs.readdirSync(path.join(mpDir, pl));
        } catch {
          continue;
        }
        for (const v of vers) res.push(...collectMd(path.join(mpDir, pl, v, "agents"), `plugin:${pl}`));
      }
    }
    return res;
  })(),
];

const commands = [
  ...collectMd(path.join(HOME, ".claude", "commands"), "user"),
];

let mcpServers = [];
let hooks = [];
let settingsRaw = {};
try {
  settingsRaw = JSON.parse(fs.readFileSync(path.join(HOME, ".claude", "settings.json"), "utf8"));
} catch {}
for (const [k, v] of Object.entries(settingsRaw.mcpServers || {})) {
  mcpServers.push({ name: k, transport: v.type || (v.command ? "stdio" : "http"), command: v.command || v.url || "", source: "settings.json" });
}
const mcpDir = path.join(HOME, ".claude", "mcp-configs");
if (fs.existsSync(mcpDir)) {
  for (const f of fs.readdirSync(mcpDir).filter((x) => x.endsWith(".json"))) {
    try {
      const j = JSON.parse(fs.readFileSync(path.join(mcpDir, f), "utf8"));
      for (const [k, v] of Object.entries(j.mcpServers || j || {})) {
        if (typeof v !== "object" || v === null) continue;
        mcpServers.push({ name: k, transport: v.type || (v.command ? "stdio" : "http"), command: v.command || v.url || "", source: `mcp-configs/${f}` });
      }
    } catch {}
  }
}
const seenMcp = new Set();
mcpServers = mcpServers.filter((m) => (seenMcp.has(m.name) ? false : seenMcp.add(m.name)));

for (const [event, arr] of Object.entries(settingsRaw.hooks || {})) {
  for (const entry of arr || []) {
    for (const h of entry.hooks || []) {
      hooks.push({ event, matcher: entry.matcher || "*", type: h.type, command: (h.command || "").slice(0, 300) });
    }
  }
}

let installedPlugins = [];
try {
  const ip = JSON.parse(fs.readFileSync(path.join(HOME, ".claude", "plugins", "installed_plugins.json"), "utf8"));
  installedPlugins = Object.entries(ip.plugins || {}).map(([k, v]) => ({
    id: k,
    plugin: k.split("@")[0],
    marketplace: k.split("@")[1] || "",
    scope: v[0]?.scope || "",
    version: v[0]?.version || "",
    installedAt: (v[0]?.installedAt || "").slice(0, 10),
  }));
} catch {}

const out = {
  generatedAt: new Date().toISOString(),
  host: { platform: process.platform, node: process.version },
  totals: {
    skillDirsFound: units.length,
    uniqueSkills: catalog.length,
    installedUnique: catalog.filter((s) => s.anyInstalled).length,
    availableOnly: catalog.filter((s) => !s.anyInstalled).length,
    emptyDirs: emptyDirs.length,
    emptyRecoverable: emptyDirs.filter((e) => e.recoverable).length,
    symlinks: links.length,
    nameCollisions: collisions.length,
    agents: agents.length,
    commands: commands.length,
    mcpServers: mcpServers.length,
    hooks: hooks.length,
    installedPlugins: installedPlugins.length,
  },
  catalog,
  emptyDirs,
  links,
  collisions,
  agents,
  commands,
  mcpServers,
  hooks,
  installedPlugins,
};

fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
console.log(JSON.stringify(out.totals, null, 2));
console.log("\nby tool (unique skills):");
const tc = {};
for (const s of catalog) for (const t of s.tools) tc[t] = (tc[t] || 0) + 1;
console.log(Object.entries(tc).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${k}: ${v}`).join("\n"));
console.log("\nby category:");
const cc = {};
for (const s of catalog) cc[s.category] = (cc[s.category] || 0) + 1;
console.log(Object.entries(cc).sort((a, b) => b[1] - a[1]).map(([k, v]) => `  ${k}: ${v}`).join("\n"));
console.log(`\nwrote ${OUT}`);
