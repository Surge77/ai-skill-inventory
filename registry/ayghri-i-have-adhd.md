# ayghri/i-have-adhd

[← back to the registry](README.md) · [← back to the atlas](../README.md)

A skill to stop your coding agent from burying the answer. ADHD-friendly output.

| | |
|---|---|
| Repo | https://github.com/ayghri/i-have-adhd |
| Skills published | 2 |
| Installed here | 2 |
| Stars / forks | 48,388 / 2,811 |
| License | MIT |
| Last push | 2026-09-16 |
| Scanned at commit | `b15d0be58f55` |
| Status | **Fully installed** |
| Starred | 2026-09-19 |

> installed 2026-09-19 — ADHD output shaping, opt-in only

**Installing every skill here would add ~122 tokens** to every system prompt, before one of them fires. See [../reports/context-cost.md](../reports/context-cost.md) for what the installed library already costs.

## Skills

✅ installed here · ⚠️ a different skill already holds this name · — not on this disk

### `.cursor/skills`

| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
| `i-have-adhd` | ✅ | slash-only | 7 KB | 61 | Shape output for a reader with ADHD: lead with the next action, number multi-step work, restate state across turns, suppress tangents, give specific… |

### `skills`

| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
| `i-have-adhd` | ✅ | slash-only | 7 KB | 61 | Shape output for a reader with ADHD: lead with the next action, number multi-step work, restate state across turns, suppress tangents, give specific… |

## Installing one of these

```bash
git clone --depth 1 https://github.com/ayghri/i-have-adhd.git /tmp/ayghri-i-have-adhd
cp -r /tmp/ayghri-i-have-adhd/<path-from-the-table-above> ~/.claude/skills/
```

Copy the whole skill directory, not just `SKILL.md` — the `Size` column counts sibling files, and a skill whose siblings are missing has dangling links. The upstream `npx skills@latest add ayghri/i-have-adhd` installs the entire repo through a shared store; see [../reports/health.md](../reports/health.md) for why that store is avoided here.
