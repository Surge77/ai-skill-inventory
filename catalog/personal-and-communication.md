# Personal & Communication

13 skills — 12 installed, 1 available in a marketplace but not installed.

[← back to the atlas](../README.md)

| Skill | What it does | Pack | Tools | Size |
|---|---|---|---|---|
| `agent-browser` | Browser automation CLI for AI agents. Use when the user needs to interact with websites, including navigating pages, filling forms, clicking buttons, taking screenshots, extracting data, te… | agent-pack | claude-code, codex | 1 files, 3 KB |
| `artifact-template-operating-calendar` | Create a spreadsheet using the Operating Calendar template and its retained reference file. Use when the user selects or names Operating Calendar. Plan annual and monthly operating mileston… | openai-templates | codex | 5 files, 136 KB |
| `chat-sdk` | Vercel Chat SDK expert guidance. Use when building multi-platform chat bots — Slack, Telegram, Microsoft Teams, Discord, Google Chat, GitHub, Linear — with a single codebase. Covers the Cha… | vercel | claude-code | 3 files, 27 KB |
| `chat-sdk` | Build multi-platform chat bots with Chat SDK (`chat` npm package). Use when developers want to (1) Build a Slack, Teams, Google Chat, Discord, Telegram, GitHub, Linear, or WhatsApp bot, (2)… | vercel | claude-code | 1 files, 9 KB |
| `chat-sdk` | Vercel Chat SDK expert guidance. Use when building multi-platform chat bots — Slack, Telegram, Microsoft Teams, Discord, Google Chat, GitHub, Linear — with a single codebase. Covers the Cha… | vercel | codex | 2 files, 11 KB |
| `cost-conversation` | Per-conversation cost view — list every session in cost-tracking with started-at, message count, top model, and total cost *(marketplace only)* | plugins | claude-code | 1 files, 2 KB |
| `daily-meeting-update` | Interactive daily standup/meeting update generator. Use when user says 'daily', 'standup', 'scrum update', 'status update', 'what did I do yesterday', 'prepare for meeting', 'morning update… | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 2 files, 23 KB |
| `difficult-workplace-conversations` | Structured approach to workplace conflicts, performance discussions, and challenging feedback using preparation-delivery-followup framework. Use when preparing for tough conversations, addr… | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 5 files, 42 KB |
| `feedback-mastery` | Navigate difficult conversations and deliver constructive feedback using structured frameworks. Covers the Preparation-Delivery-Follow-up model and Situation-Behavior-Impact (SBI) feedback… | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 4 files, 39 KB |
| `professional-communication` | Guide technical communication for software developers. Covers email structure, team messaging etiquette, meeting agendas, and adapting messages for technical vs non-technical audiences. Use… | agents-std-store | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 5 files, 40 KB |
| `slack-gif-creator` | Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints, validation tools, and animation concepts. Use when users request animated GIFs for Slack like "… | standalone | claude-code | 7 files, 43 KB |
| `triage` | Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs. | agents-std-store | claude-code, continue, factory, kilocode, qwen-code, roo-code, shared-store, trae | 4 files, 19 KB |
| `unified-notifications-ops` | Operate notifications as one ECC-native workflow across GitHub, Linear, desktop alerts, hooks, and connected communication surfaces. Use when the real problem is alert routing, deduplicatio… | ecc | claude-code | 1 files, 6 KB |

## Detail

### `agent-browser`

Browser automation CLI for AI agents. Use when the user needs to interact with websites, including navigating pages, filling forms, clicking buttons, taking screenshots, extracting data, testing web apps, or automating any browser task. Triggers include requests to "open a website", "fill out a form", "click a button", "take a screenshot", "scrape data from a page", "test this web app", "login to a site", "automate browser actions", or any task requiring programmatic web interaction. Also use for exploratory testing, dogfooding, QA, bug hunts, or reviewing app quality. Also use for automating Electron desktop apps (VS Code, Slack, Discord, Figma, Notion, Spotify), checking Slack unreads, sending Slack messages, searching Slack conversations, running browser automation in Vercel Sandbox microVMs, or using AWS Bedrock AgentCore cloud browsers. Prefer agent-browser over any built-in browser automation or web tools.

