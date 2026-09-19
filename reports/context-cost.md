# Context cost

[← back](../README.md)

A skill's **description** is loaded into every session so the model can decide whether to open it. The body is only read on demand. So the standing cost of a skill library is the sum of its descriptions, and the on-demand cost is the body.

## Standing cost

| | |
|---|---:|
| Skills reachable from Claude Code | 631 |
| Their descriptions, summed | **~45,946 tokens** |
| Average description | ~73 tokens |

That is what the library costs before a single question is asked.

## The 25 longest descriptions

Trimming these is the cheapest context win available.

| Skill | Description tokens | Pack |
|---|---:|---|
| `scroll-craft` | 294 | nateherk-design |
| `docx` | 254 | standalone |
| `flags-sdk` | 252 | vercel |
| `flags-sdk` | 248 | vercel |
| `flags-sdk` | 248 | vercel |
| `docs` | 247 | standalone |
| `learn` | 246 | standalone |
| `pptx` | 241 | standalone |
| `xlsx` | 239 | standalone |
| `context-mode` | 237 | context-mode |
| `agent-browser` | 232 | agent-pack |
| `impeccable` | 224 | agents-std-store |
| `constraint-driven-development` | 222 | agent-skills |
| `long-horizon-prompting` | 213 | agents-std-store |
| `design-dna` | 211 | standalone |
| `supabase-postgres-best-practices` | 209 | agents-std-store |
| `customer-research` | 204 | marketing-skills |
| `directory-submissions` | 204 | marketing-skills |
| `token-budget-advisor` | 204 | ecc |
| `ab-testing` | 197 | marketing-skills |
| `chat-sdk` | 194 | vercel |
| `prompt-optimizer` | 193 | ecc |
| `image` | 185 | marketing-skills |
| `self-improvement-loops` | 185 | agents-std-store |
| `social` | 184 | marketing-skills |

## The 25 heaviest bodies

Cost paid only when the skill is actually invoked.

| Skill | SKILL.md tokens | Lines |
|---|---:|---:|
| `design-taste-frontend` | 22,115 | 1,207 |
| `claude-api` | 21,693 | 573 |
| `huashu-design` | 16,461 | 583 |
| `graphify-windows` | 12,865 | 1,247 |
| `vercel-functions` | 12,369 | 961 |
| `workflow` | 11,301 | 1,222 |
| `workflow` | 11,300 | 1,222 |
| `write-swift` | 10,644 | 389 |
| `gepeto` | 10,561 | 566 |
| `imagegen-frontend-mobile` | 10,448 | 1,466 |
| `documents` | 9,954 | 456 |
| `imagegen-frontend-web` | 9,461 | 988 |
| `image-to-code` | 9,418 | 1,229 |
| `agency-healthcare-marketing-compliance` | 8,914 | 399 |
| `modern-ui-designer` | 8,493 | 1,342 |
| `skill-creator` | 8,414 | 486 |
| `skill-creator` | 8,338 | 486 |
| `agency-supply-chain-strategist` | 8,327 | 586 |
| `Hooks Automation` | 8,137 | 1,202 |
| `Hooks Automation` | 8,137 | 1,202 |
| `subagent-driven-development` | 8,085 | 569 |
| `skill-judge` | 7,946 | 753 |
| `windows-desktop-e2e` | 7,861 | 888 |
| `workflow` | 7,832 | 795 |
| `agency-marketing-short-video-editing-coach` | 7,744 | 416 |

## The 25 largest on disk

Bundled scripts, references and assets. Disk, not context.

| Skill | Size | Files |
|---|---:|---:|
| `huashu-design` | 31.7 MB | 191 |
| `context-engineering-collection` | 11.2 MB | 506 |
| `artifact-template-team-alignment` | 7.1 MB | 5 |
| `canvas-design` | 5.3 MB | 83 |
| `token-optimizer` | 5.1 MB | 67 |
| `Presentations` | 4.5 MB | 113 |
| `ui-ux-pro-max` | 3.5 MB | 73 |
| `artifact-template-simple-dark-mode` | 3.2 MB | 5 |
| `artifact-template-design-report` | 3.0 MB | 5 |
| `artifact-template-strategy-memorandum` | 2.6 MB | 5 |
| `impeccable` | 2.1 MB | 57 |
| `artifact-template-project-kickoff` | 2.0 MB | 5 |
| `artifact-template-business-review` | 2.0 MB | 5 |
| `artifact-template-market-trends-report` | 1.9 MB | 5 |
| `artifact-template-simple-light-mode` | 1.5 MB | 5 |
| `claude-api` | 1.1 MB | 70 |
| `pptx` | 1.1 MB | 56 |
| `docx` | 1.1 MB | 61 |
| `pptx` | 1.1 MB | 56 |
| `docx` | 1.1 MB | 61 |
| `xlsx` | 1.1 MB | 53 |
| `cloudflare` | 938 KB | 289 |
| `book-sft-pipeline` | 668 KB | 13 |
| `artifact-template-legal-memorandum` | 644 KB | 5 |
| `reasoning-trace-optimizer` | 596 KB | 63 |
