# Code Quality & Review

32 skills — 24 installed, 8 available in a marketplace but not installed.

[← back to the atlas](../README.md)

| Skill | What it does | Pack | Tools | Size |
|---|---|---|---|---|
| `adr-review` | Review code changes against accepted ADRs for compliance violations *(marketplace only)* | plugins | claude-code | 1 files, 2 KB |
| `agency-best-code-review` | Preferred daily-use code review specialist from the Agency set. Use when reviewing diffs, asking for findings-first feedback, checking regressions, or pressure-testing maintainability and r… | agency-roles | codex | 1 files, 1 KB |
| `agency-engineering-code-reviewer` | Agency agent wrapper for Code Reviewer. Expert code reviewer who provides constructive, actionable feedback focused on correctness, maintainability, security, and performance â€” not style… | agency-roles | codex | 1 files, 3 KB |
| `agent-analyze-code-quality` | Agent skill for analyze-code-quality - invoke with $agent-analyze-code-quality *(marketplace only)* | agent-pack | claude-code | 1 files, 5 KB |
| `agent-code-analyzer` | Agent skill for code-analyzer - invoke with $agent-code-analyzer *(marketplace only)* | agent-pack | claude-code | 1 files, 6 KB |
| `agent-md-refactor` | Refactor bloated AGENTS.md, CLAUDE.md, or similar agent instruction files to follow progressive disclosure principles. Splits monolithic files into organized, linked documentation. | agent-pack | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 8 KB |
| `agent-pagerank-analyzer` | Agent skill for pagerank-analyzer - invoke with $agent-pagerank-analyzer *(marketplace only)* | agent-pack | claude-code | 1 files, 11 KB |
| `agent-performance-analyzer` | Agent skill for performance-analyzer - invoke with $agent-performance-analyzer *(marketplace only)* | agent-pack | claude-code | 1 files, 5 KB |
| `agent-reviewer` | Agent skill for reviewer - invoke with $agent-reviewer *(marketplace only)* | agent-pack | claude-code | 1 files, 8 KB |
| `artifact-template-business-review` | Create a presentation using the Business Review template and its retained reference file. Use when the user selects or names Business Review. Review business performance, KPIs, segment resu… | openai-templates | codex | 5 files, 2.0 MB |
| `artifact-template-operating-review` | Create a presentation using the Operating Review template and its retained reference file. Use when the user selects or names Operating Review. Run weekly operating reviews with scorecards,… | openai-templates | codex | 5 files, 338 KB |
| `babysit` | Watch a pull request or review cycle until it is ready to merge. Use when asked to babysit, monitor, or keep checking PR comments, reviews, and CI until all actionable issues are resolved. | claude-mem | claude-code | 1 files, 4 KB |
| `caveman-review` | Compressed code review - one line per finding with location, problem and fix. Use for /caveman-review, "review this PR", or "review the diff". | caveman | claude-code, continue, factory, kilocode, qwen-code, roo-code, shared-store, trae | 2 files, 4 KB |
| `caveman-review` | Ultra-compressed code review comments. Cuts noise from PR feedback while preserving the actionable signal. Each comment is one line: location, problem, fix. Use when user says "review this… | caveman | claude-code | 2 files, 4 KB |
| `code-review-and-quality` | Conducts multi-axis code review. Use before merging any change. Use when reviewing code written by yourself, another agent, or a human. Use when you need to assess code quality across multi… | agent-skills | claude-code | 1 files, 20 KB |
| `code-simplification` | Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use when revi… | agent-skills | claude-code | 1 files, 13 KB |
| `coding-standards` | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns. | ecc | claude-code | 1 files, 13 KB |
| `coding-standards` | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns. | agents-std-store | agents-std | 2 files, 13 KB |
| `docx` | Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx) or Word templates (.dotx). Triggers include: any mention of 'Word doc', 'word document', '… | standalone | claude-code | 61 files, 1.1 MB |
| `dotnet-patterns` | Idiomatic C# and .NET patterns, conventions, dependency injection, async/await, and best practices for building robust, maintainable .NET applications. | ecc | claude-code | 1 files, 9 KB |
| `github-code-review` | Comprehensive GitHub code review with AI-powered swarm coordination *(marketplace only)* | .agents | claude-code | 1 files, 27 KB |
| `github-code-review` | Comprehensive GitHub code review with AI-powered swarm coordination *(marketplace only)* | .claude | claude-code | 1 files, 26 KB |
| `golang-patterns` | Idiomatic Go patterns, best practices, and conventions for building robust, efficient, and maintainable Go applications. | ecc | claude-code | 1 files, 14 KB |
| `grep-loop-review-workflow` | Use when you have a small PR or feature and want an agent to repeatedly fix review feedback until tests pass and the PR is merge-ready. Works with AI reviewers, Greptile-style review, or hu… | agents-std-store | claude-code, shared-store | 1 files, 3 KB |
| `humanize-code` | Behavior-preserving cleanup pass that strips AI-generated bloat out of code — over-abstraction, defensive noise, clever one-liners, obvious comments, needless helpers and patterns — and lea… | agents-std-store | claude-code, shared-store | 2 files, 19 KB |
| `naming-analyzer` | Suggest better variable, function, and class names based on context and conventions. | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 9 KB |
| `perl-patterns` | Modern Perl 5.36+ idioms, best practices, and conventions for building robust, maintainable Perl applications. | ecc | claude-code | 1 files, 12 KB |
| `plankton-code-quality` | Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks. | ecc | claude-code | 1 files, 8 KB |
| `receiving-code-review` | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not p… | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 6 KB |
| `receiving-code-review` | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not p… | superpowers | claude-code | 1 files, 6 KB |
| `requesting-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 2 files, 8 KB |
| `requesting-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | superpowers | claude-code | 2 files, 6 KB |

