# Code Quality & Review

26 skills — 18 installed, 8 available in a marketplace but not installed.

[← back to the atlas](../README.md)

| Skill | What it does | Pack | Tools | Size |
|---|---|---|---|---|
| `adr-review` | Review code changes against accepted ADRs for compliance violations *(marketplace only)* | plugins | claude-code | 1 files, 2 KB |
| `agency-best-code-review` | Preferred daily-use code review specialist from the Agency set. Use when reviewing diffs, asking for findings-first feedback, checking regressions, or pressure-testing maintainability and r… | agency-roles | codex | 1 files, 1 KB |
| `agency-engineering-code-reviewer` | Agency agent wrapper for Code Reviewer. Expert code reviewer who provides constructive, actionable feedback focused on correctness, maintainability, security, and performance â€” not style… | agency-roles | codex | 1 files, 3 KB |
| `agent-analyze-code-quality` | Agent skill for analyze-code-quality - invoke with $agent-analyze-code-quality *(marketplace only)* | agent-pack | claude-code | 1 files, 5 KB |
| `agent-code-analyzer` | Agent skill for code-analyzer - invoke with $agent-code-analyzer *(marketplace only)* | agent-pack | claude-code | 1 files, 6 KB |
| `agent-md-refactor` | Refactor bloated AGENTS.md, CLAUDE.md, or similar agent instruction files to follow progressive disclosure principles. Splits monolithic files into organized, linked documentation. | agent-pack | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 8 KB |
| `agent-pagerank-analyzer` | Agent skill for pagerank-analyzer - invoke with $agent-pagerank-analyzer *(marketplace only)* | agent-pack | claude-code | 1 files, 11 KB |
| `agent-performance-analyzer` | Agent skill for performance-analyzer - invoke with $agent-performance-analyzer *(marketplace only)* | agent-pack | claude-code | 1 files, 5 KB |
| `agent-reviewer` | Agent skill for reviewer - invoke with $agent-reviewer *(marketplace only)* | agent-pack | claude-code | 1 files, 8 KB |
| `babysit` | Watch a pull request or review cycle until it is ready to merge. Use when asked to babysit, monitor, or keep checking PR comments, reviews, and CI until all actionable issues are resolved. | claude-mem | claude-code | 1 files, 4 KB |
| `caveman-review` | Ultra-compressed code review comments. Cuts noise from PR feedback while preserving the actionable signal. Each comment is one line: location, problem, fix. Use when user says "review this… | caveman | claude-code, continue, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 3 KB |
| `coding-standards` | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns. | ecc | claude-code | 1 files, 13 KB |
| `coding-standards` | Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review. Use detailed frontend or backend skills for framework-specific patterns. | agents-std-store | agents-std | 2 files, 13 KB |
| `dotnet-patterns` | Idiomatic C# and .NET patterns, conventions, dependency injection, async/await, and best practices for building robust, maintainable .NET applications. | ecc | claude-code | 1 files, 9 KB |
| `github-code-review` | Comprehensive GitHub code review with AI-powered swarm coordination *(marketplace only)* | .agents | claude-code | 1 files, 27 KB |
| `github-code-review` | Comprehensive GitHub code review with AI-powered swarm coordination *(marketplace only)* | .claude | claude-code | 1 files, 26 KB |
| `golang-patterns` | Idiomatic Go patterns, best practices, and conventions for building robust, efficient, and maintainable Go applications. | ecc | claude-code | 1 files, 14 KB |
| `grep-loop-review-workflow` | Use when you have a small PR or feature and want an agent to repeatedly fix review feedback until tests pass and the PR is merge-ready. Works with AI reviewers, Greptile-style review, or hu… | standalone | claude-code | 1 files, 3 KB |
| `naming-analyzer` | Suggest better variable, function, and class names based on context and conventions. | agents-std-store | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 9 KB |
| `perl-patterns` | Modern Perl 5.36+ idioms, best practices, and conventions for building robust, maintainable Perl applications. | ecc | claude-code | 1 files, 12 KB |
| `plankton-code-quality` | Write-time code quality enforcement using Plankton — auto-formatting, linting, and Claude-powered fixes on every file edit via hooks. | ecc | claude-code | 1 files, 8 KB |
| `receiving-code-review` | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not p… | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 6 KB |
| `receiving-code-review` | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not p… | superpowers | claude-code | 1 files, 6 KB |
| `requesting-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 2 files, 6 KB |
| `requesting-code-review` | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | superpowers | claude-code | 2 files, 8 KB |
| `tool-design` | This skill should be used when the user asks to "design agent tools", "create tool descriptions", "reduce tool complexity", "implement MCP tools", or mentions tool consolidation, architectu… | agents-std-store | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 4 files, 41 KB |

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
| Tools it reaches | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 9 (8 symlinked) |
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

Ultra-compressed code review comments. Cuts noise from PR feedback while preserving the actionable signal. Each comment is one line: location, problem, fix. Use when user says "review this PR", "code review", "review the diff", "/review", or invokes /caveman-review. Auto-triggers when reviewing pull requests.

| Field | Value |
|---|---|
| Pack | caveman |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, continue, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (6 symlinked) |
| Canonical path | `~/.agents/skills/caveman-review` |
| Size | 1 files, 3 KB |
| SKILL.md | 55 lines, ~699 tokens |
| Description cost | ~78 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-01 |
| Category source | keywords |
| Content hash | `5b3bc4d4b84b` |

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
| Pack | standalone |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/grep-loop-review-workflow` |
| Size | 1 files, 3 KB |
| SKILL.md | 88 lines, ~724 tokens |
| Description cost | ~51 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-22 |
| Category source | keywords |
| Content hash | `5348752b2198` |

