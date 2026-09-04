# Git & Workflow

18 skills — 14 installed, 4 available in a marketplace but not installed.

[← back to the atlas](../README.md)

| Skill | What it does | Pack | Tools | Size |
|---|---|---|---|---|
| `agency-engineering-git-workflow-master` | Agency agent wrapper for Git Workflow Master. Expert in Git workflows, branching strategies, and version control best practices including conventional commits, rebasing, worktrees, and CI-f… | agency-roles | codex | 1 files, 4 KB |
| `agency-project-management-jira-workflow-steward` | Agency agent wrapper for Jira Workflow Steward. Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured pull requests, and release-safe b… | agency-roles | codex | 1 files, 14 KB |
| `agent-release-manager` | Agent skill for release-manager - invoke with $agent-release-manager *(marketplace only)* | agent-pack | claude-code | 1 files, 13 KB |
| `caveman-commit` | Ultra-compressed commit message generator. Cuts noise from commit messages while preserving intent and reasoning. Conventional Commits format. Subject ≤50 chars, body only when "why" isn't… | caveman | claude-code, continue, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 2 KB |
| `changelog-generator` | Automatically creates user-facing changelogs from git commits by analyzing commit history, categorizing changes, and transforming technical commits into clear, customer-friendly release not… | agents-std-store | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 3 KB |
| `claude-code-plugin-release` | Automated semantic versioning and release workflow for Claude Code plugins. Handles version increments across package.json, marketplace.json, plugin.json manifests, npm publishing (so `npx… | claude-mem | claude-code | 2 files, 4 KB |
| `claude-code-plugin-release` | Automated semantic versioning and release workflow for Claude Code plugins. Handles version increments across package.json, marketplace.json, plugin.json manifests, npm publishing (so `npx… | claude-mem | claude-code | 2 files, 5 KB |
| `commit-work` | Create high-quality git commits: review/stage intended changes, split into logical commits, and write clear commit messages (including Conventional Commits). Use when the user asks to commi… | agents-std-store | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 2 files, 3 KB |
| `finishing-a-development-branch` | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR,… | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 4 KB |
| `finishing-a-development-branch` | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work | superpowers | claude-code | 1 files, 8 KB |
| `git-workflow` | Advanced git workflows with branch management, conflict resolution, and PR lifecycle *(marketplace only)* | plugins | claude-code | 1 files, 1 KB |
| `github-release-management` | Comprehensive GitHub release orchestration with AI swarm coordination for automated versioning, testing, deployment, and rollback management *(marketplace only)* | .agents | claude-code | 1 files, 30 KB |
| `github-release-management` | Comprehensive GitHub release orchestration with AI swarm coordination for automated versioning, testing, deployment, and rollback management *(marketplace only)* | .claude | claude-code | 1 files, 30 KB |
| `next-upgrade` | Upgrade Next.js to the latest version following official migration guides and codemods. Use when upgrading Next.js versions, running codemods, or migrating between major releases. | vercel | claude-code | 3 files, 7 KB |
| `release` | Release vercel-plugin — run gates, bump version, generate artifacts, commit, and push. Use when asked to "release", "ship", "bump and push", or "cut a release". | vercel | claude-code | 1 files, 2 KB |
| `using-git-worktrees` | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - creates isolated git worktrees with smart directory selection and safet… | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 1 files, 6 KB |
| `using-git-worktrees` | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree f… | superpowers | claude-code | 1 files, 7 KB |
| `yeet` | Publish local changes to GitHub by confirming scope, committing intentionally, pushing the branch, and opening a draft PR through the GitHub app from this plugin, with `gh` used only as a f… | github | codex | 5 files, 17 KB |

## Detail

### `agency-engineering-git-workflow-master`

Agency agent wrapper for Git Workflow Master. Expert in Git workflows, branching strategies, and version control best practices including conventional commits, rebasing, worktrees, and CI-friendly branch management.

| Field | Value |
|---|---|
| Pack | agency-roles |
| Origin | standalone |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/skills/agency-engineering-git-workflow-master` |
| Size | 1 files, 4 KB |
| SKILL.md | 88 lines, ~1,009 tokens |
| Description cost | ~54 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-03-13 |
| Category source | keywords |
| Content hash | `8128b4cc009a` |

### `agency-project-management-jira-workflow-steward`

Agency agent wrapper for Jira Workflow Steward. Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured pull requests, and release-safe branch strategy across software teams.

| Field | Value |
|---|---|
| Pack | agency-roles |
| Origin | standalone |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/skills/agency-project-management-jira-workflow-steward` |
| Size | 1 files, 14 KB |
| SKILL.md | 234 lines, ~3,468 tokens |
| Description cost | ~57 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-03-13 |
| Category source | keywords |
| Content hash | `9f7d5551014c` |

### `agent-release-manager`

Agent skill for release-manager - invoke with $agent-release-manager

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-release-manager` |
| Size | 1 files, 13 KB |
| SKILL.md | 372 lines, ~3,214 tokens |
| Description cost | ~17 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `9c7f687318f7` |

### `caveman-commit`

Ultra-compressed commit message generator. Cuts noise from commit messages while preserving intent and reasoning. Conventional Commits format. Subject ≤50 chars, body only when "why" isn't obvious. Use when user says "write a commit", "commit message", "generate commit", "/commit", or invokes /caveman-commit. Auto-triggers when staging changes.

| Field | Value |
|---|---|
| Pack | caveman |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, continue, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (6 symlinked) |
| Canonical path | `~/.agents/skills/caveman-commit` |
| Size | 1 files, 2 KB |
| SKILL.md | 65 lines, ~637 tokens |
| Description cost | ~87 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-01 |
| Category source | keywords |
| Content hash | `805976c15aac` |

### `changelog-generator`

Automatically creates user-facing changelogs from git commits by analyzing commit history, categorizing changes, and transforming technical commits into clear, customer-friendly release notes. Turns hours of manual changelog writing into minutes of automated generation.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 9 (8 symlinked) |
| Canonical path | `~/.agents/skills/changelog-generator` |
| Size | 1 files, 3 KB |
| SKILL.md | 105 lines, ~800 tokens |
| Description cost | ~68 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-10 |
| Category source | keywords |
| Content hash | `648889804d65` |

### `claude-code-plugin-release`

Automated semantic versioning and release workflow for Claude Code plugins. Handles version increments across package.json, marketplace.json, plugin.json manifests, npm publishing (so `npx claude-mem@X.Y.Z` resolves), build verification, git tagging, GitHub releases, and changelog generation.

| Field | Value |
|---|---|
| Pack | claude-mem |
| Origin | plugin `claude-mem` from `thedotmack` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/thedotmack/claude-mem/12.4.9/skills/version-bump` |
| Size | 2 files, 4 KB |
| SKILL.md | 64 lines, ~898 tokens |
| Description cost | ~74 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-01 |
| Category source | keywords |
| Content hash | `c8ef207d3ded` |
| Bundled | `scripts` |

### `claude-code-plugin-release`

Automated semantic versioning and release workflow for Claude Code plugins. Handles version increments across package.json, marketplace.json, plugin.json manifests, npm publishing (so `npx claude-mem@X.Y.Z` resolves), build verification, git tagging, GitHub releases, and changelog generation.

| Field | Value |
|---|---|
| Pack | claude-mem |
| Origin | plugin `claude-mem` from `thedotmack` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/thedotmack/claude-mem/13.2.0/skills/version-bump` |
| Size | 2 files, 5 KB |
| SKILL.md | 69 lines, ~1,048 tokens |
| Description cost | ~74 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `edfd3d24f735` |
| Bundled | `scripts` |

### `commit-work`

Create high-quality git commits: review/stage intended changes, split into logical commits, and write clear commit messages (including Conventional Commits). Use when the user asks to commit, craft a commit message, stage changes, or split work into multiple commits.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 9 (8 symlinked) |
| Canonical path | `~/.agents/skills/commit-work` |
| Size | 2 files, 3 KB |
| SKILL.md | 56 lines, ~635 tokens |
| Description cost | ~67 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `034f13e071ef` |
| Bundled | `references` |

### `finishing-a-development-branch`

Use when implementation is complete, all tests pass, and you need to decide how to integrate the work - guides completion of development work by presenting structured options for merge, PR, or cleanup

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/finishing-a-development-branch` |
| Size | 1 files, 4 KB |
| SKILL.md | 201 lines, ~1,063 tokens |
| Description cost | ~50 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `ad48721df9fa` |

### `finishing-a-development-branch`

Use when implementation is complete, all tests pass, and you need to decide how to integrate the work

| Field | Value |
|---|---|
| Pack | superpowers |
| Origin | plugin `superpowers` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/superpowers/6.3.0/skills/finishing-a-development-branch` |
| Size | 1 files, 8 KB |
| SKILL.md | 226 lines, ~1,946 tokens |
| Description cost | ~26 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-08-13 |
| Category source | keywords |
| Content hash | `cebfed19cc3a` |

### `git-workflow`

Advanced git workflows with branch management, conflict resolution, and PR lifecycle

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-jujutsu/skills/git-workflow` |
| Size | 1 files, 1 KB |
| SKILL.md | 46 lines, ~374 tokens |
| Description cost | ~21 tokens always in context |
| Allowed tools | mcp__claude-flow__analyze_diff mcp__claude-flow__analyze_diff-risk mcp__claude-flow__analyze_diff-stats mcp__claude-flow__github_pr_manage mcp__claude-flow__github_repo_analyze mcp__claude-flow__github_metrics Bash |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `e9437b4b654c` |

### `github-release-management`

Comprehensive GitHub release orchestration with AI swarm coordination for automated versioning, testing, deployment, and rollback management

| Field | Value |
|---|---|
| Pack | .agents |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/github-release-management` |
| Size | 1 files, 30 KB |
| SKILL.md | 1082 lines, ~7,681 tokens |
| Description cost | ~35 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `88d707158783` |

### `github-release-management`

Comprehensive GitHub release orchestration with AI swarm coordination for automated versioning, testing, deployment, and rollback management

| Field | Value |
|---|---|
| Pack | .claude |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.claude/skills/github-release-management` |
| Size | 1 files, 30 KB |
| SKILL.md | 1065 lines, ~7,562 tokens |
| Description cost | ~35 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `ad3e7530cdb9` |

### `next-upgrade`

Upgrade Next.js to the latest version following official migration guides and codemods. Use when upgrading Next.js versions, running codemods, or migrating between major releases.

| Field | Value |
|---|---|
| Pack | vercel |
| Origin | plugin `vercel` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/vercel/0.45.1/skills/next-upgrade` |
| Size | 3 files, 7 KB |
| SKILL.md | 104 lines, ~891 tokens |
| Description cost | ~45 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-07-24 |
| Category source | keywords |
| Content hash | `8efdeb62e28e` |
| Bundled | `upstream` |

### `release`

Release vercel-plugin — run gates, bump version, generate artifacts, commit, and push. Use when asked to "release", "ship", "bump and push", or "cut a release".

| Field | Value |
|---|---|
| Pack | vercel |
| Origin | plugin `vercel` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/vercel/0.45.1/.claude/skills/release` |
| Size | 1 files, 2 KB |
| SKILL.md | 73 lines, ~548 tokens |
| Description cost | ~41 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-07-24 |
| Category source | keywords |
| Content hash | `7f9b369822e2` |

### `using-git-worktrees`

Use when starting feature work that needs isolation from current workspace or before executing implementation plans - creates isolated git worktrees with smart directory selection and safety verification

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/using-git-worktrees` |
| Size | 1 files, 6 KB |
| SKILL.md | 219 lines, ~1,409 tokens |
| Description cost | ~51 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `17039bc58069` |

### `using-git-worktrees`

Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback

| Field | Value |
|---|---|
| Pack | superpowers |
| Origin | plugin `superpowers` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/superpowers/6.3.0/skills/using-git-worktrees` |
| Size | 1 files, 7 KB |
| SKILL.md | 168 lines, ~1,704 tokens |
| Description cost | ~49 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-08-13 |
| Category source | keywords |
| Content hash | `c8de24e34cfa` |

### `yeet`

Publish local changes to GitHub by confirming scope, committing intentionally, pushing the branch, and opening a draft PR through the GitHub app from this plugin, with `gh` used only as a fallback where connector coverage is insufficient.

| Field | Value |
|---|---|
| Pack | github |
| Origin | plugin `github` from `openai-curated` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated/github/bd2122cb/skills/yeet` |
| Size | 5 files, 17 KB |
| SKILL.md | 71 lines, ~1,023 tokens |
| Description cost | ~60 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-07-13 |
| Category source | keywords |
| Content hash | `aee4f91046ba` |
| Bundled | `agents`, `assets` |
