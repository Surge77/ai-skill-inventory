#!/usr/bin/env node
/**
 * generate.mjs — turn scan.json into the browsable atlas.
 *
 * Everything here is derived. Edit tools/overrides.json to correct a category;
 * a re-run keeps the correction.
 */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const REPO = process.argv[2];
if (!REPO) {
  console.error("usage: node generate.mjs <repo-dir> [scan.json]");
  process.exit(1);
}
const SCAN = process.argv[3] || path.join(REPO, "data", "scan-raw.json");
const data = JSON.parse(fs.readFileSync(SCAN, "utf8"));

const HOME = os.homedir();
const overridesPath = path.join(REPO, "tools", "overrides.json");
const overrides = fs.existsSync(overridesPath) ? JSON.parse(fs.readFileSync(overridesPath, "utf8")) : { categories: {}, hidden: [] };

// ── hygiene ──────────────────────────────────────────────────────────────────
const SECRET = /(sk-[A-Za-z0-9]{8,}|gh[pousr]_[A-Za-z0-9]{8,}|xox[baprs]-[A-Za-z0-9-]{8,}|AIza[0-9A-Za-z_-]{20,}|Bearer\s+[A-Za-z0-9._-]{12,}|(?:api[_-]?key|token|secret|password)\s*[=:]\s*["']?[A-Za-z0-9._-]{12,})/gi;
function clean(s) {
  if (!s) return "";
  return String(s)
    .split(HOME).join("~")
    .replace(/[A-Za-z]:[\\/]Users[\\/][^\\/\s"']+/g, "~")
    .replace(SECRET, "[REDACTED]")
    .replace(/\r/g, "");
}
const esc = (s) => clean(s).replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
const trunc = (s, n) => {
  const t = esc(s);
  return t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t;
};
const slug = (s) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const kb = (b) => (b >= 1024 * 1024 ? (b / 1024 / 1024).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB");
const num = (n) => n.toLocaleString("en-US");

// ── apply overrides ──────────────────────────────────────────────────────────
const catalog = data.catalog
  .filter((s) => !overrides.hidden.includes(s.hash))
  .map((s) => {
    const o = overrides.categories[s.hash] || overrides.categories[s.name];
    return o ? { ...s, category: o, categorySource: "manual" } : s;
  });

// ── derived views ────────────────────────────────────────────────────────────
const byCategory = new Map();
for (const s of catalog) {
  if (!byCategory.has(s.category)) byCategory.set(s.category, []);
  byCategory.get(s.category).push(s);
}
const categories = [...byCategory.entries()]
  .map(([name, items]) => ({ name, items: items.sort((a, b) => a.name.localeCompare(b.name)) }))
  .sort((a, b) => (a.name === "Uncategorized" ? 1 : b.name === "Uncategorized" ? -1 : b.items.length - a.items.length));

const toolCount = {};
for (const s of catalog) for (const t of s.tools) toolCount[t] = (toolCount[t] || 0) + 1;

const familyCount = {};
for (const s of catalog) familyCount[s.family] = (familyCount[s.family] || 0) + 1;

const claudeInstalled = catalog.filter((s) =>
  s.locations.some((l) => l.tool === "claude-code" && l.status === "installed")
);
const marketplaceOnly = catalog.filter((s) => !s.anyInstalled);
const multiTool = catalog.filter((s) => s.tools.length > 1);
const descTokenTotal = claudeInstalled.reduce((a, s) => a + s.descTokens, 0);
const heavy = [...catalog].sort((a, b) => b.skillTokens - a.skillTokens).slice(0, 25);
const fat = [...catalog].sort((a, b) => b.bytes - a.bytes).slice(0, 25);

// ── writers ──────────────────────────────────────────────────────────────────
const W = (rel, body) => {
  const p = path.join(REPO, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n");
};

const STAMP = data.generatedAt.slice(0, 10);

function skillRow(s) {
  const where = s.tools.join(", ");
  const badge = s.anyInstalled ? "" : " *(marketplace only)*";
  return `| \`${esc(s.name)}\` | ${trunc(s.description || "—", 190)}${badge} | ${esc(s.family)} | ${where} | ${s.files} files, ${kb(s.bytes)} |`;
}

function categoryPage(cat) {
  const items = cat.items;
  const installed = items.filter((s) => s.anyInstalled).length;
  const lines = [
    `# ${cat.name}`,
    "",
    `${items.length} skills — ${installed} installed, ${items.length - installed} available in a marketplace but not installed.`,
    "",
    `[← back to the atlas](../README.md)`,
    "",
    "| Skill | What it does | Pack | Tools | Size |",
    "|---|---|---|---|---|",
    ...items.map(skillRow),
    "",
    "## Detail",
    "",
  ];
  for (const s of items) {
    lines.push(`### \`${esc(s.name)}\``);
    lines.push("");
    lines.push(esc(s.description) || "_No description in frontmatter._");
    lines.push("");
    const meta = [
      ["Pack", s.family],
      ["Origin", s.origin.kind === "plugin" ? `plugin \`${s.origin.plugin}\` from \`${s.origin.marketplace}\`` : s.origin.kind === "marketplace" ? `marketplace \`${s.origin.marketplace}\`` : "standalone"],
      ["Status", s.anyInstalled ? "installed" : "available, not installed"],
      ["Tools it reaches", s.tools.join(", ")],
      ["Installed copies", `${s.installCount} (${s.locations.filter((l) => l.isLink).length} symlinked)`],
      ["Canonical path", `\`~/${esc(s.pathKey)}\``],
      ["Size", `${s.files} files, ${kb(s.bytes)}`],
      ["SKILL.md", `${s.bodyLines} lines, ~${num(s.skillTokens)} tokens`],
      ["Description cost", `~${s.descTokens} tokens always in context`],
      ["Allowed tools", s.frontmatter["allowed-tools"] || s.frontmatter.tools || "—"],
      ["Model", s.frontmatter.model || "—"],
      ["Last modified", s.mtime || "—"],
      ["Category source", s.categorySource],
      ["Content hash", `\`${s.hash}\``],
    ];
    lines.push("| Field | Value |");
    lines.push("|---|---|");
    for (const [k, v] of meta) lines.push(`| ${k} | ${esc(String(v)) || "—"} |`);
    if (s.subdirs.length) lines.push(`| Bundled | ${s.subdirs.slice(0, 8).map((x) => `\`${esc(x)}\``).join(", ")} |`);
    lines.push("");
  }
  return lines.join("\n");
}

for (const cat of categories) W(`catalog/${slug(cat.name)}.md`, categoryPage(cat));

// ── README ───────────────────────────────────────────────────────────────────
const brokenRecoverable = data.emptyDirs.filter((e) => e.recoverable);
const readme = `# Skill Atlas

Every AI coding skill installed on one machine, scanned, deduplicated, categorised and documented.

Generated **${STAMP}** from a live filesystem scan of ${num(data.totals.skillDirsFound)} skill directories across ${Object.keys(toolCount).length} AI tools.

## The numbers

| | |
|---|---|
| Unique skills (deduplicated by content hash) | **${num(catalog.length)}** |
| Skill directories on disk | ${num(data.totals.skillDirsFound)} |
| Installed and loadable | ${num(catalog.filter((s) => s.anyInstalled).length)} |
| Sitting in a marketplace, not installed | ${num(marketplaceOnly.length)} |
| Shared across more than one tool | ${num(multiTool.length)} |
| Symlinks into the shared store | ${num(data.totals.symlinks)} |
| **Broken (empty directory, no SKILL.md)** | **${num(data.totals.emptyDirs)}** |
| Same name, different content | ${num(data.totals.nameCollisions)} |
| Subagents | ${num(data.totals.agents)} |
| Slash commands | ${num(data.totals.commands)} |
| MCP servers | ${num(data.totals.mcpServers)} |
| Installed Claude Code plugins | ${num(data.totals.installedPlugins)} |

## Read this first

**${data.totals.emptyRecoverable} skills are installed on this machine but invisible to Claude Code.** \`~/.claude/skills/\` holds ${data.totals.emptyDirs} empty directories whose content lives in the shared store at \`~/.agents/skills/\`. Every other tool — Cursor, Codex, Continue, Factory, Qwen, Roo, Cline, Trae — symlinks into that store correctly. Claude Code got bare directories instead. See [reports/health.md](reports/health.md) for the fix.

## Browse it

[\`docs/index.html\`](docs/index.html) is a single-file browser over the whole catalog — search, filter by category, tool or install status, sort by size. Open it locally, or publish it by turning on GitHub Pages for the \`docs/\` folder in repository settings.

## Categories

| Category | Skills | |
|---|---:|---|
${categories.map((c) => `| ${c.name} | ${c.items.length} | [open](catalog/${slug(c.name)}.md) |`).join("\n")}

## Where the skills live

| Tool | Unique skills reachable |
|---|---:|
${Object.entries(toolCount).sort((a, b) => b[1] - a[1]).map(([k, v]) => `| ${k} | ${v} |`).join("\n")}

## Biggest packs

| Pack | Skills |
|---|---:|
${Object.entries(familyCount).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([k, v]) => `| \`${esc(k)}\` | ${v} |`).join("\n")}

## Reports

- [Health](reports/health.md) — broken installs, empty directories, the fix
- [Duplicates](reports/duplicates.md) — same skill installed many times, same name with different content
- [Context cost](reports/context-cost.md) — what this library costs in tokens before you ask a question
- [Symlink topology](reports/symlinks.md) — how the shared store is wired into each tool

## Inventory

- [Subagents](inventory/agents.md) (${data.totals.agents})
- [Slash commands](inventory/commands.md) (${data.totals.commands})
- [MCP servers](inventory/mcp-servers.md) (${data.totals.mcpServers})
- [Hooks](inventory/hooks.md) (${data.totals.hooks})
- [Plugins](inventory/plugins.md) (${data.totals.installedPlugins})

## Data

- [\`data/skills.json\`](data/skills.json) — the catalog, machine readable
- [\`data/skills.csv\`](data/skills.csv) — the same, for a spreadsheet
- [\`data/scan-raw.json\`](data/scan-raw.json) — full scan output including every location

## Regenerating

\`\`\`bash
node tools/scan.mjs data/scan-raw.json
node tools/generate.mjs . data/scan-raw.json
\`\`\`

The scan reads only local config directories and writes nothing outside this repo. Paths are rewritten to \`~\` and anything shaped like a credential is redacted before it is written.

To correct a category, add the skill's hash or name to \`tools/overrides.json\` and re-run. Overrides survive a rescan.

## How categorisation works

Keyword scoring over the skill name and its frontmatter description, with pack prefixes (\`agency-\`, \`agent-\`, \`caveman-\`) stripped first so that \`agent-authentication\` classifies as backend rather than as an agent skill. A skill the keywords cannot place inherits the dominant category of its own pack, and is marked \`family-inference\`. What neither reaches stays **Uncategorized** rather than being forced into a bucket — ${byCategory.get("Uncategorized")?.length || 0} skills are honestly unplaced.

| Source | Skills |
|---|---:|
${Object.entries(catalog.reduce((a, s) => ((a[s.categorySource] = (a[s.categorySource] || 0) + 1), a), {})).sort((a, b) => b[1] - a[1]).map(([k, v]) => `| ${k} | ${v} |`).join("\n")}
`;
W("README.md", readme);

// ── health ───────────────────────────────────────────────────────────────────
W(
  "reports/health.md",
  `# Health

[← back](../README.md)

## ${data.totals.emptyDirs} empty skill directories

\`~/.claude/skills/\` contains directories with no \`SKILL.md\` inside. Claude Code skips them silently, so these skills are installed on the machine and unusable from Claude Code.

${data.totals.emptyRecoverable} of ${data.totals.emptyDirs} are **recoverable**: the real content is in the shared store at \`~/.agents/skills/\`, which every other tool symlinks to correctly.

### The fix

Recreate the links Claude Code is missing. Windows needs an elevated shell or Developer Mode for \`New-Item -ItemType SymbolicLink\`; \`mklink /J\` (a junction) works without elevation.

\`\`\`powershell
# PowerShell, from any directory. Dry run first: drop -WhatIf to apply.
Get-ChildItem "$env:USERPROFILE\\.claude\\skills" -Directory |
  Where-Object { -not (Test-Path (Join-Path $_.FullName 'SKILL.md')) } |
  Where-Object { Test-Path "$env:USERPROFILE\\.agents\\skills\\$($_.Name)\\SKILL.md" } |
  ForEach-Object {
    Remove-Item $_.FullName -Force -WhatIf
    New-Item -ItemType SymbolicLink -Path $_.FullName -Target "$env:USERPROFILE\\.agents\\skills\\$($_.Name)" -WhatIf
  }
\`\`\`

Verify afterwards with \`node tools/scan.mjs\` — \`emptyDirs\` should drop to ${data.totals.emptyDirs - data.totals.emptyRecoverable}.

### The directories

| Directory | Recoverable from |
|---|---|
${data.emptyDirs.map((e) => `| \`~/${esc(e.path)}\` | ${e.recoverable ? `\`${esc(e.canonical)}\`` : "**nothing — content is gone**"} |`).join("\n")}

## Skills with no description

A skill with no \`description\` in its frontmatter is never selected by the model, because the description is the only thing the model sees before deciding to load it.

${(() => {
  const nd = catalog.filter((s) => !s.description);
  return nd.length
    ? `| Skill | Path |\n|---|---|\n${nd.map((s) => `| \`${esc(s.name)}\` | \`~/${esc(s.pathKey)}\` |`).join("\n")}`
    : "_None — every skill carries a description._";
})()}

## Marketplace skills not installed

${num(marketplaceOnly.length)} skills sit in cloned marketplace repositories under \`~/.claude/plugins/marketplaces/\` without being installed. They cost disk, not context.

| Marketplace | Skills waiting |
|---|---:|
${Object.entries(marketplaceOnly.reduce((a, s) => ((a[s.origin.marketplace || "unknown"] = (a[s.origin.marketplace || "unknown"] || 0) + 1), a), {})).sort((a, b) => b[1] - a[1]).map(([k, v]) => `| \`${esc(k)}\` | ${v} |`).join("\n")}
`
);

// ── duplicates ───────────────────────────────────────────────────────────────
W(
  "reports/duplicates.md",
  `# Duplicates

[← back](../README.md)

## Same content, many places

${num(multiTool.length)} skills are installed into more than one tool. This is by design where a symlink points at the shared store, and waste where it is a real copy.

| Skill | Copies | Tools | Symlinked |
|---|---:|---|---:|
${[...catalog].sort((a, b) => b.installCount - a.installCount).slice(0, 60).map((s) => `| \`${esc(s.name)}\` | ${s.installCount} | ${s.tools.join(", ")} | ${s.locations.filter((l) => l.isLink).length} |`).join("\n")}

## Same name, different content

${num(data.collisions.length)} names resolve to more than one distinct \`SKILL.md\`. Usually two versions of the same pack; occasionally two unrelated skills that picked the same name, which is a real ambiguity when you type the slash command.

| Name | Variants | Where |
|---|---:|---|
${data.collisions.slice(0, 80).map((c) => `| \`${esc(c.name)}\` | ${c.variants.length} | ${c.variants.map((v) => `\`${esc(v.path.split("/").slice(-3).join("/"))}\``).join("<br>")} |`).join("\n")}
`
);

// ── context cost ─────────────────────────────────────────────────────────────
W(
  "reports/context-cost.md",
  `# Context cost

[← back](../README.md)

A skill's **description** is loaded into every session so the model can decide whether to open it. The body is only read on demand. So the standing cost of a skill library is the sum of its descriptions, and the on-demand cost is the body.

## Standing cost

| | |
|---|---:|
| Skills reachable from Claude Code | ${num(claudeInstalled.length)} |
| Their descriptions, summed | **~${num(descTokenTotal)} tokens** |
| Average description | ~${Math.round(descTokenTotal / Math.max(1, claudeInstalled.length))} tokens |

That is what the library costs before a single question is asked.

## The 25 longest descriptions

Trimming these is the cheapest context win available.

| Skill | Description tokens | Pack |
|---|---:|---|
${[...claudeInstalled].sort((a, b) => b.descTokens - a.descTokens).slice(0, 25).map((s) => `| \`${esc(s.name)}\` | ${s.descTokens} | ${esc(s.family)} |`).join("\n")}