### `naming-analyzer`

Suggest better variable, function, and class names based on context and conventions.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 9 (8 symlinked) |
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
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/receiving-code-review` |
| Size | 1 files, 6 KB |
| SKILL.md | 214 lines, ~1,579 tokens |
| Description cost | ~59 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `1ab3e001b39f` |

### `receiving-code-review`

Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performative agreement or blind implementation

| Field | Value |
|---|---|
| Pack | superpowers |
| Origin | plugin `superpowers` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/superpowers/6.3.0/skills/receiving-code-review` |
| Size | 1 files, 6 KB |
| SKILL.md | 206 lines, ~1,551 tokens |
| Description cost | ~59 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-08-13 |
| Category source | keywords |
| Content hash | `f9c95ed02550` |

### `requesting-code-review`

Use when completing tasks, implementing major features, or before merging to verify work meets requirements

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/requesting-code-review` |
| Size | 2 files, 6 KB |
| SKILL.md | 106 lines, ~675 tokens |
| Description cost | ~27 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `98f7b66963f0` |

### `requesting-code-review`

Use when completing tasks, implementing major features, or before merging to verify work meets requirements

| Field | Value |
|---|---|
| Pack | superpowers |
| Origin | plugin `superpowers` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/superpowers/6.3.0/skills/requesting-code-review` |
| Size | 2 files, 8 KB |
| SKILL.md | 96 lines, ~739 tokens |
| Description cost | ~27 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-08-13 |
| Category source | keywords |
| Content hash | `3319538d8ec5` |

### `tool-design`

This skill should be used when the user asks to "design agent tools", "create tool descriptions", "reduce tool complexity", "implement MCP tools", or mentions tool consolidation, architectural reduction, tool naming conventions, or agent-tool interfaces.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 9 (0 symlinked) |
| Canonical path | `~/.agents/skills/context-engineering-collection/skills/tool-design` |
| Size | 4 files, 41 KB |
| SKILL.md | 312 lines, ~3,952 tokens |
| Description cost | ~64 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `1ef2f9152f0c` |
| Bundled | `references`, `scripts` |
