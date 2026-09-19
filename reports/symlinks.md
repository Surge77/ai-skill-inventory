# Symlink topology

[← back](../README.md)

923 of the 2,835 skill directories on disk are symlinks. The pattern is one shared store with every tool linking into it, which is the right shape: install once, reach every tool.

```
~/.agents/skills/<skill>/          <- the actual content
   ^  ^  ^
   |  |  +-- ~/.cursor/skills/<skill>      (symlink)
   |  +----- ~/.codex/skills/<skill>       (symlink)
   +-------- ~/.continue, .factory, .qwen, .roo, .kilocode, .cline, .trae

~/.claude/skills/<skill>/          <- empty directory, link never created
```

## Links per tool

| Tool directory | Symlinks |
|---|---:|
| `.continue` | 118 |
| `.factory` | 118 |
| `.qwen` | 118 |
| `.kilocode` | 118 |
| `.roo` | 118 |
| `.trae` | 113 |
| `.cursor` | 85 |
| `.cline` | 85 |
| `.claude` | 48 |
| `.codex` | 1 |
| `.gemini` | 1 |

## Most-linked targets

| Target | Incoming links |
|---|---:|
| `~/.agents/skills/find-skills` | 10 |
| `~/.agents/skills/accessibility` | 9 |
| `~/.agents/skills/agentation` | 9 |
| `~/.agents/skills/api-design-principles` | 9 |
| `~/.agents/skills/brainstorming` | 9 |
| `~/.agents/skills/context-engineering-collection` | 9 |
| `~/.agents/skills/design-system-patterns` | 9 |
| `~/.agents/skills/dispatching-parallel-agents` | 9 |
| `~/.agents/skills/error-handling-patterns` | 9 |
| `~/.agents/skills/executing-plans` | 9 |
| `~/.agents/skills/finishing-a-development-branch` | 9 |
| `~/.agents/skills/interface-design` | 9 |
| `~/.agents/skills/nextjs-supabase-auth` | 9 |
| `~/.agents/skills/performance` | 9 |
| `~/.agents/skills/postgresql-table-design` | 9 |
| `~/.agents/skills/product-designer` | 9 |
| `~/.agents/skills/prompt-engineering-patterns` | 9 |
| `~/.agents/skills/receiving-code-review` | 9 |
| `~/.agents/skills/requesting-code-review` | 9 |
| `~/.agents/skills/responsive-design` | 9 |
| `~/.agents/skills/shadcn-ui` | 9 |
| `~/.agents/skills/subagent-driven-development` | 9 |
| `~/.agents/skills/supabase-postgres-best-practices` | 9 |
| `~/.agents/skills/systematic-debugging` | 9 |
| `~/.agents/skills/tailwind-design-system` | 9 |
| `~/.agents/skills/tailwind-patterns` | 9 |
| `~/.agents/skills/test-driven-development` | 9 |
| `~/.agents/skills/typescript-expert` | 9 |
| `~/.agents/skills/ui-ux-pro-max` | 9 |
| `~/.agents/skills/using-git-worktrees` | 9 |