## The 25 heaviest bodies

Cost paid only when the skill is actually invoked.

| Skill | SKILL.md tokens | Lines |
|---|---:|---:|
${heavy.map((s) => `| \`${esc(s.name)}\` | ${num(s.skillTokens)} | ${num(s.bodyLines)} |`).join("\n")}

## The 25 largest on disk

Bundled scripts, references and assets. Disk, not context.

| Skill | Size | Files |
|---|---:|---:|
${fat.map((s) => `| \`${esc(s.name)}\` | ${kb(s.bytes)} | ${s.files} |`).join("\n")}
`
);

// ── symlinks ─────────────────────────────────────────────────────────────────
const linkTargets = {};
for (const l of data.links) {
  const t = clean(l.target || "").replace(/\\/g, "/");
  linkTargets[t] = (linkTargets[t] || 0) + 1;
}
const linkByTool = {};
for (const l of data.links) {
  const tool = l.path.split("/")[0];
  linkByTool[tool] = (linkByTool[tool] || 0) + 1;
}
W(
  "reports/symlinks.md",
  `# Symlink topology

[← back](../README.md)

${num(data.links.length)} of the ${num(data.totals.skillDirsFound)} skill directories on disk are symlinks. The pattern is one shared store with every tool linking into it, which is the right shape: install once, reach every tool.