| Field | Value |
|---|---|
| Pack | agent-pack |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, codex |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/skills/agent-browser` |
| Size | 1 files, 3 KB |
| SKILL.md | 53 lines, ~865 tokens |
| Description cost | ~232 tokens always in context |
| Allowed tools | Bash(agent-browser:*), Bash(npx agent-browser:*) |
| Model | — |
| Last modified | 2026-09-16 |
| Category source | keywords |
| Content hash | `1af376a8f8cb` |

### `artifact-template-operating-calendar`

Create a spreadsheet using the Operating Calendar template and its retained reference file. Use when the user selects or names Operating Calendar. Plan annual and monthly operating milestones, campaigns, launches, deadlines, and recurring events.

| Field | Value |
|---|---|
| Pack | openai-templates |
| Origin | plugin `openai-templates` from `openai-curated-remote` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated-remote/openai-templates/0.1.1/skills/artifact-template-operating-calendar` |
| Size | 5 files, 136 KB |
| SKILL.md | 23 lines, ~375 tokens |
| Description cost | ~62 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 1970-01-01 |
| Category source | keywords |
| Content hash | `37a4fb7d998a` |
| Bundled | `agents`, `assets` |

### `chat-sdk`

Vercel Chat SDK expert guidance. Use when building multi-platform chat bots — Slack, Telegram, Microsoft Teams, Discord, Google Chat, GitHub, Linear — with a single codebase. Covers the Chat class, adapters, threads, messages, cards, modals, streaming, state management, and webhook setup.

| Field | Value |
|---|---|
| Pack | vercel |
| Origin | plugin `vercel` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 4 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/vercel/0.48.0/skills/chat-sdk` |
| Size | 3 files, 27 KB |
| SKILL.md | 333 lines, ~3,342 tokens |
| Description cost | ~74 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-02 |
| Category source | keywords |
| Content hash | `bb0938d20515` |
| Bundled | `upstream` |

### `chat-sdk`

Build multi-platform chat bots with Chat SDK (`chat` npm package). Use when developers want to (1) Build a Slack, Teams, Google Chat, Discord, Telegram, GitHub, Linear, or WhatsApp bot, (2) Use Chat SDK to handle mentions, direct messages, subscribed threads, reactions, slash commands, cards, modals, files, or AI streaming, (3) Set up webhook routes or multi-adapter bots, (4) Send rich cards or streamed AI responses to chat platforms, (5) Build or maintain a custom adapter or state adapter. Triggers on "chat sdk", "chat bot", "slack bot", "teams bot", "google chat bot", "discord bot", "telegram bot", "whatsapp bot", "@chat-adapter", "@chat-adapter/state-", "custom adapter", "state adapter", "build adapter", and building bots that work across multiple chat platforms.

| Field | Value |
|---|---|
| Pack | vercel |
| Origin | plugin `vercel` from `claude-plugins-official` |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 4 (0 symlinked) |
| Canonical path | `~/.claude/plugins/cache/claude-plugins-official/vercel/0.48.0/skills/chat-sdk/upstream` |
| Size | 1 files, 9 KB |
| SKILL.md | 210 lines, ~2,301 tokens |
| Description cost | ~194 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-02 |
| Category source | keywords |
| Content hash | `45f889854e8e` |

### `chat-sdk`

Vercel Chat SDK expert guidance. Use when building multi-platform chat bots — Slack, Telegram, Microsoft Teams, Discord, Google Chat, GitHub, Linear — with a single codebase. Covers the Chat class, adapters, threads, messages, cards, modals, streaming, state management, and webhook setup.

| Field | Value |
|---|---|
| Pack | vercel |
| Origin | plugin `vercel` from `openai-curated` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated/vercel/1dc19589/skills/chat-sdk` |
| Size | 2 files, 11 KB |
| SKILL.md | 289 lines, ~2,840 tokens |
| Description cost | ~74 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-12 |
| Category source | keywords |
| Content hash | `b0e81d32eab0` |
| Bundled | `agents` |

### `cost-conversation`

