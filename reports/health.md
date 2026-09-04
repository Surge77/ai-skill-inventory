# Health

[← back](../README.md)

## 119 empty skill directories

`~/.claude/skills/` contains directories with no `SKILL.md` inside. Claude Code skips them silently, so these skills are installed on the machine and unusable from Claude Code.

118 of 119 are **recoverable**: the real content is in the shared store at `~/.agents/skills/`, which every other tool symlinks to correctly.

### The fix

Recreate the links Claude Code is missing. Windows needs an elevated shell or Developer Mode for `New-Item -ItemType SymbolicLink`; `mklink /J` (a junction) works without elevation.

```powershell
# PowerShell, from any directory. Dry run first: drop -WhatIf to apply.
Get-ChildItem "$env:USERPROFILE\.claude\skills" -Directory |
  Where-Object { -not (Test-Path (Join-Path $_.FullName 'SKILL.md')) } |
  Where-Object { Test-Path "$env:USERPROFILE\.agents\skills\$($_.Name)\SKILL.md" } |
  ForEach-Object {
    Remove-Item $_.FullName -Force -WhatIf
    New-Item -ItemType SymbolicLink -Path $_.FullName -Target "$env:USERPROFILE\.agents\skills\$($_.Name)" -WhatIf
  }
```

Verify afterwards with `node tools/scan.mjs` — `emptyDirs` should drop to 1.

### The directories