\`\`\`
~/.agents/skills/<skill>/          <- the actual content
   ^  ^  ^
   |  |  +-- ~/.cursor/skills/<skill>      (symlink)
   |  +----- ~/.codex/skills/<skill>       (symlink)
   +-------- ~/.continue, .factory, .qwen, .roo, .kilocode, .cline, .trae

~/.claude/skills/<skill>/          <- empty directory, link never created
\`\`\`

## Links per tool

| Tool directory | Symlinks |
|---|---:|
${Object.entries(linkByTool).sort((a, b) => b[1] - a[1]).map(([k, v]) => `| \`${esc(k)}\` | ${v} |`).join("\n")}

## Most-linked targets

| Target | Incoming links |
|---|---:|
${Object.entries(linkTargets).sort((a, b) => b[1] - a[1]).slice(0, 30).map(([k, v]) => `| \`${esc(k)}\` | ${v} |`).join("\n")}
`
);

// ── inventories ──────────────────────────────────────────────────────────────
W(
  "inventory/agents.md",
  `# Subagents

[← back](../README.md)

${num(data.agents.length)} agent definitions. An agent is a separate context with its own tool allowlist; a skill is instructions loaded into this one.

| Agent | Purpose | Tools | Model | Source |
|---|---|---|---|---|
${data.agents.sort((a, b) => a.name.localeCompare(b.name)).map((a) => `| \`${esc(a.name)}\` | ${trunc(a.description || "—", 160)} | ${trunc(a.tools || "—", 60)} | ${esc(a.model) || "—"} | ${esc(a.source)} |`).join("\n")}
`
);

W(
  "inventory/commands.md",
  `# Slash commands