## Detail

### `adr-review`

Review code changes against accepted ADRs for compliance violations

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-adr/skills/adr-review` |
| Size | 1 files, 2 KB |
| SKILL.md | 56 lines, ~618 tokens |
| Description cost | ~17 tokens always in context |
| Allowed tools | mcp__claude-flow__agentdb_hierarchical-query mcp__claude-flow__agentdb_causal-query mcp__claude-flow__memory_search Bash Read Grep Glob |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `5a7c92c05c1e` |

### `agency-best-code-review`

Preferred daily-use code review specialist from the Agency set. Use when reviewing diffs, asking for findings-first feedback, checking regressions, or pressure-testing maintainability and risk before merge.

| Field | Value |
|---|---|
| Pack | agency-roles |
| Origin | standalone |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/skills/agency-best-code-review` |
| Size | 1 files, 1 KB |
| SKILL.md | 21 lines, ~205 tokens |
| Description cost | ~52 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-03-13 |
| Category source | keywords |
| Content hash | `3d5626b0ab3e` |

### `agency-engineering-code-reviewer`

Agency agent wrapper for Code Reviewer. Expert code reviewer who provides constructive, actionable feedback focused on correctness, maintainability, security, and performance â€” not style preferences.

| Field | Value |
|---|---|
| Pack | agency-roles |
| Origin | standalone |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/skills/agency-engineering-code-reviewer` |
| Size | 1 files, 3 KB |
| SKILL.md | 80 lines, ~843 tokens |
| Description cost | ~52 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-03-13 |
| Category source | keywords |
| Content hash | `f0ebbacb0138` |

### `agent-analyze-code-quality`

Agent skill for analyze-code-quality - invoke with $agent-analyze-code-quality

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-analyze-code-quality` |
| Size | 1 files, 5 KB |
| SKILL.md | 184 lines, ~1,228 tokens |
| Description cost | ~20 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `094721efcb2e` |

### `agent-code-analyzer`

