# emilkowalski/skills

[← back to the registry](README.md) · [← back to the atlas](../README.md)

Skills for Designers and Engineers.

| | |
|---|---|
| Repo | https://github.com/emilkowalski/skills |
| Skills published | 12 |
| Installed here | 12 |
| Stars / forks | 35,960 / 2,025 |
| License | MIT |
| Last push | 2026-08-21 |
| Scanned at commit | `d23d7f88a2e2` |
| Status | **Fully installed** |
| Starred | 2026-09-07 |

> installed 2026-09-07 — animation craft

**Installing every skill here would add ~1,103 tokens** to every system prompt, before one of them fires. See [../reports/context-cost.md](../reports/context-cost.md) for what the installed library already costs.

## Skills

✅ installed here · ⚠️ a different skill already holds this name · — not on this disk

| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
| `animate` | ✅ | auto | 20 KB | 119 | Build an animation from scratch, making the decisions in the order that determines whether it feels right — should it animate at all, what purpose, w… |
| `animate-expo` | ✅ | auto | 34 KB | 132 | Build animations in React Native and Expo, making the decisions in the order that determines whether they feel right — should it animate, which threa… |
| `animation-vocabulary` | ✅ | auto | 13 KB | 108 | Reverse-lookup glossary that turns a vague description of a web animation or motion effect into its exact term ("the bouncy thing when a popover open… |
| `apple-design` | ✅ | auto | 22 KB | 107 | Apple's approach to interface design and fluid, physical motion, translated for the web. Use when building or reviewing gesture-driven UI, spring ani… |
| `ask-sonner` | ✅ | auto | 11 KB | 107 | Guide to Sonner, the React toast library — install and wire up the Toaster, pick the right toast() call, promise and loading toasts, updating, dismis… |
| `emil-design-eng` | ✅ | auto | 27 KB | 39 | This skill encodes Emil Kowalski's philosophy on UI polish, component design, animation decisions, and the invisible details that make software feel… |
| `find-animation-opportunities` | ✅ | auto | 9 KB | 90 | Search a codebase or UI for places that don't animate but should, and reject everything that shouldn't. Read-only; it proposes motion with exact valu… |
| `improve-animations` | ✅ | auto | 18 KB | 113 | Survey a codebase's animation and motion code as a senior motion advisor, then produce a prioritized audit and self-contained implementation plans fo… |
| `pick-ui-library` | ✅ | slash-only | 4 KB | 66 | Pick the right library for a given frontend task from a curated, opinionated list — numbers, OTP inputs, charts, command menus, virtualization, drag… |
| `prototype` | ✅ | slash-only | 15 KB | 61 | Build multiple genuinely different versions of a UI piece you describe, rendered behind a visual picker so you can flip through them live and promote… |
| `review-animations` | ✅ | slash-only | 18 KB | 40 | Reviews animation and motion code against a high craft bar derived from Emil Kowalski's design engineering philosophy. Default to flagging; approval… |
| `write-swift` | ✅ | auto | 42 KB | 121 | How to write modern Swift well — modeling with value types, Swift 6 data-race safety and approachable concurrency (@concurrent, main-actor-by-default… |

## Installing one of these

```bash
git clone --depth 1 https://github.com/emilkowalski/skills.git /tmp/emilkowalski-skills
cp -r /tmp/emilkowalski-skills/<path-from-the-table-above> ~/.claude/skills/
```

Copy the whole skill directory, not just `SKILL.md` — the `Size` column counts sibling files, and a skill whose siblings are missing has dangling links. The upstream `npx skills@latest add emilkowalski/skills` installs the entire repo through a shared store; see [../reports/health.md](../reports/health.md) for why that store is avoided here.
