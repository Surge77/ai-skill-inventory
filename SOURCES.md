# Sources

Where the skills in this atlas came from, and what was rejected on the way in.

The scan reads the disk. The disk does not record where a skill was published, who
maintains it, or whether it was worth installing. This file does. It is hand-maintained
and survives `npm run refresh`.

For the skills themselves — every one published in these repos, installed or not, with
descriptions, sizes and paths — see [`registry/`](registry/README.md). This file holds the
judgment; the registry holds the shelf.

---

## 2026-09-07 — seven starred design/skill repos, evaluated

Seven repositories starred on GitHub in one sitting, all "skills for designers and
engineers" collections. **274 skills across the seven. Two repos installed (23 skills),
five rejected.** None of the 274 were present on this machine before this pass.

### The survey

| Repo | Skills | Stars | Forks | Last push | Median SKILL.md | Grade | Verdict |
|---|---:|---:|---:|---|---:|:---:|---|
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | 12 | 35,959 | 2,025 | 2026-08-21 | 11.6 KB | **A** | **Installed** |
| [jakubkrehel/skills](https://github.com/jakubkrehel/skills) | 11 | 5,938 | 203 | 2026-08-29 | 7.6 KB | **A−** | **Installed** |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 5 | 12,227 | 1,479 | 2026-07-12 | 26.6 KB | B+ | Rejected — overlap |
| [codeswithroh/tastemaker](https://github.com/codeswithroh/tastemaker) | 2 | 334 | 20 | 2026-09-01 | 54.8 KB | B+ | Rejected — duplicate |
| [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) | 1 | 1,982 | 133 | 2026-07-29 | 16.5 KB | B | Rejected — overlap |
| [MengTo/Skills](https://github.com/MengTo/Skills) | 132 | 5,845 | 696 | 2026-08-28 | 4.4 KB | B / C fit | Rejected — scope |
| [Owl-Listener/designer-skills](https://github.com/Owl-Listener/designer-skills) | 111 | 2,557 | 362 | 2026-09-05 | 2.1 KB | C+ | Rejected — encyclopedic |

### The rule applied

A skill earns a slot by encoding a **decision the model would not reach on its own** —
a gate, an exact value, a named anti-pattern. A skill that restates knowledge the model
already has is a context tax with no behaviour change, however well written it is.

That single test separated the two installs from the five rejections.

### Installed

**`emilkowalski/skills` — 12 skills, 174 KB.** Author of Sonner and Vaul; ex-Vercel,
ex-Linear. `animate` opens on a frequency table whose top row returns *no animation, ever*
for keyboard-initiated actions — an answer no general model volunteers. It then names
exact curves (`cubic-bezier(0.23, 1, 0.32, 1)`), duration bands per component class, a
transform/opacity-only property rule, and closes on a "Never Ship" table of thirteen
automatic blocks. Sibling skills are routed to, not duplicated: `review-animations`
critiques a diff, `improve-animations` audits a codebase, `find-animation-opportunities`
hunts for gaps, `animate-expo` covers React Native.

```
animate               animation-vocabulary   emil-design-eng                pick-ui-library
animate-expo          apple-design           find-animation-opportunities   prototype
ask-sonner            improve-animations     review-animations              write-swift
```

**`jakubkrehel/skills` — 11 skills, 86 KB.** `better-interface` orchestrates the six
`better-*` domain skills and owns nothing but consolidation. It carries a shared severity
scale, thirteen escalation triggers that are `HIGH` on sight and may never be averaged
down, an evidence rule (cite `path:line` and show the implementation, or it is not a
finding), a finding cap that may shorten a report but may never be why a blocker went
unreported, and a "prefer the cheaper fix" ladder where *delete* outranks *use the
platform* outranks *reuse a token* outranks *add*. A fix written at the last rung when the
first was available is itself a finding.

```
better-accessibility   better-interface   better-typography   better-writing      interface-review
better-colors          better-layout      better-ui           break               variant
                                                              explain-interface
```

### Rejected, and why

**`Owl-Listener/designer-skills` (111).** Accurate and clearly written, but encyclopedic.
`fitts-law` is a textbook entry: the formula, the 44×44pt and 48×48dp minimums, screen
edges as infinite targets. All correct, all already known to the model. 111 files at a
2.1 KB median restating Fitts's Law, Hick's Law, Miller's Law, the peak-end rule and the
serial position effect is the lowest value per context token of the seven.

**`MengTo/Skills` (132).** The writing is sharp — `no-ai-design-slop` defines slop as
"a choice made by reflex rather than for the product" and refuses to guess whether AI made
the artifact. But the surface is enormous and mostly foreign to this machine's work:
20 game-development skills, Three.js pipelines, browser video recording, "write like Meng
on X". Cherry-pick later if a specific one is ever needed.

**`ConardLi/garden-skills` (5).** Well scoped, deep files, explicit non-applicability
fences. `web-design-engineer` is genuinely good and collides head-on with the design pile
already installed here.

**`codeswithroh/tastemaker` (2).** Good mechanism — ground in real reference pixels rather
than a catalogue of canned styles. It is also, functionally, `design-dna` (zanwei), which
is already installed and does reference-UI to quantified token JSON. Two arbiters of the
same judgment is worse than one.

**`elayadesign/ai-design-skills` (1).** One opinionated landing-page system, 16.5 KB.
Overlaps `landing-page-copywriter` plus the existing visual-design skills.

### The cost that drove the rejections

Every installed skill's name and description is injected into the system prompt on every
request. These descriptions run long — tastemaker's is roughly 160 words. Installing all
274 would have cost an estimated **10–13 K tokens on every turn, permanently**, on a
machine already carrying four figures of skills.

The five rejected repos would also have stacked six competing arbiters of one judgment —
`tastemaker`, `no-ai-design-slop`, `landing-page-design`, `web-design-engineer`,
`better-ui` and `emil-design-eng` all rule on "does this UI look generically AI-made".
The model resolves that by whichever description matches the phrasing. That produces
inconsistent taste, not better taste.

### How they were installed

Cloned, then whole skill directories copied into `~/.claude/skills/`:

```bash
git clone --depth 1 https://github.com/emilkowalski/skills.git
git clone --depth 1 https://github.com/jakubkrehel/skills.git
cp -r skills/*/ ~/.claude/skills/
```

Both authors document `npx skills@latest add <owner>/<repo>`. Not used here, deliberately:
that installer writes into a shared store and links tools into it, and this machine already
carries 119 hollow `~/.claude/skills/` directories from exactly that pattern — see
[reports/health.md](reports/health.md). A plain copy is inert, verifiable and loads.

Whole directories, not just `SKILL.md`. Both packs depend on sibling files —
`animate/RECIPES.md`, `improve-animations/AUDIT.md`, `review-animations/STANDARDS.md`,
`better-interface/review-format.md`, and per-domain reference files under each `better-*`.
Copying only the entry file would leave every one of those links dangling.

No name collided with an existing skill. The `agents/openai.yaml` inside each `better-*`
skill is Codex-side metadata, inert under Claude Code, and was kept for fidelity with
upstream.

---

## Already installed before this pass

Two repos starred in the same session were already present and needed no action:
[zanwei/design-dna](https://github.com/zanwei/design-dna) (`design-dna`) and
[nateherkai/scroll-craft](https://github.com/nateherkai/scroll-craft)
(`nateherk-design:scroll-craft`, via plugin).