Agent skill for code-analyzer - invoke with $agent-code-analyzer

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-code-analyzer` |
| Size | 1 files, 6 KB |
| SKILL.md | 215 lines, ~1,532 tokens |
| Description cost | ~16 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `02d0723619d0` |

### `agent-md-refactor`

Refactor bloated AGENTS.md, CLAUDE.md, or similar agent instruction files to follow progressive disclosure principles. Splits monolithic files into organized, linked documentation.

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/agent-md-refactor` |
| Size | 1 files, 8 KB |
| SKILL.md | 288 lines, ~1,940 tokens |
| Description cost | ~45 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `5557d3a64aca` |

### `agent-pagerank-analyzer`

Agent skill for pagerank-analyzer - invoke with $agent-pagerank-analyzer

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-pagerank-analyzer` |
| Size | 1 files, 11 KB |
| SKILL.md | 304 lines, ~2,932 tokens |
| Description cost | ~18 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `8e173c0208f8` |

### `agent-performance-analyzer`

Agent skill for performance-analyzer - invoke with $agent-performance-analyzer

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-performance-analyzer` |
| Size | 1 files, 5 KB |
| SKILL.md | 204 lines, ~1,387 tokens |
| Description cost | ~20 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `cdf1792f0e65` |

### `agent-reviewer`

Agent skill for reviewer - invoke with $agent-reviewer

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-reviewer` |
| Size | 1 files, 8 KB |
| SKILL.md | 331 lines, ~2,077 tokens |
| Description cost | ~14 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `296ab6824cc7` |

### `artifact-template-business-review`

Create a presentation using the Business Review template and its retained reference file. Use when the user selects or names Business Review. Review business performance, KPIs, segment results, strategic priorities, decisions, and outlook.

| Field | Value |
|---|---|
| Pack | openai-templates |
| Origin | plugin `openai-templates` from `openai-curated-remote` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-business-review` |
| Size | 5 files, 2.0 MB |
| SKILL.md | 23 lines, ~369 tokens |
| Description cost | ~60 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 1970-01-01 |
| Category source | keywords |
| Content hash | `ea84e9503bf3` |
| Bundled | `agents`, `assets` |

### `artifact-template-operating-review`

Create a presentation using the Operating Review template and its retained reference file. Use when the user selects or names Operating Review. Run weekly operating reviews with scorecards, functional updates, risks, decisions, and action items.

| Field | Value |
|---|---|
| Pack | openai-templates |
| Origin | plugin `openai-templates` from `openai-curated-remote` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-operating-review` |
| Size | 5 files, 338 KB |
| SKILL.md | 23 lines, ~371 tokens |
| Description cost | ~62 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 1970-01-01 |
| Category source | keywords |
| Content hash | `60af5bc0fe7c` |
| Bundled | `agents`, `assets` |

### `babysit`

Watch a pull request or review cycle until it is ready to merge. Use when asked to babysit, monitor, or keep checking PR comments, reviews, and CI until all actionable issues are resolved.

| Field | Value |
|---|---|
| Pack | claude-mem |
| Origin | plugin `claude-mem` from `thedotmack` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/thedotmack/claude-mem/13.2.0/skills/babysit` |
| Size | 1 files, 4 KB |
| SKILL.md | 88 lines, ~1,089 tokens |
| Description cost | ~47 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `f27f527d4a1d` |

### `caveman-review`

Compressed code review - one line per finding with location, problem and fix. Use for /caveman-review, "review this PR", or "review the diff".

| Field | Value |
|---|---|
| Pack | caveman |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, continue, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 8 (7 symlinked) |
| Canonical path | `~/.agents/skills/caveman-review` |
| Size | 2 files, 4 KB |
| SKILL.md | 53 lines, ~642 tokens |
| Description cost | ~36 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-16 |
| Category source | keywords |
| Content hash | `e8ff36493e61` |

### `caveman-review`

Ultra-compressed code review comments. Cuts noise from PR feedback while preserving the actionable signal. Each comment is one line: location, problem, fix. Use when user says "review this PR", "code review", "review the diff", "/review", or invokes /caveman-review. Auto-triggers when reviewing pull requests.

