# Symlink topology

[← back](../README.md)

869 of the 2,342 skill directories on disk are symlinks. The pattern is one shared store with every tool linking into it, which is the right shape: install once, reach every tool.

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
| `.trae` | 107 |
| `.cursor` | 85 |
| `.cline` | 85 |
| `.codex` | 1 |
| `.gemini` | 1 |

## Most-linked targets

| Target | Incoming links |
|---|---:|
| `~/.agents/skills/find-skills` | 10 |
| `~/.agents/skills/accessibility` | 8 |
| `~/.agents/skills/agent-md-refactor` | 8 |
| `~/.agents/skills/agentation` | 8 |
| `~/.agents/skills/api-design-principles` | 8 |
| `~/.agents/skills/apple-hig-designer` | 8 |
| `~/.agents/skills/backend-to-frontend-handoff-docs` | 8 |
| `~/.agents/skills/behavioral-product-design` | 8 |
| `~/.agents/skills/brainstorming` | 8 |
| `~/.agents/skills/c4-architecture` | 8 |
| `~/.agents/skills/changelog-generator` | 8 |
| `~/.agents/skills/codex` | 8 |
| `~/.agents/skills/command-creator` | 8 |
| `~/.agents/skills/commit-work` | 8 |
| `~/.agents/skills/context-engineering-collection` | 8 |
| `~/.agents/skills/crafting-effective-readmes` | 8 |
| `~/.agents/skills/daily-meeting-update` | 8 |
| `~/.agents/skills/database-schema-designer` | 8 |
| `~/.agents/skills/datadog-cli` | 8 |
| `~/.agents/skills/dependency-updater` | 8 |
| `~/.agents/skills/design-system-patterns` | 8 |
| `~/.agents/skills/design-system-starter` | 8 |
| `~/.agents/skills/difficult-workplace-conversations` | 8 |
| `~/.agents/skills/dispatching-parallel-agents` | 8 |
| `~/.agents/skills/domain-name-brainstormer` | 8 |
| `~/.agents/skills/draw-io` | 8 |
| `~/.agents/skills/error-handling-patterns` | 8 |
| `~/.agents/skills/excalidraw` | 8 |
| `~/.agents/skills/executing-plans` | 8 |
| `~/.agents/skills/feedback-mastery` | 8 |