[← back](../README.md)

${num(data.commands.length)} user-level commands in \`~/.claude/commands/\`.

| Command | What it does | Tools |
|---|---|---|
${data.commands.sort((a, b) => a.name.localeCompare(b.name)).map((c) => `| \`/${esc(c.name)}\` | ${trunc(c.description || "—", 170)} | ${trunc(c.tools || "—", 60)} |`).join("\n")}
`
);

W(
  "inventory/mcp-servers.md",
  `# MCP servers

[← back](../README.md)

${num(data.mcpServers.length)} configured servers. Each one adds tool definitions to the context of every session it is enabled in, so an unused server is a standing cost.

| Server | Transport | Entry point | Configured in |
|---|---|---|---|
${data.mcpServers.sort((a, b) => a.name.localeCompare(b.name)).map((m) => `| \`${esc(m.name)}\` | ${esc(m.transport)} | \`${trunc(m.command, 70)}\` | ${esc(m.source)} |`).join("\n")}

Credentials are held in environment variables and are not captured by the scan.
`
);

W(
  "inventory/hooks.md",
  `# Hooks

[← back](../README.md)

${num(data.hooks.length)} hooks in \`~/.claude/settings.json\`. A hook runs on a tool-call boundary and can cancel the call by exiting non-zero.

| Event | Matcher | Command |
|---|---|---|
${data.hooks.map((h) => `| ${esc(h.event)} | \`${esc(h.matcher)}\` | \`${trunc(h.command, 200)}\` |`).join("\n")}
`
);

W(
  "inventory/plugins.md",
  `# Plugins

