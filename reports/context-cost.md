# Context cost

[← back](../README.md)

A skill's **description** is loaded into every session so the model can decide whether to open it. The body is only read on demand. So the standing cost of a skill library is the sum of its descriptions, and the on-demand cost is the body.

## Standing cost

| | |
|---|---:|
| Skills reachable from Claude Code | 396 |
| Their descriptions, summed | **~28,189 tokens** |
| Average description | ~71 tokens |

That is what the library costs before a single question is asked.

## The 25 longest descriptions

Trimming these is the cheapest context win available.

| Skill | Description tokens | Pack |
|---|---:|---|
| `scroll-craft` | 294 | nateherk-design |
| `context-mode` | 237 | context-mode |
| `design-dna` | 211 | standalone |
| `customer-research` | 204 | marketing-skills |
| `directory-submissions` | 204 | marketing-skills |
| `token-budget-advisor` | 204 | ecc |
| `ab-testing` | 197 | marketing-skills |
| `chat-sdk` | 194 | vercel |
| `prompt-optimizer` | 193 | ecc |
| `image` | 185 | marketing-skills |
| `social` | 184 | marketing-skills |
| `ai-seo` | 173 | marketing-skills |
| `paywalls` | 172 | marketing-skills |
| `seo-audit` | 171 | marketing-skills |
| `copywriting` | 168 | marketing-skills |
| `site-architecture` | 168 | marketing-skills |
| `cold-email` | 165 | marketing-skills |
| `content-strategy` | 165 | marketing-skills |
| `lead-magnets` | 165 | marketing-skills |
| `cro` | 164 | marketing-skills |
| `revops` | 164 | marketing-skills |
| `sales-enablement` | 163 | marketing-skills |
| `ad-creative` | 162 | marketing-skills |
| `churn-prevention` | 159 | marketing-skills |
| `community-marketing` | 158 | marketing-skills |

## The 25 heaviest bodies

Cost paid only when the skill is actually invoked.

| Skill | SKILL.md tokens | Lines |
|---|---:|---:|
| `claude-api` | 21,568 | 571 |
| `huashu-design` | 14,565 | 802 |
| `graphify-windows` | 12,865 | 1,247 |
| `workflow` | 11,301 | 1,222 |
| `shadcn-ui` | 10,682 | 1,678 |
| `imagegen-frontend-mobile` | 10,448 | 1,466 |
| `documents` | 9,954 | 456 |
| `image-to-code` | 9,418 | 1,229 |
| `agency-healthcare-marketing-compliance` | 8,914 | 399 |
| `modern-ui-designer` | 8,493 | 1,342 |
| `ai-sdk` | 8,483 | 799 |
| `skill-creator` | 8,414 | 486 |
| `agency-supply-chain-strategist` | 8,327 | 586 |
| `workflow` | 8,245 | 979 |
| `huggingface-jobs` | 8,181 | 1,043 |
| `Hooks Automation` | 8,137 | 1,202 |
| `Hooks Automation` | 8,137 | 1,202 |
| `subagent-driven-development` | 8,085 | 569 |
| `skill-judge` | 7,946 | 753 |
| `windows-desktop-e2e` | 7,861 | 888 |
| `workflow` | 7,832 | 795 |
| `agency-marketing-short-video-editing-coach` | 7,744 | 416 |
| `nextjs` | 7,731 | 746 |
| `github-project-management` | 7,708 | 1,264 |
| `workflow` | 7,704 | 970 |

## The 25 largest on disk

Bundled scripts, references and assets. Disk, not context.

| Skill | Size | Files |
|---|---:|---:|
| `huashu-design` | 31.1 MB | 155 |
| `canvas-design` | 5.3 MB | 83 |
| `token-optimizer` | 5.1 MB | 67 |
| `Presentations` | 4.5 MB | 113 |
| `context-engineering-collection` | 2.4 MB | 223 |
| `claude-api` | 1.1 MB | 70 |
| `pptx` | 1.1 MB | 56 |
| `docx` | 1.1 MB | 61 |
| `xlsx` | 1.1 MB | 53 |
| `impeccable` | 730 KB | 52 |
| `book-sft-pipeline` | 659 KB | 11 |
| `reasoning-trace-optimizer` | 574 KB | 60 |
| `documents` | 419 KB | 78 |
| `react-best-practices` | 408 KB | 137 |
| `scroll-craft` | 359 KB | 22 |
| `skill-creator` | 225 KB | 18 |
| `openclaw` | 222 KB | 17 |
| `vercel-react-best-practices` | 203 KB | 68 |
| `huggingface-vision-trainer` | 202 KB | 13 |
| `nextjs` | 197 KB | 43 |
| `benchmark-sandbox` | 193 KB | 9 |
| `continuous-learning-v2` | 172 KB | 12 |
| `vercel-react-best-practices` | 171 KB | 59 |
| `writing-clearly-and-concisely` | 170 KB | 7 |
| `huggingface-llm-trainer` | 166 KB | 19 |
