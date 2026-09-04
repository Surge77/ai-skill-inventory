# Browser & Automation

14 skills — 3 installed, 11 available in a marketplace but not installed.

[← back to the atlas](../README.md)

| Skill | What it does | Pack | Tools | Size |
|---|---|---|---|---|
| `agent-browser` | Browser automation CLI for AI agents. Use when the user needs to interact with websites, verify dev server output, test web apps, navigate pages, fill forms, click buttons, take screenshots… | agent-pack | codex | 2 files, 7 KB |
| `agent-browser-verify` | Automated browser verification for dev servers. Triggers when a dev server starts to run a visual gut-check with agent-browser — verifies the page loads, checks for console errors, validate… | agent-pack | codex | 2 files, 7 KB |
| `agent-workflow-automation` | Agent skill for workflow-automation - invoke with $agent-workflow-automation *(marketplace only)* | agent-pack | claude-code | 1 files, 16 KB |
| `browser` | Web browser automation with AI-optimized snapshots for claude-flow agents *(marketplace only)* | .claude | claude-code | 1 files, 5 KB |
| `browser-extract` | Extract structured data via stored browser-templates or one-shot DOM queries, with mandatory AIDefence PII + prompt-injection gates before content reaches the model *(marketplace only)* | plugins | claude-code | 1 files, 3 KB |
| `browser-form-fill` | Fill a web form by mapping field-name → value, with optional template lookup from browser-templates for known forms *(marketplace only)* | plugins | claude-code | 1 files, 3 KB |
| `browser-login` | Drive an authentication flow once, sanitize cookies through AIDefence, and vault a reusable cookie handle in browser-cookies for future sessions *(marketplace only)* | plugins | claude-code | 1 files, 3 KB |
| `browser-record` | Open a named, traced browser session into an RVF cognitive container with a ruvector trajectory recording every action *(marketplace only)* | plugins | claude-code | 1 files, 3 KB |
| `browser-replay` | Replay a recorded session trajectory against the same URL or a mutated variant; uses browser-selectors embedding similarity to recover from DOM drift *(marketplace only)* | plugins | claude-code | 1 files, 3 KB |
| `browser-scrape` | DEPRECATED in v0.2.0 -- use browser-extract instead; this is a thin shim for backward compatibility, removed in v0.3.0 *(marketplace only)* | plugins | claude-code | 1 files, 2 KB |
| `browser-screenshot-diff` | Visual + DOM diff between two recorded sessions at matching trajectory step ids; used for visual regression and replay verification *(marketplace only)* | plugins | claude-code | 1 files, 2 KB |
| `control-in-app-browser` | Control the in-app Browser for opening, navigating, inspecting visible or interactive page state, clicking, typing, screenshots, and local web testing. It can have existing signed-in sessio… | browser | codex | 2 files, 13 KB |
| `github-workflow-automation` | Advanced GitHub Actions workflow automation with AI swarm coordination, intelligent CI/CD pipelines, and comprehensive repository management *(marketplace only)* | .agents | claude-code | 1 files, 24 KB |
| `github-workflow-automation` | Advanced GitHub Actions workflow automation with AI swarm coordination, intelligent CI/CD pipelines, and comprehensive repository management *(marketplace only)* | .claude | claude-code | 1 files, 24 KB |

## Detail

### `agent-browser`

Browser automation CLI for AI agents. Use when the user needs to interact with websites, verify dev server output, test web apps, navigate pages, fill forms, click buttons, take screenshots, extract data, or automate any browser task. Also triggers when a dev server starts so you can verify it visually.

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | plugin `vercel` from `openai-curated` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated/vercel/bd2122cb/skills/agent-browser` |
| Size | 2 files, 7 KB |
| SKILL.md | 228 lines, ~1,711 tokens |
| Description cost | ~76 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-07-13 |
| Category source | keywords |
| Content hash | `4ad05c784189` |
| Bundled | `agents` |

### `agent-browser-verify`

Automated browser verification for dev servers. Triggers when a dev server starts to run a visual gut-check with agent-browser — verifies the page loads, checks for console errors, validates key UI elements, and reports pass/fail before continuing.

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | plugin `vercel` from `openai-curated` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated/vercel/bd2122cb/skills/agent-browser-verify` |
| Size | 2 files, 7 KB |
| SKILL.md | 196 lines, ~1,690 tokens |
| Description cost | ~63 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-07-13 |
| Category source | keywords |
| Content hash | `0a9f10615662` |
| Bundled | `agents` |

