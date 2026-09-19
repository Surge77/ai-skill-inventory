# Registry — published upstream, not necessarily here

[← back to the atlas](../README.md)

The atlas scans this machine, so a skill that was looked at and passed over leaves no row
anywhere. This is that shelf: **311 skills across 9 tracked repos**,
**273 of them not on this disk**. Nothing here is loaded or loadable until it
is copied in.

Generated **2026-09-19** from a shallow clone of each repo at the commit recorded on its page.

| Repo | Skills | Installed | Stars | License | Last push | Note |
|---|---:|---:|---:|---|---|---|
| [MengTo/Skills](mengto-skills.md) | 141 | 0 | 6,085 | MIT | 2026-09-17 | evaluated, not installed — mostly game dev and video, out of scope |
| [Owl-Listener/designer-skills](owl-listener-designer-skills.md) | 111 | 0 | 2,688 | MIT | 2026-09-05 | evaluated, not installed — encyclopedic, restates known theory |
| [addyosmani/agent-skills](addyosmani-agent-skills.md) | 25 | 25 | 96,637 | MIT | 2026-09-18 | installed 2026-09-19 — full-SDLC pack, 25 skills, all auto-invocable |
| [emilkowalski/skills](emilkowalski-skills.md) | 13 | 0 | 38,771 | MIT | 2026-09-15 | installed 2026-09-07 — animation craft |
| [jakubkrehel/skills](jakubkrehel-skills.md) | 11 | 11 | 6,903 | MIT | 2026-08-29 | installed 2026-09-07 — interface review |
| [ConardLi/garden-skills](conardli-garden-skills.md) | 5 | 0 | 12,514 | MIT | 2026-07-12 | evaluated, not installed — overlaps the existing design pile |
| [codeswithroh/tastemaker](codeswithroh-tastemaker.md) | 2 | 0 | 392 | MIT | 2026-09-10 | evaluated, not installed — duplicates design-dna |
| [ayghri/i-have-adhd](ayghri-i-have-adhd.md) | 2 | 2 | 48,388 | MIT | 2026-09-16 | installed 2026-09-19 — ADHD output shaping, opt-in only |
| [elayadesign/ai-design-skills](elayadesign-ai-design-skills.md) | 1 | 0 | 2,252 | MIT | 2026-07-29 | evaluated, not installed — overlaps landing-page-copywriter |

## How a row is matched to this disk

By SKILL.md content hash, the same digest the filesystem scan uses — never by name alone.
14 upstream skills carry a name that something unrelated already occupies here;
they show as ⚠️ rather than as installed, because a name match is not the same skill.

## Why the rest are not installed

The decision, with the evidence behind each grade, is in [../SOURCES.md](../SOURCES.md).
The short version: a skill earns a slot by encoding a decision the model would not reach on
its own. Installing all 273 would add roughly **19,481 tokens
to every request**, permanently, before one of them fired.

## Searching the shelf

```bash
grep -i "<what you need>" data/remote-skills.csv
```

Columns: repo, skill, group, path, status, trigger, bytes, description tokens, description.

## Regenerating

```bash
npm run refresh:remote
```

Repos are listed in [`tools/sources.json`](../tools/sources.json). Add one there and re-run;
each is shallow-cloned to a temp directory, read, and deleted.