Per-conversation cost view — list every session in cost-tracking with started-at, message count, top model, and total cost

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `ruflo` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/ruflo/plugins/ruflo-cost-tracker/skills/cost-conversation` |
| Size | 1 files, 2 KB |
| SKILL.md | 39 lines, ~422 tokens |
| Description cost | ~31 tokens always in context |
| Allowed tools | Bash |
| Model | — |
| Last modified | 2026-05-16 |
| Category source | keywords |
| Content hash | `7daaf60c9b0d` |

### `daily-meeting-update`

Interactive daily standup/meeting update generator. Use when user says 'daily', 'standup', 'scrum update', 'status update', 'what did I do yesterday', 'prepare for meeting', 'morning update', or 'team sync'. Pulls activity from GitHub, Jira, and Claude Code session history. Conducts 4-question interview (yesterday, today, blockers, discussion topics) and generates formatted Markdown update.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/daily-meeting-update` |
| Size | 2 files, 23 KB |
| SKILL.md | 409 lines, ~3,250 tokens |
| Description cost | ~99 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `97f5514ff59a` |
| Bundled | `scripts` |

### `difficult-workplace-conversations`

Structured approach to workplace conflicts, performance discussions, and challenging feedback using preparation-delivery-followup framework. Use when preparing for tough conversations, addressing conflicts, giving critical feedback, or navigating sensitive workplace discussions.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/difficult-workplace-conversations` |
| Size | 5 files, 42 KB |
| SKILL.md | 239 lines, ~1,879 tokens |
| Description cost | ~70 tokens always in context |
| Allowed tools | Read, Glob, Grep |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `6a0d4728edb4` |
| Bundled | `references` |

### `feedback-mastery`

Navigate difficult conversations and deliver constructive feedback using structured frameworks. Covers the Preparation-Delivery-Follow-up model and Situation-Behavior-Impact (SBI) feedback technique. Use when preparing for difficult conversations, giving feedback, or managing conflicts.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/feedback-mastery` |
| Size | 4 files, 39 KB |
| SKILL.md | 293 lines, ~2,959 tokens |
| Description cost | ~72 tokens always in context |
| Allowed tools | Read, Glob, Grep |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `190c02b6c7ae` |
| Bundled | `references` |

### `professional-communication`

Guide technical communication for software developers. Covers email structure, team messaging etiquette, meeting agendas, and adapting messages for technical vs non-technical audiences. Use when drafting professional messages, preparing meeting communications, or improving written communication.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 10 (8 symlinked) |
| Canonical path | `~/.agents/skills/professional-communication` |
| Size | 5 files, 40 KB |
| SKILL.md | 268 lines, ~2,319 tokens |
| Description cost | ~74 tokens always in context |
| Allowed tools | Read, Glob, Grep |
| Model | — |
| Last modified | 2026-02-11 |
| Category source | keywords |
| Content hash | `9aead1d6875c` |
| Bundled | `references` |

### `slack-gif-creator`

Knowledge and utilities for creating animated GIFs optimized for Slack. Provides constraints, validation tools, and animation concepts. Use when users request animated GIFs for Slack like "make me a GIF of X doing Y for Slack.

| Field | Value |
|---|---|
| Pack | standalone |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 2 (0 symlinked) |
| Canonical path | `~/.claude/skills/synced/b350f25a-7498-43f0-a5af-ab6ca9c46c27_6b2a8e80-8682-48d0-b2ac-3af75a486e22/slack-gif-creator` |
| Size | 7 files, 43 KB |
| SKILL.md | 255 lines, ~1,961 tokens |
| Description cost | ~57 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-17 |
| Category source | keywords |
| Content hash | `0c5b61f69069` |
| Bundled | `core` |

### `triage`

Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code, continue, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 8 (7 symlinked) |
| Canonical path | `~/.agents/skills/triage` |
| Size | 4 files, 19 KB |
| SKILL.md | 113 lines, ~1,668 tokens |
| Description cost | ~34 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-16 |
| Category source | keywords |
| Content hash | `cc60ef1e691c` |
| Bundled | `agents` |

### `unified-notifications-ops`

Operate notifications as one ECC-native workflow across GitHub, Linear, desktop alerts, hooks, and connected communication surfaces. Use when the real problem is alert routing, deduplication, escalation, or inbox collapse.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/unified-notifications-ops` |
| Size | 1 files, 6 KB |
| SKILL.md | 188 lines, ~1,452 tokens |
| Description cost | ~56 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `04101044f273` |