| Field | Value |
|---|---|
| Pack | caveman |
| Origin | plugin `caveman` from `caveman` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 3 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/caveman/caveman/63a91ecadbf4/skills/caveman-review` |
| Size | 2 files, 4 KB |
| SKILL.md | 55 lines, ~699 tokens |
| Description cost | ~78 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `5b3bc4d4b84b` |

### `code-review-and-quality`

Conducts multi-axis code review. Use before merging any change. Use when reviewing code written by yourself, another agent, or a human. Use when you need to assess code quality across multiple dimensions before it enters the main branch.

| Field | Value |
|---|---|
| Pack | agent-skills |
| Origin | plugin `agent-skills` from `addy-agent-skills` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/addy-agent-skills/agent-skills/0.6.10/skills/code-review-and-quality` |
| Size | 1 files, 20 KB |
| SKILL.md | 397 lines, ~5,139 tokens |
| Description cost | ~60 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-19 |
| Category source | keywords |
| Content hash | `98cf7ffc76e8` |

### `code-simplification`

Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use when reviewing code that has accumulated unnecessary complexity.

| Field | Value |
|---|---|
| Pack | agent-skills |
| Origin | plugin `agent-skills` from `addy-agent-skills` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/addy-agent-skills/agent-skills/0.6.10/skills/code-simplification` |
| Size | 1 files, 13 KB |
| SKILL.md | 332 lines, ~3,387 tokens |
| Description cost | ~61 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-19 |
| Category source | keywords |
| Content hash | `967a7227962b` |

### `coding-standards`

Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/coding-standards` |
| Size | 1 files, 13 KB |
| SKILL.md | 550 lines, ~3,312 tokens |
| Description cost | ~45 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `ebfc6dbe7728` |

### `coding-standards`

Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | agents-std |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/.agents/skills/coding-standards` |
| Size | 2 files, 13 KB |
| SKILL.md | 549 lines, ~3,309 tokens |
| Description cost | ~45 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `f0bb3176668a` |
| Bundled | `agents` |

### `docx`

Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx) or Word templates (.dotx). Triggers include: any mention of 'Word doc', 'word document', '.docx', '.dotx', or requests to produce professional documents with formatting like tables of contents, page numbers, or letterheads. Also use when extracting or reorganizing content from .docx or .dotx files, inserting or replacing images in documents, find-and-replace in Word files, working with tracked changes or comments, or converting content into a polished Word document. If the user asks for a 'report', 'memo', 'letter', 'template', or similar deliverable as a Word or .docx file (to download, email or print), use this skill. However, if they ask for a document, page, report, memo, or notes WITHOUT naming a file format and the session offers Claude's own dedicated document or page skill or connector, use that instead. Do NOT use for PDFs, spreadsheets, Google Docs, or coding unrelated to document generation.

| Field | Value |
|---|---|
| Pack | standalone |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/synced/b350f25a-7498-43f0-a5af-ab6ca9c46c27_6b2a8e80-8682-48d0-b2ac-3af75a486e22/docx` |
| Size | 61 files, 1.1 MB |
| SKILL.md | 92 lines, ~1,773 tokens |
| Description cost | ~254 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-17 |
| Category source | keywords |
| Content hash | `a8b3e3289604` |
| Bundled | `scripts`, `office`, `templates`, `helpers`, `schemas`, `validators`, `ecma`, `iso-iec29500-4_2016` |

### `dotnet-patterns`

Idiomatic C# and .NET patterns, conventions, dependency injection, async/await, and best practices for building robust, maintainable .NET applications.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/dotnet-patterns` |
| Size | 1 files, 9 KB |
| SKILL.md | 322 lines, ~2,386 tokens |
| Description cost | ~38 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `8cd9245ad092` |

### `github-code-review`

Comprehensive GitHub code review with AI-powered swarm coordination

| Field | Value |
|---|---|
| Pack | .agents |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/github-code-review` |
| Size | 1 files, 27 KB |
| SKILL.md | 1141 lines, ~6,797 tokens |
| Description cost | ~17 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `815f30fc3547` |

### `github-code-review`

Comprehensive GitHub code review with AI-powered swarm coordination

| Field | Value |
|---|---|
| Pack | .claude |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.claude/skills/github-code-review` |
| Size | 1 files, 26 KB |
| SKILL.md | 1126 lines, ~6,698 tokens |
| Description cost | ~17 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `cd8d24d54174` |

