# Hooks

[← back](../README.md)

5 hooks in `~/.claude/settings.json`. A hook runs on a tool-call boundary and can cancel the call by exiting non-zero.

| Event | Matcher | Command |
|---|---|---|
| PreToolUse | `Bash` | `jq -re '.tool_input.command // "null"' \| grep -qE '^(npm \|pnpm \|yarn \|cargo \|pytest)' && jq -n --arg m 'Long-running command — consider tmux: ! tmux new -s work' '{"systemMessage":$m}' \|\| true` |
| PreToolUse | `Bash` | `jq -re '.tool_input.command // "null"' \| grep -q '^git push' && jq -n --arg m 'About to push: review commits' '{"systemMessage":$m}' \|\| true` |
| PreToolUse | `Write\|Edit` | `jq -re '.tool_input.file_path // "null"' 2>/dev/null \| grep -qE '(^\|[/\])\.env(\.[^/\]*)?$' && { echo 'BLOCKED: credential file (.env*) - edit it yourself' >&2; exit 2; }; true` |
| PreToolUse | `Write\|Edit` | `jq -re '.tool_input.file_path // "null"' 2>/dev/null \| grep -qE '\.(pem\|key\|pfx)$' && { echo 'BLOCKED: private key/certificate file - edit it yourself' >&2; exit 2; }; true` |
| SessionStart | `*` | `"C:/nvm4w/nodejs/node.exe" "~/.claude/hooks/context-mode-cache-heal.mjs"` |