### `agent-workflow-automation`

Agent skill for workflow-automation - invoke with $agent-workflow-automation

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/agent-workflow-automation` |
| Size | 1 files, 16 KB |
| SKILL.md | 640 lines, ~4,158 tokens |
| Description cost | ~19 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `4727bf2cfaea` |

### `browser`

Web browser automation with AI-optimized snapshots for claude-flow agents

| Field | Value |
|---|---|
| Pack | .claude |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.claude/skills/browser` |
| Size | 1 files, 5 KB |
| SKILL.md | 205 lines, ~1,373 tokens |
| Description cost | ~19 tokens always in context |
| Allowed tools | - browser/open - browser/snapshot - browser/click - browser/fill - browser/screenshot - browser/close |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `a57c0404c719` |

### `browser-extract`

Extract structured data via stored browser-templates or one-shot DOM queries, with mandatory AIDefence PII + prompt-injection gates before content reaches the model

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-browser/skills/browser-extract` |
| Size | 1 files, 3 KB |
| SKILL.md | 56 lines, ~860 tokens |
| Description cost | ~41 tokens always in context |
| Allowed tools | mcp__claude-flow__browser_open mcp__claude-flow__browser_close mcp__claude-flow__browser_get-text mcp__claude-flow__browser_get-value mcp__claude-flow__browser_eval mcp__claude-flow__browser_snapshot mcp__claude-flow__browser_screenshot mcp__claude-flow__browser_scroll mcp__claude-flow__browser_wait mcp__claude-flow__browser_click mcp__claude-flow__aidefence_has_pii mcp__claude-flow__aidefence_is_safe mcp__claude-flow__aidefence_scan Bash Read Write |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `5c3fafe21041` |

### `browser-form-fill`

Fill a web form by mapping field-name → value, with optional template lookup from browser-templates for known forms

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-browser/skills/browser-form-fill` |
| Size | 1 files, 3 KB |
| SKILL.md | 41 lines, ~727 tokens |
| Description cost | ~30 tokens always in context |
| Allowed tools | mcp__claude-flow__browser_open mcp__claude-flow__browser_close mcp__claude-flow__browser_fill mcp__claude-flow__browser_type mcp__claude-flow__browser_select mcp__claude-flow__browser_check mcp__claude-flow__browser_uncheck mcp__claude-flow__browser_click mcp__claude-flow__browser_wait mcp__claude-flow__browser_snapshot mcp__claude-flow__aidefence_has_pii Bash Read Write |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `0226bbd1f1c0` |

### `browser-login`

Drive an authentication flow once, sanitize cookies through AIDefence, and vault a reusable cookie handle in browser-cookies for future sessions

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-browser/skills/browser-login` |
| Size | 1 files, 3 KB |
| SKILL.md | 47 lines, ~784 tokens |
| Description cost | ~36 tokens always in context |
| Allowed tools | mcp__claude-flow__browser_open mcp__claude-flow__browser_close mcp__claude-flow__browser_fill mcp__claude-flow__browser_type mcp__claude-flow__browser_click mcp__claude-flow__browser_wait mcp__claude-flow__browser_eval mcp__claude-flow__browser_snapshot mcp__claude-flow__aidefence_scan mcp__claude-flow__aidefence_has_pii Bash Read Write |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `b8e629857a6e` |

### `browser-record`

Open a named, traced browser session into an RVF cognitive container with a ruvector trajectory recording every action

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-browser/skills/browser-record` |
| Size | 1 files, 3 KB |
| SKILL.md | 50 lines, ~718 tokens |
| Description cost | ~30 tokens always in context |
| Allowed tools | mcp__claude-flow__browser_open mcp__claude-flow__browser_close mcp__claude-flow__browser_session-list mcp__claude-flow__browser_screenshot mcp__claude-flow__browser_snapshot mcp__claude-flow__browser_wait mcp__claude-flow__aidefence_has_pii mcp__claude-flow__aidefence_scan Bash Read Write |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `3f505a8519ae` |