### `golang-patterns`

Idiomatic Go patterns, best practices, and conventions for building robust, efficient, and maintainable Go applications.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/golang-patterns` |
| Size | 1 files, 14 KB |
| SKILL.md | 675 lines, ~3,676 tokens |
| Description cost | ~30 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `6054940233b6` |

### `grep-loop-review-workflow`

Use when you have a small PR or feature and want an agent to repeatedly fix review feedback until tests pass and the PR is merge-ready. Works with AI reviewers, Greptile-style review, or human feedback.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, shared-store |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.agents/skills/grep-loop-review-workflow` |
| Size | 1 files, 3 KB |
| SKILL.md | 88 lines, ~724 tokens |
| Description cost | ~51 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-22 |
| Category source | keywords |
| Content hash | `5348752b2198` |

### `humanize-code`

Behavior-preserving cleanup pass that strips AI-generated bloat out of code — over-abstraction, defensive noise, clever one-liners, obvious comments, needless helpers and patterns — and leaves code a strong human engineer would have written. Use after Claude or any AI writes or edits code, before review or commit. Never changes behavior, public APIs, or algorithmic complexity.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, shared-store |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.agents/skills/humanize-code` |
| Size | 2 files, 19 KB |
| SKILL.md | 210 lines, ~2,473 tokens |
| Description cost | ~96 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-08 |
| Category source | keywords |
| Content hash | `53cc20974e28` |
| Bundled | `references` |

### `naming-analyzer`

Suggest better variable, function, and class names based on context and conventions.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/naming-analyzer` |
| Size | 1 files, 9 KB |
| SKILL.md | 352 lines, ~2,402 tokens |
| Description cost | ~21 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `11009e3e6c1a` |

### `perl-patterns`

Modern Perl 5.36+ idioms, best practices, and conventions for building robust, maintainable Perl applications.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/perl-patterns` |
| Size | 1 files, 12 KB |
| SKILL.md | 505 lines, ~3,008 tokens |
| Description cost | ~28 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `be7bb22c4274` |

### `plankton-code-quality`

Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/plankton-code-quality` |
| Size | 1 files, 8 KB |
| SKILL.md | 237 lines, ~2,047 tokens |
| Description cost | ~34 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `ad835748869d` |

### `receiving-code-review`

Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 11 (9 symlinked) |
| Canonical path | `~/.agents/skills/receiving-code-review` |
| Size | 1 files, 6 KB |
| SKILL.md | 206 lines, ~1,551 tokens |
| Description cost | ~59 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-16 |
| Category source | keywords |
| Content hash | `f9c95ed02550` |

### `receiving-code-review`

Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation

| Field | Value |
|---|---|
| Pack | superpowers |
| Origin | plugin `superpowers` from `superpowers-marketplace` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/superpowers-marketplace/superpowers/4.2.0/skills/receiving-code-review` |
| Size | 1 files, 6 KB |
| SKILL.md | 214 lines, ~1,579 tokens |
| Description cost | ~59 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `1ab3e001b39f` |

### `requesting-code-review`

Use when completing tasks, implementing major features, or before merging to verify work meets requirements

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 11 (9 symlinked) |
| Canonical path | `~/.agents/skills/requesting-code-review` |
| Size | 2 files, 8 KB |
| SKILL.md | 96 lines, ~739 tokens |
| Description cost | ~27 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-16 |
| Category source | keywords |
| Content hash | `3319538d8ec5` |

### `requesting-code-review`

Use when completing tasks, implementing major features, or before merging to verify work meets requirements

| Field | Value |
|---|---|
| Pack | superpowers |
| Origin | plugin `superpowers` from `superpowers-marketplace` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/superpowers-marketplace/superpowers/4.2.0/skills/requesting-code-review` |
| Size | 2 files, 6 KB |
| SKILL.md | 106 lines, ~675 tokens |
| Description cost | ~27 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `98f7b66963f0` |
