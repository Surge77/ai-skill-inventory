#!/usr/bin/env node
/**
 * generate-remote.mjs — render data/remote-raw.json into the registry.
 *
 * The registry is the shelf, not the library. A row here means the skill is
 * published in a tracked upstream repo; it says nothing about this disk. The
 * bridge between the two is the SKILL.md content hash, not the name: two of
 * these repos publish a skill under a name this machine already uses for
 * something unrelated, and matching on the name alone would report those as
 * installed.
 */
import fs from "node:fs";
import path from "node:path";

const REPO = process.argv[2];
if (!REPO) {
  console.error("usage: node generate-remote.mjs <repo-dir> [remote-raw.json]");
  process.exit(1);
}
const RAW = process.argv[3] || path.join(REPO, "data", "remote-raw.json");
const data = JSON.parse(fs.readFileSync(RAW, "utf8"));

// ── hygiene ──────────────────────────────────────────────────────────────────
const esc = (s) => String(s || "").replace(/\|/g, "\\|").replace(/[\r\n]+/g, " ").trim();
const trunc = (s, n) => {
  const t = esc(s);
  return t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t;
};
const kb = (b) => (b >= 1024 * 1024 ? (b / 1024 / 1024).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB");
const num = (n) => (n === null || n === undefined ? "—" : Number(n).toLocaleString("en-US"));
const slugRepo = (r) => r.replace("/", "-").toLowerCase();

const W = (rel, body) => {
  const p = path.join(REPO, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n");
};

// ── what is already on disk ──────────────────────────────────────────────────
function diskIndex() {
  for (const f of ["data/scan-raw.json", "data/skills.json"]) {
    const p = path.join(REPO, f);
    if (!fs.existsSync(p)) continue;
    const parsed = JSON.parse(fs.readFileSync(p, "utf8"));
    const rows = Array.isArray(parsed) ? parsed : parsed.catalog || [];
    if (rows.length) {
      return { hashes: new Set(rows.map((s) => s.hash).filter(Boolean)), names: new Set(rows.map((s) => s.name)) };
    }
  }
  return { hashes: new Set(), names: new Set() };
}
const disk = diskIndex();

const STATUS = {
  installed: { mark: "✅", label: "installed" },
  clash: { mark: "⚠️", label: "name taken" },
  absent: { mark: "—", label: "not here" },
};
const statusOf = (s) =>
  disk.hashes.has(s.hash) ? "installed" : disk.names.has(s.name) || disk.names.has(s.dirName) ? "clash" : "absent";

// ── derived ──────────────────────────────────────────────────────────────────
const byRepo = new Map();
for (const s of data.skills) {
  if (!byRepo.has(s.repo)) byRepo.set(s.repo, []);
  byRepo.get(s.repo).push(s);
}
const repos = data.repos.map((r) => {
  const items = (byRepo.get(r.repo) || []).sort((a, b) => a.name.localeCompare(b.name));
  const installed = items.filter((s) => statusOf(s) === "installed").length;
  const clashes = items.filter((s) => statusOf(s) === "clash").length;
  return { ...r, items, installed, clashes, absent: items.length - installed };
});

const totalSkills = data.skills.length;
const totalInstalled = data.skills.filter((s) => statusOf(s) === "installed").length;
const totalAbsent = totalSkills - totalInstalled;
const totalClashes = data.skills.filter((s) => statusOf(s) === "clash").length;
const absentDescTokens = data.skills.filter((s) => statusOf(s) !== "installed").reduce((a, s) => a + s.descTokens, 0);

const LEGEND = `✅ installed here · ⚠️ a different skill already holds this name · — not on this disk`;

// ── per-repo pages ───────────────────────────────────────────────────────────
for (const r of repos) {
  const status =
    r.absent === 0 ? "Fully installed" : r.installed === 0 ? "Not installed" : `${r.installed} of ${r.items.length} installed`;

  const grouped = new Map();
  for (const s of r.items) {
    const g = s.group || "(root)";
    if (!grouped.has(g)) grouped.set(g, []);
    grouped.get(g).push(s);
  }

  const sections = [...grouped.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([group, items]) => {
      const head = grouped.size > 1 ? `\n### \`${esc(group)}\`\n` : "";
      const rows = items
        .map((s) => {
          const st = STATUS[statusOf(s)];
          const trigger = s.modelInvocable ? "auto" : "slash-only";
          return `| \`${esc(s.name)}\` | ${st.mark} | ${trigger} | ${kb(s.bytes)} | ${num(s.descTokens)} | ${trunc(s.description, 150) || "—"} |`;
        })
        .join("\n");
      return `${head}
| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
${rows}`;
    })
    .join("\n");

  W(`registry/${slugRepo(r.repo)}.md`, `# ${esc(r.repo)}

[← back to the registry](README.md) · [← back to the atlas](../README.md)

${esc(r.description) || "_No repository description._"}

| | |
|---|---|
| Repo | https://github.com/${r.repo} |
| Skills published | ${r.items.length} |
| Installed here | ${r.installed} |
| Stars / forks | ${num(r.stars)} / ${num(r.forks)} |
| License | ${esc(r.license) || "—"} |
| Last push | ${esc(r.pushedAt || "").slice(0, 10) || "—"} |
| Scanned at commit | \`${esc(r.commit || "").slice(0, 12) || "—"}\` |
| Status | **${status}** |
| Starred | ${esc(r.starred) || "—"} |

${r.note ? `> ${esc(r.note)}\n` : ""}
**Installing every skill here would add ~${num(r.descTokens)} tokens** to every system prompt, before one of them fires. See [../reports/context-cost.md](../reports/context-cost.md) for what the installed library already costs.

## Skills

${LEGEND}
${sections}
${r.clashes ? `\n${r.clashes} of these share a name with an unrelated skill already on this disk. Installing one would collide — rename it on the way in.\n` : ""}
## Installing one of these

\`\`\`bash
git clone --depth 1 https://github.com/${r.repo}.git /tmp/${slugRepo(r.repo)}
cp -r /tmp/${slugRepo(r.repo)}/<path-from-the-table-above> ~/.claude/skills/
\`\`\`

Copy the whole skill directory, not just \`SKILL.md\` — the \`Size\` column counts sibling files, and a skill whose siblings are missing has dangling links. The upstream \`npx skills@latest add ${r.repo}\` installs the entire repo through a shared store; see [../reports/health.md](../reports/health.md) for why that store is avoided here.
`);
}

// ── index ────────────────────────────────────────────────────────────────────
const repoRows = repos
  .slice()
  .sort((a, b) => b.items.length - a.items.length)
  .map(
    (r) =>
      `| [${esc(r.repo)}](${slugRepo(r.repo)}.md) | ${r.items.length} | ${r.installed} | ${num(r.stars)} | ${esc(r.license) || "—"} | ${esc(r.pushedAt || "").slice(0, 10) || "—"} | ${esc(r.note)} |`
  )
  .join("\n");

W("registry/README.md", `# Registry — published upstream, not necessarily here

[← back to the atlas](../README.md)

The atlas scans this machine, so a skill that was looked at and passed over leaves no row
anywhere. This is that shelf: **${num(totalSkills)} skills across ${repos.length} tracked repos**,
**${num(totalAbsent)} of them not on this disk**. Nothing here is loaded or loadable until it
is copied in.

Generated **${data.generated}** from a shallow clone of each repo at the commit recorded on its page.

| Repo | Skills | Installed | Stars | License | Last push | Note |
|---|---:|---:|---:|---|---|---|
${repoRows}

## How a row is matched to this disk

By SKILL.md content hash, the same digest the filesystem scan uses — never by name alone.
${totalClashes} upstream skills carry a name that something unrelated already occupies here;
they show as ⚠️ rather than as installed, because a name match is not the same skill.

## Why the rest are not installed

The decision, with the evidence behind each grade, is in [../SOURCES.md](../SOURCES.md).
The short version: a skill earns a slot by encoding a decision the model would not reach on
its own. Installing all ${num(totalAbsent)} would add roughly **${num(absentDescTokens)} tokens
to every request**, permanently, before one of them fired.

## Searching the shelf

\`\`\`bash
grep -i "<what you need>" data/remote-skills.csv
\`\`\`

Columns: repo, skill, group, path, status, trigger, bytes, description tokens, description.

## Regenerating

\`\`\`bash
npm run refresh:remote
\`\`\`

Repos are listed in [\`tools/sources.json\`](../tools/sources.json). Add one there and re-run;
each is shallow-cloned to a temp directory, read, and deleted.
`);

// ── data ─────────────────────────────────────────────────────────────────────
const flat = data.skills.map((s) => ({
  repo: s.repo,
  name: s.name,
  group: s.group,
  path: s.repoPath,
  status: statusOf(s),
  trigger: s.modelInvocable ? "auto" : "slash-only",
  bytes: s.bytes,
  descTokens: s.descTokens,
  skillTokens: s.skillTokens,
  hash: s.hash,
  files: s.files,
  description: s.description,
}));

W("data/remote-skills.json", JSON.stringify({ generated: data.generated, skills: flat }, null, 2));

const csvCell = (v) => `"${String(v ?? "").replace(/"/g, '""').replace(/[\r\n]+/g, " ")}"`;
const csv = [
  ["repo", "skill", "group", "path", "status", "trigger", "bytes", "desc_tokens", "skill_tokens", "description"].map(csvCell).join(","),
  ...flat.map((s) =>
    [s.repo, s.name, s.group, s.path, s.status, s.trigger, s.bytes, s.descTokens, s.skillTokens, s.description].map(csvCell).join(",")
  ),
].join("\n");
W("data/remote-skills.csv", csv);

console.log(
  `registry written: ${totalSkills} skills, ${repos.length} repos — ${totalInstalled} installed, ${totalClashes} name clashes, ${totalAbsent} absent`
);
