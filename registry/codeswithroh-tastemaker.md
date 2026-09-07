# codeswithroh/tastemaker

[← back to the registry](README.md) · [← back to the atlas](../README.md)

A Claude Code skill that grounds AI-generated UI in real reference images and a persistent per-developer taste profile, instead of generic AI-slop defaults.

| | |
|---|---|
| Repo | https://github.com/codeswithroh/tastemaker |
| Skills published | 2 |
| Installed here | 0 |
| Stars / forks | 334 / 20 |
| License | MIT |
| Last push | 2026-09-01 |
| Scanned at commit | `a8136a09cf3b` |
| Status | **Not installed** |
| Starred | 2026-09-07 |

> evaluated, not installed — duplicates design-dna

**Installing every skill here would add ~379 tokens** to every system prompt, before one of them fires. See [../reports/context-cost.md](../reports/context-cost.md) for what the installed library already costs.

## Skills

✅ installed here · ⚠️ a different skill already holds this name · — not on this disk

### `skills`

| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
| `tastemaker` | — | auto | 58 KB | 218 | Generate genuinely beautiful, on-brand UI instead of generic "AI slop" — use whenever the user asks to build, design, style, or improve a UI, landing… |

### `skills/tastemaker`

| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
| `ideagram` | — | auto | 15 KB | 161 | Turn a concept, feature description, blog post, or pitch into a single beautiful, on-brand illustration by matching it to a real unDraw illustration… |

## Installing one of these

```bash
git clone --depth 1 https://github.com/codeswithroh/tastemaker.git /tmp/codeswithroh-tastemaker
cp -r /tmp/codeswithroh-tastemaker/<path-from-the-table-above> ~/.claude/skills/
```

Copy the whole skill directory, not just `SKILL.md` — the `Size` column counts sibling files, and a skill whose siblings are missing has dangling links. The upstream `npx skills@latest add codeswithroh/tastemaker` installs the entire repo through a shared store; see [../reports/health.md](../reports/health.md) for why that store is avoided here.