### `browser-replay`

Replay a recorded session trajectory against the same URL or a mutated variant; uses browser-selectors embedding similarity to recover from DOM drift

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-browser/skills/browser-replay` |
| Size | 1 files, 3 KB |
| SKILL.md | 48 lines, ~824 tokens |
| Description cost | ~38 tokens always in context |
| Allowed tools | mcp__claude-flow__browser_open mcp__claude-flow__browser_close mcp__claude-flow__browser_click mcp__claude-flow__browser_fill mcp__claude-flow__browser_type mcp__claude-flow__browser_press mcp__claude-flow__browser_select mcp__claude-flow__browser_check mcp__claude-flow__browser_uncheck mcp__claude-flow__browser_hover mcp__claude-flow__browser_wait mcp__claude-flow__browser_screenshot mcp__claude-flow__browser_snapshot mcp__claude-flow__browser_eval Bash Read |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `4f4ed31635ba` |

### `browser-scrape`

DEPRECATED in v0.2.0 -- use browser-extract instead; this is a thin shim for backward compatibility, removed in v0.3.0

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-browser/skills/browser-scrape` |
| Size | 1 files, 2 KB |
| SKILL.md | 37 lines, ~416 tokens |
| Description cost | ~30 tokens always in context |
| Allowed tools | Bash Read |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `5b7557d0f9a8` |

### `browser-screenshot-diff`

Visual + DOM diff between two recorded sessions at matching trajectory step ids; used for visual regression and replay verification

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-browser/skills/browser-screenshot-diff` |
| Size | 1 files, 2 KB |
| SKILL.md | 38 lines, ~630 tokens |
| Description cost | ~33 tokens always in context |
| Allowed tools | mcp__claude-flow__browser_eval Bash Read Write |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `24c9bfd3102c` |

### `control-in-app-browser`

Control the in-app Browser for opening, navigating, inspecting visible or interactive page state, clicking, typing, screenshots, and local web testing. It can have existing signed-in sessions. For semantic operations on linked resources, prefer a purpose-built connector, API, or CLI when available.

| Field | Value |
|---|---|
| Pack | browser |
| Origin | plugin `browser` from `openai-bundled` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-bundled/browser/26.803.41515/skills/control-in-app-browser` |
| Size | 2 files, 13 KB |
| SKILL.md | 171 lines, ~3,305 tokens |
| Description cost | ~75 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-08-05 |
| Category source | keywords |
| Content hash | `07ad234d316b` |
| Bundled | `agents` |

### `github-workflow-automation`

Advanced GitHub Actions workflow automation with AI swarm coordination, intelligent CI/CD pipelines, and comprehensive repository management

| Field | Value |
|---|---|
| Pack | .agents |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.agents/skills/github-workflow-automation` |
| Size | 1 files, 24 KB |
| SKILL.md | 1066 lines, ~6,241 tokens |
| Description cost | ~35 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `44fc7bc3831c` |

### `github-workflow-automation`

Advanced GitHub Actions workflow automation with AI swarm coordination, intelligent CI/CD pipelines, and comprehensive repository management

| Field | Value |
|---|---|
| Pack | .claude |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/.claude/skills/github-workflow-automation` |
| Size | 1 files, 24 KB |
| SKILL.md | 1048 lines, ~6,163 tokens |
| Description cost | ~35 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `ee4369cda75d` |
