# Languages & Frameworks

20 skills — 18 installed, 2 available in a marketplace but not installed.

[← back to the atlas](../README.md)

| Skill | What it does | Pack | Tools | Size |
|---|---|---|---|---|
| `build-mcpb` | This skill should be used when the user wants to "package an MCP server", "bundle an MCP", "make an MCPB", "ship a local MCP server", "distribute a local MCP", discusses ".mcpb files", ment… *(marketplace only)* | plugins | claude-code | 3 files, 18 KB |
| `bun-runtime` | Bun as runtime, package manager, bundler, and test runner. When to choose Bun vs Node, migration notes, and Vercel support. | agents-std-store | agents-std | 2 files, 3 KB |
| `cpp-coding-standards` | C++ coding standards based on the C++ Core Guidelines (isocpp.github.io). Use when writing, reviewing, or refactoring C++ code to enforce modern, safe, and idiomatic practices. | ecc | claude-code | 1 files, 22 KB |
| `dart-flutter-patterns` | Production-ready Dart and Flutter patterns covering null safety, immutable state, async composition, widget architecture, popular state management frameworks (BLoC, Riverpod, Provider), GoR… | ecc | claude-code | 1 files, 16 KB |
| `django-verification` | Verification loop for Django projects: migrations, linting, tests with coverage, security scans, and deployment readiness checks before release or PR. | ecc | claude-code | 1 files, 12 KB |
| `java-coding-standards` | Java coding standards for Spring Boot and Quarkus services: naming, immutability, Optional usage, streams, exceptions, generics, CDI, reactive patterns, and project layout. Automatically ap… | ecc | claude-code | 1 files, 12 KB |
| `kotlin-coroutines-flows` | Kotlin Coroutines and Flow patterns for Android and KMP — structured concurrency, Flow operators, StateFlow, error handling, and testing. | ecc | claude-code | 1 files, 8 KB |
| `kotlin-ktor-patterns` | Ktor server patterns including routing DSL, plugins, authentication, Koin DI, kotlinx.serialization, WebSockets, and testApplication testing. | ecc | claude-code | 1 files, 20 KB |
| `kotlin-patterns` | Idiomatic Kotlin patterns, best practices, and conventions for building robust, efficient, and maintainable Kotlin applications with coroutines, null safety, and DSL builders. | ecc | claude-code | 1 files, 19 KB |
| `mcp-builder` | Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integr… *(marketplace only)* | skills | claude-code | 10 files, 122 KB |
| `nodejs-keccak256` | Prevent Ethereum hashing bugs in JavaScript and TypeScript. Node's sha3-256 is NIST SHA3, not Ethereum Keccak-256, and silently breaks selectors, signatures, storage slots, and address deri… | ecc | claude-code | 1 files, 3 KB |
| `python-patterns` | Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications. | ecc | claude-code | 1 files, 17 KB |
| `rust-patterns` | Idiomatic Rust patterns, ownership, error handling, traits, concurrency, and best practices for building safe, performant applications. | ecc | claude-code | 1 files, 14 KB |
| `springboot-patterns` | Spring Boot architecture patterns, REST API design, layered services, data access, caching, async processing, and logging. Use for Java Spring Boot backend work. | ecc | claude-code | 1 files, 10 KB |
| `springboot-verification` | Verification loop for Spring Boot projects: build, static analysis, tests with coverage, security scans, and diff review before release or PR. | ecc | claude-code | 1 files, 6 KB |
| `swift-actor-persistence` | Thread-safe data persistence in Swift using actors — in-memory cache with file-backed storage, eliminating data races by design. | ecc | claude-code | 1 files, 5 KB |
| `swift-concurrency-6-2` | Swift 6.2 Approachable Concurrency — single-threaded by default, @concurrent for explicit background offloading, isolated conformances for main actor types. | ecc | claude-code | 1 files, 8 KB |
| `swiftui-patterns` | SwiftUI architecture patterns, state management with @Observable, view composition, navigation, performance optimization, and modern iOS/macOS UI best practices. | ecc | claude-code | 1 files, 7 KB |
| `transformers-js` | Use Transformers.js to run state-of-the-art machine learning models directly in JavaScript/TypeScript. Supports NLP (text classification, translation, summarization), computer vision (image… | hugging-face | codex | 8 files, 86 KB |
| `typescript-expert` | TypeScript and JavaScript expert with deep knowledge of type-level programming, performance optimization, monorepo management, migration strategies, and modern tooling. Use PROACTIVELY for… | agents-std-store | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae | 5 files, 41 KB |

## Detail

### `build-mcpb`

This skill should be used when the user wants to "package an MCP server", "bundle an MCP", "make an MCPB", "ship a local MCP server", "distribute a local MCP", discusses ".mcpb files", mentions bundling a Node or Python runtime with their MCP server, or needs an MCP server that interacts with the local filesystem, desktop apps, or OS and must be installable without the user having Node/Python set up.

| Field | Value |
|---|---|
| Pack | plugins |
| Origin | marketplace `claude-plugins-official` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/claude-plugins-official/plugins/mcp-server-dev/skills/build-mcpb` |
| Size | 3 files, 18 KB |
| SKILL.md | 200 lines, ~1,967 tokens |
| Description cost | ~101 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-09-04 |
| Category source | keywords |
| Content hash | `96a999bce4af` |
| Bundled | `references` |

### `bun-runtime`

Bun as runtime, package manager, bundler, and test runner. When to choose Bun vs Node, migration notes, and Vercel support.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | agents-std |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/.agents/skills/bun-runtime` |
| Size | 2 files, 3 KB |
| SKILL.md | 84 lines, ~667 tokens |
| Description cost | ~31 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `7222824f47e6` |
| Bundled | `agents` |

### `cpp-coding-standards`

C++ coding standards based on the C++ Core Guidelines (isocpp.github.io). Use when writing, reviewing, or refactoring C++ code to enforce modern, safe, and idiomatic practices.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/cpp-coding-standards` |
| Size | 1 files, 22 KB |
| SKILL.md | 724 lines, ~5,751 tokens |
| Description cost | ~44 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `21f699cd77fa` |

### `dart-flutter-patterns`

Production-ready Dart and Flutter patterns covering null safety, immutable state, async composition, widget architecture, popular state management frameworks (BLoC, Riverpod, Provider), GoRouter navigation, Dio networking, Freezed code generation, and clean architecture.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/dart-flutter-patterns` |
| Size | 1 files, 16 KB |
| SKILL.md | 564 lines, ~4,118 tokens |
| Description cost | ~68 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `b74c2feec333` |

### `django-verification`

Verification loop for Django projects: migrations, linting, tests with coverage, security scans, and deployment readiness checks before release or PR.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/django-verification` |
| Size | 1 files, 12 KB |
| SKILL.md | 470 lines, ~2,987 tokens |
| Description cost | ~38 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `72040d085d72` |

### `java-coding-standards`

Java coding standards for Spring Boot and Quarkus services: naming, immutability, Optional usage, streams, exceptions, generics, CDI, reactive patterns, and project layout. Automatically applies framework-specific conventions.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/java-coding-standards` |
| Size | 1 files, 12 KB |
| SKILL.md | 384 lines, ~2,963 tokens |
| Description cost | ~57 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `7700ef497001` |

### `kotlin-coroutines-flows`

Kotlin Coroutines and Flow patterns for Android and KMP — structured concurrency, Flow operators, StateFlow, error handling, and testing.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/kotlin-coroutines-flows` |
| Size | 1 files, 8 KB |
| SKILL.md | 285 lines, ~2,010 tokens |
| Description cost | ~35 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `10d512771dec` |

### `kotlin-ktor-patterns`

Ktor server patterns including routing DSL, plugins, authentication, Koin DI, kotlinx.serialization, WebSockets, and testApplication testing.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/kotlin-ktor-patterns` |
| Size | 1 files, 20 KB |
| SKILL.md | 690 lines, ~5,031 tokens |
| Description cost | ~36 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `95c3821fcd0d` |

### `kotlin-patterns`

Idiomatic Kotlin patterns, best practices, and conventions for building robust, efficient, and maintainable Kotlin applications with coroutines, null safety, and DSL builders.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/kotlin-patterns` |
| Size | 1 files, 19 KB |
| SKILL.md | 712 lines, ~4,889 tokens |
| Description cost | ~44 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `b564e343170f` |

### `mcp-builder`

Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK).

| Field | Value |
|---|---|
| Pack | skills |
| Origin | marketplace `anthropic-agent-skills` |
| Status | available, not installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/plugins/marketplaces/anthropic-agent-skills/skills/mcp-builder` |
| Size | 10 files, 122 KB |
| SKILL.md | 237 lines, ~2,332 tokens |
| Description cost | ~70 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-06-27 |
| Category source | keywords |
| Content hash | `2f59cc4805c5` |
| Bundled | `reference`, `scripts` |

### `nodejs-keccak256`

Prevent Ethereum hashing bugs in JavaScript and TypeScript. Node's sha3-256 is NIST SHA3, not Ethereum Keccak-256, and silently breaks selectors, signatures, storage slots, and address derivation.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/nodejs-keccak256` |
| Size | 1 files, 3 KB |
| SKILL.md | 103 lines, ~737 tokens |
| Description cost | ~49 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `ef3e1e074abf` |

### `python-patterns`

Pythonic idioms, PEP 8 standards, type hints, and best practices for building robust, efficient, and maintainable Python applications.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/python-patterns` |
| Size | 1 files, 17 KB |
| SKILL.md | 751 lines, ~4,375 tokens |
| Description cost | ~34 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `4320580a60b1` |

### `rust-patterns`

Idiomatic Rust patterns, ownership, error handling, traits, concurrency, and best practices for building safe, performant applications.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/rust-patterns` |
| Size | 1 files, 14 KB |
| SKILL.md | 500 lines, ~3,470 tokens |
| Description cost | ~34 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `5d764279cfa1` |

### `springboot-patterns`

Spring Boot architecture patterns, REST API design, layered services, data access, caching, async processing, and logging. Use for Java Spring Boot backend work.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/springboot-patterns` |
| Size | 1 files, 10 KB |
| SKILL.md | 315 lines, ~2,559 tokens |
| Description cost | ~41 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `1ac68a9e8a30` |

### `springboot-verification`

Verification loop for Spring Boot projects: build, static analysis, tests with coverage, security scans, and diff review before release or PR.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/springboot-verification` |
| Size | 1 files, 6 KB |
| SKILL.md | 232 lines, ~1,513 tokens |
| Description cost | ~36 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `7d190e2eb78d` |

### `swift-actor-persistence`

Thread-safe data persistence in Swift using actors — in-memory cache with file-backed storage, eliminating data races by design.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/swift-actor-persistence` |
| Size | 1 files, 5 KB |
| SKILL.md | 144 lines, ~1,236 tokens |
| Description cost | ~33 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `71771aaafde0` |

### `swift-concurrency-6-2`

Swift 6.2 Approachable Concurrency — single-threaded by default, @concurrent for explicit background offloading, isolated conformances for main actor types.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/swift-concurrency-6-2` |
| Size | 1 files, 8 KB |
| SKILL.md | 217 lines, ~2,057 tokens |
| Description cost | ~40 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `d95d680ac06b` |

### `swiftui-patterns`

SwiftUI architecture patterns, state management with @Observable, view composition, navigation, performance optimization, and modern iOS/macOS UI best practices.

| Field | Value |
|---|---|
| Pack | ecc |
| Origin | standalone |
| Status | installed |
| Tools it reaches | claude-code |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.claude/skills/ecc/swiftui-patterns` |
| Size | 1 files, 7 KB |
| SKILL.md | 260 lines, ~1,800 tokens |
| Description cost | ~41 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-05-17 |
| Category source | keywords |
| Content hash | `a48218ac0719` |

### `transformers-js`

Use Transformers.js to run state-of-the-art machine learning models directly in JavaScript/TypeScript. Supports NLP (text classification, translation, summarization), computer vision (image classification, object detection), audio (speech recognition, audio classification), and multimodal tasks. Works in Node.js and browsers (with WebGPU/WASM) using pre-trained models from Hugging Face Hub.

| Field | Value |
|---|---|
| Pack | hugging-face |
| Origin | plugin `hugging-face` from `openai-curated` |
| Status | installed |
| Tools it reaches | codex |
| Installed copies | 1 (0 symlinked) |
| Canonical path | `~/.codex/plugins/cache/openai-curated/hugging-face/bd2122cb/skills/transformers.js` |
| Size | 8 files, 86 KB |
| SKILL.md | 636 lines, ~5,765 tokens |
| Description cost | ~99 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-07-13 |
| Category source | keywords |
| Content hash | `7664e40a7324` |
| Bundled | `agents`, `references` |

### `typescript-expert`

TypeScript and JavaScript expert with deep knowledge of type-level programming, performance optimization, monorepo management, migration strategies, and modern tooling. Use PROACTIVELY for any TypeScript/JavaScript issues including complex type gymnastics, build performance, debugging, and architectural decisions. If a specialized expert is a better fit, I will recommend switching and stop.

| Field | Value |
|---|---|
| Pack | agents-std-store |
| Origin | standalone |
| Status | installed |
| Tools it reaches | cline, continue, cursor, factory, kilocode, qwen-code, roo-code, shared-store, trae |
| Installed copies | 9 (8 symlinked) |
| Canonical path | `~/.agents/skills/typescript-expert` |
| Size | 5 files, 41 KB |
| SKILL.md | 430 lines, ~3,769 tokens |
| Description cost | ~99 tokens always in context |
| Allowed tools | — |
| Model | — |
| Last modified | 2026-02-10 |
| Category source | keywords |
| Content hash | `a85100f5e5fb` |
| Bundled | `references`, `scripts` |
