# jakubkrehel/skills

[← back to the registry](README.md) · [← back to the atlas](../README.md)

A collection of agent skills that help you build a great interface.

| | |
|---|---|
| Repo | https://github.com/jakubkrehel/skills |
| Skills published | 11 |
| Installed here | 11 |
| Stars / forks | 5,938 / 203 |
| License | MIT |
| Last push | 2026-08-29 |
| Scanned at commit | `267330e1adfc` |
| Status | **Fully installed** |
| Starred | 2026-09-07 |

> installed 2026-09-07 — interface review

**Installing every skill here would add ~321 tokens** to every system prompt, before one of them fires. See [../reports/context-cost.md](../reports/context-cost.md) for what the installed library already costs.

## Skills

✅ installed here · ⚠️ a different skill already holds this name · — not on this disk

| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
| `better-accessibility` | ✅ | auto | 36 KB | 19 | Helps your project comply with accessibility standards and best practices. |
| `better-colors` | ✅ | auto | 39 KB | 45 | Helps you build a color system and answer anything about color in your project. You can generate palettes, use semantic tokens, convert between forma… |
| `better-interface` | ✅ | auto | 12 KB | 33 | Combines all of the `better-*` skills into a single review across accessibility, layout, writing, typography, color and UI polish. |
| `better-layout` | ✅ | auto | 18 KB | 28 | Helps with grouping, alignment, reading order, progressive disclosure and other details that make a good layout. |
| `better-typography` | ✅ | auto | 34 KB | 42 | Focuses on type scale, spacing, sizing, variable fonts, OpenType features, wrapping, truncation and other details that make typography feel great acr… |
| `better-ui` | ✅ | auto | 36 KB | 38 | Polishes and improves the UI in your project. Covers concentric border radius, optical alignment, surface depth, contextual icons, hit areas and more. |
| `better-writing` | ✅ | auto | 6 KB | 13 | Focuses on improving product copy in your project. |
| `break` | ✅ | slash-only | 11 KB | 25 | Renders a component you choose in every state and scenario on a temporary page and stress tests it. |
| `explain-interface` | ✅ | slash-only | 30 KB | 14 | Helps you figure out how something was built on the web. |
| `interface-review` | ✅ | slash-only | 22 KB | 40 | Reviews your work across multiple categories like UI, typography, layout, color, writing and accessibility and gives you a detailed analysis of the f… |
| `variant` | ✅ | slash-only | 9 KB | 24 | Builds multiple variants of a component you're working on and helps you iterate and pick one. |

## Installing one of these

```bash
git clone --depth 1 https://github.com/jakubkrehel/skills.git /tmp/jakubkrehel-skills
cp -r /tmp/jakubkrehel-skills/<path-from-the-table-above> ~/.claude/skills/
```

Copy the whole skill directory, not just `SKILL.md` — the `Size` column counts sibling files, and a skill whose siblings are missing has dangling links. The upstream `npx skills@latest add jakubkrehel/skills` installs the entire repo through a shared store; see [../reports/health.md](../reports/health.md) for why that store is avoided here.