[← back](../README.md)

${num(data.installedPlugins.length)} installed Claude Code plugins.

| Plugin | Marketplace | Scope | Version | Installed |
|---|---|---|---|---|
${data.installedPlugins.sort((a, b) => a.plugin.localeCompare(b.plugin)).map((p) => `| \`${esc(p.plugin)}\` | ${esc(p.marketplace)} | ${esc(p.scope)} | \`${trunc(p.version, 14)}\` | ${esc(p.installedAt)} |`).join("\n")}
`
);

// ── data ─────────────────────────────────────────────────────────────────────
const slim = catalog.map((s) => ({
  name: s.name,
  description: clean(s.description),
  category: s.category,
  categorySource: s.categorySource,
  family: s.family,
  tools: s.tools,
  surfaces: s.surfaces,
  installed: s.anyInstalled,
  copies: s.installCount,
  origin: s.origin,
  path: s.pathKey,
  files: s.files,
  bytes: s.bytes,
  skillTokens: s.skillTokens,
  descTokens: s.descTokens,
  bodyLines: s.bodyLines,
  mtime: s.mtime,
  hash: s.hash,
}));
W("data/skills.json", JSON.stringify({ generatedAt: data.generatedAt, count: slim.length, skills: slim }, null, 2));

// The Pages browser is served from docs/, so it needs its own compact copy.
W(
  "docs/skills.json",
  JSON.stringify({
    generatedAt: data.generatedAt,
    count: slim.length,
    skills: slim.map((s) => ({
      name: s.name,
      description: (s.description || "").slice(0, 260),
      category: s.category,
      family: s.family,
      tools: s.tools,
      installed: s.installed,
      copies: s.copies,
      skillTokens: s.skillTokens,
      descTokens: s.descTokens,
    })),
  })
);

const csvCell = (v) => `"${String(v ?? "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;
const cols = ["name", "category", "family", "installed", "copies", "tools", "files", "bytes", "skillTokens", "descTokens", "mtime", "path", "description"];
W(
  "data/skills.csv",
  [cols.join(","), ...slim.map((s) => cols.map((c) => csvCell(Array.isArray(s[c]) ? s[c].join(" ") : s[c])).join(","))].join("\n")
);

// scrub the raw scan before publishing it
const rawOut = JSON.parse(JSON.stringify(data));
const scrub = (o) => {
  if (typeof o === "string") return clean(o);
  if (Array.isArray(o)) return o.map(scrub);
  if (o && typeof o === "object") {
    const r = {};
    for (const [k, v] of Object.entries(o)) r[k] = scrub(v);
    return r;
  }
  return o;
};
W("data/scan-raw.json", JSON.stringify(scrub(rawOut), null, 2));

console.log(`atlas written: ${catalog.length} skills, ${categories.length} categories`);
