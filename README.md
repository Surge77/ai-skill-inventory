# Skill Atlas

Every AI coding skill installed on one machine, scanned, deduplicated, categorised and documented.

Generated **2026-09-07** from a live filesystem scan of 2,350 skill directories across 13 AI tools.

## The numbers

| | |
|---|---|
| Unique skills (deduplicated by content hash) | **1,144** |
| Skill directories on disk | 2,350 |
| Installed and loadable | 806 |
| Sitting in a marketplace, not installed | 338 |
| Shared across more than one tool | 136 |
| Symlinks into the shared store | 869 |
| **Broken (empty directory, no SKILL.md)** | **119** |
| Same name, different content | 136 |
| Subagents | 99 |
| Slash commands | 76 |
| MCP servers | 28 |
| Installed Claude Code plugins | 32 |

## Read this first

**118 skills are installed on this machine but invisible to Claude Code.** `~/.claude/skills/` holds 119 empty directories whose content lives in the shared store at `~/.agents/skills/`. Every other tool — Cursor, Codex, Continue, Factory, Qwen, Roo, Cline, Trae — symlinks into that store correctly. Claude Code got bare directories instead. See [reports/health.md](reports/health.md) for the fix.

## Browse it

[`docs/index.html`](docs/index.html) is a single-file browser over the whole catalog — search, filter by category, tool or install status, sort by size. Open it locally, or publish it by turning on GitHub Pages for the `docs/` folder in repository settings.

## Categories

| Category | Skills | |
|---|---:|---|
| AI & Agents | 208 | [open](catalog/ai-and-agents.md) |
| Frontend & UI | 110 | [open](catalog/frontend-and-ui.md) |
| Marketing & Growth | 83 | [open](catalog/marketing-and-growth.md) |
| Planning & Product | 71 | [open](catalog/planning-and-product.md) |
| Meta & Skill Tooling | 65 | [open](catalog/meta-and-skill-tooling.md) |
| Backend & APIs | 55 | [open](catalog/backend-and-apis.md) |
| DevOps & Infra | 44 | [open](catalog/devops-and-infra.md) |
| Testing & QA | 37 | [open](catalog/testing-and-qa.md) |
| Debugging & Performance | 37 | [open](catalog/debugging-and-performance.md) |
| Docs & Writing | 34 | [open](catalog/docs-and-writing.md) |
| Security | 32 | [open](catalog/security.md) |
| Code Quality & Review | 26 | [open](catalog/code-quality-and-review.md) |
| Business & Ops | 25 | [open](catalog/business-and-ops.md) |
| Data & Databases | 25 | [open](catalog/data-and-databases.md) |
| Games & XR | 22 | [open](catalog/games-and-xr.md) |
| Languages & Frameworks | 20 | [open](catalog/languages-and-frameworks.md) |
| Media & Content | 19 | [open](catalog/media-and-content.md) |
| Git & Workflow | 18 | [open](catalog/git-and-workflow.md) |
| Research & Analysis | 18 | [open](catalog/research-and-analysis.md) |
| Browser & Automation | 14 | [open](catalog/browser-and-automation.md) |
| Personal & Communication | 12 | [open](catalog/personal-and-communication.md) |
| Uncategorized | 169 | [open](catalog/uncategorized.md) |

## Where the skills live

| Tool | Unique skills reachable |
|---|---:|
| claude-code | 757 |
| codex | 228 |
| continue | 136 |
| factory | 136 |
| kilocode | 136 |
| qwen-code | 136 |
| roo-code | 136 |
| shared-store | 136 |
| trae | 125 |
| cursor | 116 |
| cline | 103 |
| agents-std | 33 |
| gemini | 1 |

## Biggest packs

| Pack | Skills |
|---|---:|
| `ecc` | 176 |
| `agents-std-store` | 160 |
| `agency-roles` | 156 |
| `plugins` | 135 |
| `vercel` | 113 |
| `agent-pack` | 99 |
| `marketing-skills` | 69 |
| `standalone` | 57 |
| `.agents` | 45 |
| `.claude` | 35 |
| `skills` | 18 |
| `superpowers` | 14 |
| `claude-mem` | 13 |
| `caveman` | 8 |
| `context-mode` | 7 |

## Reports

- [Health](reports/health.md) — broken installs, empty directories, the fix
- [Duplicates](reports/duplicates.md) — same skill installed many times, same name with different content
- [Context cost](reports/context-cost.md) — what this library costs in tokens before you ask a question
- [Symlink topology](reports/symlinks.md) — how the shared store is wired into each tool

## Sources

- [`SOURCES.md`](SOURCES.md) — the upstream repos these skills come from, what was evaluated, what was installed or rejected, and why. Hand-maintained: the scan reads the disk, and the disk does not record where a skill was published.

## Inventory

- [Subagents](inventory/agents.md) (99)
- [Slash commands](inventory/commands.md) (76)
- [MCP servers](inventory/mcp-servers.md) (28)
- [Hooks](inventory/hooks.md) (5)
- [Plugins](inventory/plugins.md) (32)

## Data

- [`data/skills.json`](data/skills.json) — the catalog, machine readable
- [`data/skills.csv`](data/skills.csv) — the same, for a spreadsheet
- [`data/scan-raw.json`](data/scan-raw.json) — full scan output including every location

## Regenerating

```bash
node tools/scan.mjs data/scan-raw.json
node tools/generate.mjs . data/scan-raw.json
```

The scan reads only local config directories and writes nothing outside this repo. Paths are rewritten to `~` and anything shaped like a credential is redacted before it is written.

To correct a category, add the skill's hash or name to `tools/overrides.json` and re-run. Overrides survive a rescan.

## How categorisation works

Keyword scoring over the skill name and its frontmatter description, with pack prefixes (`agency-`, `agent-`, `caveman-`) stripped first so that `agent-authentication` classifies as backend rather than as an agent skill. A skill the keywords cannot place inherits the dominant category of its own pack, and is marked `family-inference`. What neither reaches stays **Uncategorized** rather than being forced into a bucket — 169 skills are honestly unplaced.

| Source | Skills |
|---|---:|
| keywords | 921 |
| none | 169 |
| family-inference | 54 |
