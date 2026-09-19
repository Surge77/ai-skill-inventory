# Health

[← back](../README.md)

## 1 empty skill directories

`~/.claude/skills/` contains directories with no `SKILL.md` inside. Claude Code skips them silently, so these skills are installed on the machine and unusable from Claude Code.

0 of 1 are **recoverable**: the real content is in the shared store at `~/.agents/skills/`, which every other tool symlinks to correctly.

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
| `~/.codex/skills/codex-primary-runtime` | **nothing — content is gone** |

## Skills with no description

A skill with no `description` in its frontmatter is never selected by the model, because the description is the only thing the model sees before deciding to load it.

| Skill | Path |
|---|---|
| `do` | `~/.claude/plugins/marketplaces/thedotmack/openclaw/skills/do` |
| `make-plan` | `~/.claude/plugins/marketplaces/thedotmack/openclaw/skills/make-plan` |
| `openclaw` | `~/.claude/plugins/marketplaces/thedotmack/openclaw` |

## Marketplace skills not installed

329 skills sit in cloned marketplace repositories under `~/.claude/plugins/marketplaces/` without being installed. They cost disk, not context.

| Marketplace | Skills waiting |
|---|---:|
| `ruflo` | 278 |
| `claude-plugins-official` | 28 |
| `claude-code-plugins` | 9 |
| `anthropic-agent-skills` | 8 |
| `thedotmack` | 3 |
| `prompts.chat` | 2 |
| `Mixedbread-Grep` | 1 |