| Directory | Recoverable from |
|---|---|
| `~/.claude/skills/accessibility` | `~/.agents/skills/accessibility` |
| `~/.claude/skills/agent-md-refactor` | `~/.agents/skills/agent-md-refactor` |
| `~/.claude/skills/agentation` | `~/.agents/skills/agentation` |
| `~/.claude/skills/api-design-principles` | `~/.agents/skills/api-design-principles` |
| `~/.claude/skills/apple-hig-designer` | `~/.agents/skills/apple-hig-designer` |
| `~/.claude/skills/backend-to-frontend-handoff-docs` | `~/.agents/skills/backend-to-frontend-handoff-docs` |
| `~/.claude/skills/behavioral-product-design` | `~/.agents/skills/behavioral-product-design` |
| `~/.claude/skills/brainstorming` | `~/.agents/skills/brainstorming` |
| `~/.claude/skills/brandkit` | `~/.agents/skills/brandkit` |
| `~/.claude/skills/c4-architecture` | `~/.agents/skills/c4-architecture` |
| `~/.claude/skills/cavecrew` | `~/.agents/skills/cavecrew` |
| `~/.claude/skills/caveman` | `~/.agents/skills/caveman` |
| `~/.claude/skills/caveman-commit` | `~/.agents/skills/caveman-commit` |
| `~/.claude/skills/caveman-compress` | `~/.agents/skills/caveman-compress` |
| `~/.claude/skills/caveman-help` | `~/.agents/skills/caveman-help` |
| `~/.claude/skills/caveman-review` | `~/.agents/skills/caveman-review` |
| `~/.claude/skills/caveman-stats` | `~/.agents/skills/caveman-stats` |
| `~/.claude/skills/changelog-generator` | `~/.agents/skills/changelog-generator` |
| `~/.claude/skills/codex` | `~/.agents/skills/codex` |
| `~/.claude/skills/command-creator` | `~/.agents/skills/command-creator` |
| `~/.claude/skills/commit-work` | `~/.agents/skills/commit-work` |
| `~/.claude/skills/compress` | `~/.agents/skills/compress` |
| `~/.claude/skills/context-engineering-collection` | `~/.agents/skills/context-engineering-collection` |
| `~/.claude/skills/crafting-effective-readmes` | `~/.agents/skills/crafting-effective-readmes` |
| `~/.claude/skills/daily-meeting-update` | `~/.agents/skills/daily-meeting-update` |
| `~/.claude/skills/database-schema-designer` | `~/.agents/skills/database-schema-designer` |
| `~/.claude/skills/datadog-cli` | `~/.agents/skills/datadog-cli` |
| `~/.claude/skills/dependency-updater` | `~/.agents/skills/dependency-updater` |
| `~/.claude/skills/design-system-patterns` | `~/.agents/skills/design-system-patterns` |
| `~/.claude/skills/design-system-starter` | `~/.agents/skills/design-system-starter` |
| `~/.claude/skills/design-taste-frontend` | `~/.agents/skills/design-taste-frontend` |
| `~/.claude/skills/diagnose` | `~/.agents/skills/diagnose` |
| `~/.claude/skills/difficult-workplace-conversations` | `~/.agents/skills/difficult-workplace-conversations` |
| `~/.claude/skills/dispatching-parallel-agents` | `~/.agents/skills/dispatching-parallel-agents` |
| `~/.claude/skills/domain-name-brainstormer` | `~/.agents/skills/domain-name-brainstormer` |
| `~/.claude/skills/draw-io` | `~/.agents/skills/draw-io` |
| `~/.claude/skills/error-handling-patterns` | `~/.agents/skills/error-handling-patterns` |
| `~/.claude/skills/excalidraw` | `~/.agents/skills/excalidraw` |
| `~/.claude/skills/executing-plans` | `~/.agents/skills/executing-plans` |
| `~/.claude/skills/feedback-mastery` | `~/.agents/skills/feedback-mastery` |
| `~/.claude/skills/find-skills` | `~/.agents/skills/find-skills` |
| `~/.claude/skills/finishing-a-development-branch` | `~/.agents/skills/finishing-a-development-branch` |
| `~/.claude/skills/frontend-to-backend-requirements` | `~/.agents/skills/frontend-to-backend-requirements` |
| `~/.claude/skills/full-output-enforcement` | `~/.agents/skills/full-output-enforcement` |
| `~/.claude/skills/game-changing-features` | `~/.agents/skills/game-changing-features` |
| `~/.claude/skills/gemini` | `~/.agents/skills/gemini` |
| `~/.claude/skills/gepetto` | `~/.agents/skills/gepetto` |
| `~/.claude/skills/gpt-taste` | `~/.agents/skills/gpt-taste` |
| `~/.claude/skills/grill-me` | `~/.agents/skills/grill-me` |
| `~/.claude/skills/grill-with-docs` | `~/.agents/skills/grill-with-docs` |
| `~/.claude/skills/high-end-visual-design` | `~/.agents/skills/high-end-visual-design` |
| `~/.claude/skills/huashu-design` | `~/.agents/skills/huashu-design` |
| `~/.claude/skills/humanizer` | `~/.agents/skills/humanizer` |
| `~/.claude/skills/image-to-code` | `~/.agents/skills/image-to-code` |
| `~/.claude/skills/imagegen-frontend-mobile` | `~/.agents/skills/imagegen-frontend-mobile` |
| `~/.claude/skills/imagegen-frontend-web` | `~/.agents/skills/imagegen-frontend-web` |
| `~/.claude/skills/impeccable` | `~/.agents/skills/impeccable` |
| `~/.claude/skills/implement-design` | `~/.agents/skills/implement-design` |
| `~/.claude/skills/improve-codebase-architecture` | `~/.agents/skills/improve-codebase-architecture` |
| `~/.claude/skills/industrial-brutalist-ui` | `~/.agents/skills/industrial-brutalist-ui` |
| `~/.claude/skills/interface-design` | `~/.agents/skills/interface-design` |
| `~/.claude/skills/jira` | `~/.agents/skills/jira` |
| `~/.claude/skills/lesson-learned` | `~/.agents/skills/lesson-learned` |
| `~/.claude/skills/marp-slide` | `~/.agents/skills/marp-slide` |
| `~/.claude/skills/material-design-3` | `~/.agents/skills/material-design-3` |
| `~/.claude/skills/meme-factory` | `~/.agents/skills/meme-factory` |
| `~/.claude/skills/mermaid-diagrams` | `~/.agents/skills/mermaid-diagrams` |
| `~/.claude/skills/minimalist-ui` | `~/.agents/skills/minimalist-ui` |
| `~/.claude/skills/modern-ui-designer` | `~/.agents/skills/modern-ui-designer` |
| `~/.claude/skills/mui` | `~/.agents/skills/mui` |
| `~/.claude/skills/naming-analyzer` | `~/.agents/skills/naming-analyzer` |
| `~/.claude/skills/nextjs-supabase-auth` | `~/.agents/skills/nextjs-supabase-auth` |
| `~/.claude/skills/openapi-to-typescript` | `~/.agents/skills/openapi-to-typescript` |
| `~/.claude/skills/performance` | `~/.agents/skills/performance` |
| `~/.claude/skills/perplexity` | `~/.agents/skills/perplexity` |
| `~/.claude/skills/plugin-forge` | `~/.agents/skills/plugin-forge` |
| `~/.claude/skills/postgresql-table-design` | `~/.agents/skills/postgresql-table-design` |
| `~/.claude/skills/product-designer` | `~/.agents/skills/product-designer` |
| `~/.claude/skills/professional-communication` | `~/.agents/skills/professional-communication` |
| `~/.claude/skills/prompt-engineering-patterns` | `~/.agents/skills/prompt-engineering-patterns` |
| `~/.claude/skills/qa-test-planner` | `~/.agents/skills/qa-test-planner` |
| `~/.claude/skills/react-dev` | `~/.agents/skills/react-dev` |
| `~/.claude/skills/react-useeffect` | `~/.agents/skills/react-useeffect` |
| `~/.claude/skills/receiving-code-review` | `~/.agents/skills/receiving-code-review` |
| `~/.claude/skills/redesign-existing-projects` | `~/.agents/skills/redesign-existing-projects` |
| `~/.claude/skills/reducing-entropy` | `~/.agents/skills/reducing-entropy` |
| `~/.claude/skills/requesting-code-review` | `~/.agents/skills/requesting-code-review` |
| `~/.claude/skills/requirements-clarity` | `~/.agents/skills/requirements-clarity` |
| `~/.claude/skills/responsive-design` | `~/.agents/skills/responsive-design` |
| `~/.claude/skills/session-handoff` | `~/.agents/skills/session-handoff` |
| `~/.claude/skills/setup-matt-pocock-skills` | `~/.agents/skills/setup-matt-pocock-skills` |
| `~/.claude/skills/shadcn-ui` | `~/.agents/skills/shadcn-ui` |
| `~/.claude/skills/ship-learn-next` | `~/.agents/skills/ship-learn-next` |
| `~/.claude/skills/skill-judge` | `~/.agents/skills/skill-judge` |
| `~/.claude/skills/stitch-design-taste` | `~/.agents/skills/stitch-design-taste` |
| `~/.claude/skills/stripe-ui-skills` | `~/.agents/skills/stripe-ui-skills` |
| `~/.claude/skills/subagent-driven-development` | `~/.agents/skills/subagent-driven-development` |
| `~/.claude/skills/supabase-postgres-best-practices` | `~/.agents/skills/supabase-postgres-best-practices` |
| `~/.claude/skills/systematic-debugging` | `~/.agents/skills/systematic-debugging` |
| `~/.claude/skills/tailwind-design-system` | `~/.agents/skills/tailwind-design-system` |
| `~/.claude/skills/tailwind-patterns` | `~/.agents/skills/tailwind-patterns` |
| `~/.claude/skills/tdd` | `~/.agents/skills/tdd` |
| `~/.claude/skills/test-driven-development` | `~/.agents/skills/test-driven-development` |
| `~/.claude/skills/to-issues` | `~/.agents/skills/to-issues` |
| `~/.claude/skills/to-prd` | `~/.agents/skills/to-prd` |
| `~/.claude/skills/triage` | `~/.agents/skills/triage` |
| `~/.claude/skills/typescript-expert` | `~/.agents/skills/typescript-expert` |
| `~/.claude/skills/ui-ux-pro-max` | `~/.agents/skills/ui-ux-pro-max` |
| `~/.claude/skills/using-git-worktrees` | `~/.agents/skills/using-git-worktrees` |
| `~/.claude/skills/using-superpowers` | `~/.agents/skills/using-superpowers` |
| `~/.claude/skills/vercel-react-best-practices` | `~/.agents/skills/vercel-react-best-practices` |
| `~/.claude/skills/verification-before-completion` | `~/.agents/skills/verification-before-completion` |
| `~/.claude/skills/web-to-markdown` | `~/.agents/skills/web-to-markdown` |
| `~/.claude/skills/write-a-skill` | `~/.agents/skills/write-a-skill` |
| `~/.claude/skills/writing-clearly-and-concisely` | `~/.agents/skills/writing-clearly-and-concisely` |
| `~/.claude/skills/writing-plans` | `~/.agents/skills/writing-plans` |
| `~/.claude/skills/writing-skills` | `~/.agents/skills/writing-skills` |
| `~/.claude/skills/zoom-out` | `~/.agents/skills/zoom-out` |
| `~/.codex/skills/codex-primary-runtime` | **nothing — content is gone** |

## Skills with no description

A skill with no `description` in its frontmatter is never selected by the model, because the description is the only thing the model sees before deciding to load it.

| Skill | Path |
|---|---|
| `do` | `~/.claude/plugins/marketplaces/thedotmack/openclaw/skills/do` |
| `make-plan` | `~/.claude/plugins/marketplaces/thedotmack/openclaw/skills/make-plan` |
| `openclaw` | `~/.claude/plugins/marketplaces/thedotmack/openclaw` |

## Marketplace skills not installed

338 skills sit in cloned marketplace repositories under `~/.claude/plugins/marketplaces/` without being installed. They cost disk, not context.

| Marketplace | Skills waiting |
|---|---:|
| `ruflo` | 278 |
| `claude-plugins-official` | 28 |
| `anthropic-agent-skills` | 19 |
| `claude-code-plugins` | 9 |
| `thedotmack` | 3 |
| `Mixedbread-Grep` | 1 |
