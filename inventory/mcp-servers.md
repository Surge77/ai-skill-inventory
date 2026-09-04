# MCP servers

[← back](../README.md)

28 configured servers. Each one adds tool definitions to the context of every session it is enabled in, so an unused server is a standing cost.

| Server | Transport | Entry point | Configured in |
|---|---|---|---|
| `browser-use` | http | `https://api.browser-use.com/mcp` | mcp-configs/mcp-servers.json |
| `browserbase` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `clickhouse` | http | `https://mcp.clickhouse.cloud/mcp` | mcp-configs/mcp-servers.json |
| `cloudflare-docs` | http | `https://docs.mcp.cloudflare.com/mcp` | mcp-configs/mcp-servers.json |
| `cloudflare-observability` | http | `https://observability.mcp.cloudflare.com/mcp` | mcp-configs/mcp-servers.json |
| `cloudflare-workers-bindings` | http | `https://bindings.mcp.cloudflare.com/mcp` | mcp-configs/mcp-servers.json |
| `cloudflare-workers-builds` | http | `https://builds.mcp.cloudflare.com/mcp` | mcp-configs/mcp-servers.json |
| `confluence` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `context7` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `devfleet` | http | `http://localhost:18801/mcp` | mcp-configs/mcp-servers.json |
| `evalview` | stdio | `python3` | mcp-configs/mcp-servers.json |
| `exa-web-search` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `fal-ai` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `filesystem` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `firecrawl` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `github` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `jira` | stdio | `uvx` | mcp-configs/mcp-servers.json |
| `laraplugins` | http | `https://laraplugins.io/mcp/plugins` | mcp-configs/mcp-servers.json |
| `longhand` | stdio | `longhand` | mcp-configs/mcp-servers.json |
| `magic` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `memory` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `omega-memory` | stdio | `uvx` | mcp-configs/mcp-servers.json |
| `playwright` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `railway` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `sequential-thinking` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `supabase` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `token-optimizer` | stdio | `npx` | mcp-configs/mcp-servers.json |
| `vercel` | http | `https://mcp.vercel.com` | mcp-configs/mcp-servers.json |

Credentials are held in environment variables and are not captured by the scan.
