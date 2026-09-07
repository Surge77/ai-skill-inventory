# Research & Analysis

18 skills — 13 installed, 5 available in a marketplace but not installed.

[← back to the atlas](../README.md)

| Skill | What it does | Pack | Tools | Size |
|---|---|---|---|---|
| `agent-benchmark-suite` | Agent skill for benchmark-suite - invoke with $agent-benchmark-suite *(marketplace only)* | agent-pack | claude-code | 1 files, 20 KB |
| `agent-researcher` | Agent skill for researcher - invoke with $agent-researcher *(marketplace only)* | agent-pack | claude-code | 1 files, 6 KB |
| `benchmark-e2e` | End-to-end benchmark suite for vercel-plugin. Runs realistic projects through skill injection, launches dev servers, verifies everything works, analyzes conversation logs, and produces an i… | vercel | claude-code | 1 files, 5 KB |
| `comprehensive-research-agent` | Ensure thorough validation, error recovery, and transparent reasoning in research tasks with multiple tool calls | agents-std-store | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 4 files, 22 KB |
| `cost-benchmark` | Run the corpus benchmark — booster locally, optional Gemini/Sonnet/Opus baselines — and persist a verifiable measured-vs-claimed table *(marketplace only)* | plugins | claude-code | 1 files, 3 KB |
| `customer-research` | When the user wants to conduct, analyze, or synthesize customer research. Use when the user mentions "customer research," "ICP research," "talk to customers," "analyze transcripts," "custom… | marketing-skills | claude-code | 3 files, 39 KB |
| `deep-research` | Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. Use when the user wants thorough researc… | ecc | claude-code | 1 files, 5 KB |
| `deep-research` | Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. Use when the user wants thorough researc… | agents-std-store | agents-std | 2 files, 5 KB |
| `deep-research` | Orchestrate multi-phase deep research with web search, memory retrieval, pattern matching, and synthesis into structured findings *(marketplace only)* | plugins | claude-code | 1 files, 3 KB |
| `deep-research` | Conduct thorough research using authoritative sources and produce evidence-backed findings with citations. Use this skill only when the user asks specifically for Deep research, uses $deep-… | deep-research-work | codex | 2 files, 12 KB |
| `literature-review` | Systematic literature-review workflow for academic, biomedical, technical, and scientific topics, including search planning, source screening, synthesis, citation checks, and evidence loggi… | ecc | claude-code | 1 files, 5 KB |
| `market-research` | Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the user wants market sizi… | ecc | claude-code | 1 files, 2 KB |
| `market-research` | Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the user wants market sizi… | agents-std-store | agents-std | 2 files, 2 KB |
| `perplexity` | Web search and research using Perplexity AI. Use when user says "search", "find", "look up", "ask", "research", or "what's the latest" for generic queries. NOT for library/framework docs (u… | agents-std-store | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 4 KB |
| `pubmed-database` | Direct PubMed and NCBI E-utilities search workflows for biomedical literature, MeSH queries, PMID lookup, citation retrieval, and API-backed literature monitoring. | ecc | claude-code | 1 files, 5 KB |
| `research-ops` | Evidence-first current-state research workflow for ECC. Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any supplied… | ecc | claude-code | 1 files, 4 KB |
| `research-synthesize` | Synthesize research findings from memory into structured reports with evidence grading, contradiction resolution, and actionable recommendations *(marketplace only)* | plugins | claude-code | 1 files, 3 KB |
| `scholar-evaluation` | Structured scholarly-work evaluation for papers, proposals, literature reviews, methods sections, evidence quality, citation support, and research-writing feedback. | ecc | claude-code | 1 files, 5 KB |

## Detail

### `agent-benchmark-suite`

Agent skill for benchmark-suite - invoke with $agent-benchmark-suite

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-benchmark-suite` |
| Size | 1 files, 20 KB |
| SKILL.md | 670 lines, ~5,101 tokens |
| Description cost | ~17 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `0b5b3b464eba` |

### `agent-researcher`

Agent skill for researcher - invoke with $agent-researcher

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-researcher` |
| Size | 1 files, 6 KB |
| SKILL.md | 195 lines, ~1,419 tokens |
| Description cost | ~15 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `34c87a2610e7` |

### `benchmark-e2e`

End-to-end benchmark suite for vercel-plugin. Runs realistic projects through skill injection, launches dev servers, verifies everything works, analyzes conversation logs, and produces an improvement report for overnight self-improvement loops.

| Field | Value |
|---|---|
| Pack | vercel |
| Origin | plugin `vercel` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/vercel/0.45.1/.claude/skills/benchmark-e2e` |
| Size | 1 files, 5 KB |
| SKILL.md | 143 lines, ~1,381 tokens |
| Description cost | ~61 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-07-24 |
| Category source | keywords |
| Content hash | `727d87a213bd` |

### `comprehensive-research-agent`

Ensure thorough validation, error recovery, and transparent reasoning in research tasks with multiple tool calls

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 9 (0 symlinked) |
| Canonical path | `~/.agents/skills/context-engineering-collection/examples/interleaved_thinking/generated_skills/comprehensive-research-agent` |
| Size | 4 files, 22 KB |
| SKILL.md | 91 lines, ~2,152 tokens |
| Description cost | ~28 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `9d7de65512b3` |
| Bundled | `references` |

### `cost-benchmark`

Run the corpus benchmark — booster locally, optional Gemini/Sonnet/Opus baselines — and persist a verifiable measured-vs-claimed table

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-cost-tracker/skills/cost-benchmark` |
| Size | 1 files, 3 KB |
| SKILL.md | 60 lines, ~767 tokens |
| Description cost | ~35 tokens always in context |
| Allowed tools | Bash |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `411fecdcbc43` |

### `customer-research`

When the user wants to conduct, analyze, or synthesize customer research. Use when the user mentions "customer research," "ICP research," "talk to customers," "analyze transcripts," "customer interviews," "survey analysis," "support ticket analysis," "voice of customer," "VOC," "build personas," "customer personas," "jobs to be done," "JTBD," "what do customers say," "what are customers struggling with," "Reddit mining," "G2 reviews," "review mining," "digital watering holes," "community research," "forum research," "competitor reviews," "customer sentiment," or "find out why customers churn/convert/buy." Use for both analyzing existing research assets AND gathering new research from online sources. For writing copy informed by research, see copywriting. For acting on research to improve pages, see cro.

| Field | Value |
|---|---|
| Pack | marketing-skills |
| Origin | plugin `marketing-skills` from `marketingskills` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/marketingskills/marketing-skills/1.9.0/skills/customer-research` |
| Size | 3 files, 39 KB |
| SKILL.md | 271 lines, ~3,003 tokens |
| Description cost | ~204 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `5ce70bbae4a4` |
| Bundled | `evals`, `references` |

### `deep-research`

Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. Use when the user wants thorough research on any topic with evidence and citations.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/deep-research` |
| Size | 1 files, 5 KB |
| SKILL.md | 160 lines, ~1,237 tokens |
| Description cost | ~58 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `e5217a6cade5` |

### `deep-research`

Multi-source deep research using firecrawl and exa MCPs. Searches the web, synthesizes findings, and delivers cited reports with source attribution. Use when the user wants thorough research on any topic with evidence and citations.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | agents-std |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/.agents/skills/deep-research` |
| Size | 2 files, 5 KB |
| SKILL.md | 155 lines, ~1,181 tokens |
| Description cost | ~58 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `528d157055f4` |
| Bundled | `agents` |

### `deep-research`

Orchestrate multi-phase deep research with web search, memory retrieval, pattern matching, and synthesis into structured findings

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-goals/skills/deep-research` |
| Size | 1 files, 3 KB |
| SKILL.md | 44 lines, ~672 tokens |
| Description cost | ~33 tokens always in context |
| Allowed tools | mcp__claude-flow__memory_store mcp__claude-flow__memory_search mcp__claude-flow__memory_search_unified mcp__claude-flow__agentdb_hierarchical-store mcp__claude-flow__agentdb_hierarchical-recall mcp__claude-flow__agentdb_pattern-search mcp__claude-flow__agentdb_pattern-store mcp__claude-flow__neural_predict mcp__claude-flow__hooks_intelligence_pattern-search mcp__claude-flow__hooks_intelligence_pattern-store mcp__claude-flow__task_create mcp__claude-flow__task_list mcp__claude-flow__task_summary Bash WebSearch WebFetch Read Write |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `d96d7e3ae4d3` |

### `deep-research`

Conduct thorough research using authoritative sources and produce evidence-backed findings with citations. Use this skill only when the user asks specifically for Deep research, uses $deep-research, or selects Deep research in Work mode. Do not use it for ordinary research requests.

| Field | Value |
|---|---|
| Pack | deep-research-work |
| Origin | plugin `deep-research-work` from `openai-curated-remote` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated-remote/deep-research-work/0.1.14/skills/deep-research` |
| Size | 2 files, 12 KB |
| SKILL.md | 184 lines, ~3,086 tokens |
| Description cost | ~71 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 1970-01-01 |
| Category source | keywords |
| Content hash | `5e4424b13aa7` |
| Bundled | `agents` |

### `literature-review`

Systematic literature-review workflow for academic, biomedical, technical, and scientific topics, including search planning, source screening, synthesis, citation checks, and evidence logging.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/scientific-thinking-literature-review` |
| Size | 1 files, 5 KB |
| SKILL.md | 193 lines, ~1,315 tokens |
| Description cost | ~48 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `f97ab83cd246` |

### `market-research`

Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the user wants market sizing, competitor comparisons, fund research, technology scans, or research that informs business decisions.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/market-research` |
| Size | 1 files, 2 KB |
| SKILL.md | 76 lines, ~576 tokens |
| Description cost | ~74 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `d5eeaa60f26e` |

### `market-research`

Conduct market research, competitive analysis, investor due diligence, and industry intelligence with source attribution and decision-oriented summaries. Use when the user wants market sizing, competitor comparisons, fund research, technology scans, or research that informs business decisions.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | agents-std |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/.agents/skills/market-research` |
| Size | 2 files, 2 KB |
| SKILL.md | 75 lines, ~572 tokens |
| Description cost | ~74 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `aaf84e3a03cd` |
| Bundled | `agents` |

### `perplexity`

Web search and research using Perplexity AI. Use when user says "search", "find", "look up", "ask", "research", or "what's the latest" for generic queries. NOT for library/framework docs (use Context7) or workspace questions.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 9 (8 symlinked) |
| Canonical path | `~/.agents/skills/perplexity` |
| Size | 1 files, 4 KB |
| SKILL.md | 129 lines, ~1,007 tokens |
| Description cost | ~57 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `29687e43a532` |

### `pubmed-database`

Direct PubMed and NCBI E-utilities search workflows for biomedical literature, MeSH queries, PMID lookup, citation retrieval, and API-backed literature monitoring.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/scientific-db-pubmed-database` |
| Size | 1 files, 5 KB |
| SKILL.md | 176 lines, ~1,222 tokens |
| Description cost | ~41 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `b660c6057f14` |

### `research-ops`

Evidence-first current-state research workflow for ECC. Use when the user wants fresh facts, comparisons, enrichment, or a recommendation built from current public evidence and any supplied local context.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/research-ops` |
| Size | 1 files, 4 KB |
| SKILL.md | 113 lines, ~927 tokens |
| Description cost | ~51 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `af777eb75194` |

### `research-synthesize`

Synthesize research findings from memory into structured reports with evidence grading, contradiction resolution, and actionable recommendations

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-goals/skills/research-synthesize` |
| Size | 1 files, 3 KB |
| SKILL.md | 63 lines, ~684 tokens |
| Description cost | ~36 tokens always in context |
| Allowed tools | mcp__claude-flow__memory_search mcp__claude-flow__memory_search_unified mcp__claude-flow__memory_list mcp__claude-flow__memory_retrieve mcp__claude-flow__memory_store mcp__claude-flow__agentdb_context-synthesize mcp__claude-flow__agentdb_pattern-search mcp__claude-flow__neural_predict Bash Read Write |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `4f592dab809a` |

### `scholar-evaluation`

Structured scholarly-work evaluation for papers, proposals, literature reviews, methods sections, evidence quality, citation support, and research-writing feedback.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/scientific-thinking-scholar-evaluation` |
| Size | 1 files, 5 KB |
| SKILL.md | 161 lines, ~1,223 tokens |
| Description cost | ~41 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `b8816d7c08fd` |
