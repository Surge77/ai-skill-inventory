# Slash commands

[← back](../README.md)

76 user-level commands in `~/.claude/commands/`.

| Command | What it does | Tools |
|---|---|---|
| `/aside` | Answer a quick side question without interrupting or losing context from the current task. Resume work automatically after answering. | — |
| `/auto-update` | Pull the latest ECC repo changes and reinstall the current managed targets. | — |
| `/build-fix` | Detect the project build system and incrementally fix build/type errors with minimal safe changes. | — |
| `/checkpoint` | Create, verify, or list workflow checkpoints after running verification checks. | — |
| `/code-review` | Code review — local uncommitted changes or GitHub PR (pass PR number/URL for PR mode) | — |
| `/cost-report` | Generate a local Claude Code cost report from a cost-tracker SQLite database. | — |
| `/cpp-build` | Fix C++ build errors, CMake issues, and linker problems incrementally. Invokes the cpp-build-resolver agent for minimal, surgical fixes. | — |
| `/cpp-review` | Comprehensive C++ code review for memory safety, modern C++ idioms, concurrency, and security. Invokes the cpp-reviewer agent. | — |
| `/cpp-test` | Enforce TDD workflow for C++. Write GoogleTest tests first, then implement. Verify coverage with gcov/lcov. | — |
| `/ecc-guide` | Navigate ECC's current agents, skills, commands, hooks, install profiles, and docs from the live repository surface. | — |
| `/evolve` | Analyze instincts and suggest or generate evolved structures | — |
| `/fastapi-review` | Review a FastAPI application for architecture, async correctness, dependency injection, Pydantic schemas, security, performance, and testability. | — |
| `/feature-dev` | Guided feature development with codebase understanding and architecture focus | — |
| `/flutter-build` | Fix Dart analyzer errors and Flutter build failures incrementally. Invokes the dart-build-resolver agent for minimal, surgical fixes. | — |
| `/flutter-review` | Review Flutter/Dart code for idiomatic patterns, widget best practices, state management, performance, accessibility, and security. Invokes the flutter-reviewer agent. | — |
| `/flutter-test` | Run Flutter/Dart tests, report failures, and incrementally fix test issues. Covers unit, widget, golden, and integration tests. | — |
| `/gan-build` | Run a generator/evaluator build loop for implementation tasks with bounded iterations and scoring. | — |
| `/gan-design` | Run a generator/evaluator design loop for frontend or visual work with bounded iterations and scoring. | — |
| `/go-build` | Fix Go build errors, go vet warnings, and linter issues incrementally. Invokes the go-build-resolver agent for minimal, surgical fixes. | — |
| `/go-review` | Comprehensive Go code review for idiomatic patterns, concurrency safety, error handling, and security. Invokes the go-reviewer agent. | — |
| `/go-test` | Enforce TDD workflow for Go. Write table-driven tests first, then implement. Verify 80%+ coverage with go test -cover. | — |
| `/gradle-build` | Fix Gradle build errors for Android and KMP projects | — |
| `/harness-audit` | Run a deterministic repository harness audit and return a prioritized scorecard. | — |
| `/hookify` | Create hooks to prevent unwanted behaviors from conversation analysis or explicit instructions | — |
| `/hookify-configure` | Enable or disable hookify rules interactively | — |
| `/hookify-help` | Get help with the hookify system | — |
| `/hookify-list` | List all configured hookify rules | — |
| `/instinct-export` | Export instincts from project/global scope to a file | — |
| `/instinct-import` | Import instincts from file or URL into project/global scope | — |
| `/instinct-status` | Show learned instincts (project + global) with confidence | — |
| `/jira` | Retrieve a Jira ticket, analyze requirements, update status, or add comments. Uses the jira-integration skill and MCP or REST API. | — |
| `/kotlin-build` | Fix Kotlin/Gradle build errors, compiler warnings, and dependency issues incrementally. Invokes the kotlin-build-resolver agent for minimal, surgical fixes. | — |
| `/kotlin-review` | Comprehensive Kotlin code review for idiomatic patterns, null safety, coroutine safety, and security. Invokes the kotlin-reviewer agent. | — |
| `/kotlin-test` | Enforce TDD workflow for Kotlin. Write Kotest tests first, then implement. Verify 80%+ coverage with Kover. | — |
| `/learn` | Extract reusable patterns from the current session and save them as candidate skills or guidance. | — |
| `/learn-eval` | Extract reusable patterns from the session, self-evaluate quality before saving, and determine the right save location (Global vs Project). | — |
| `/loop-start` | Start a managed autonomous loop pattern with safety defaults and explicit stop conditions. | — |
| `/loop-status` | Inspect active loop state, progress, failure signals, and recommended intervention. | — |
| `/model-route` | Recommend the best model tier for the current task based on complexity, risk, and budget. | — |
| `/multi-backend` | Run a backend-focused multi-model workflow for APIs, algorithms, data, and business logic. | — |
| `/multi-execute` | Execute a multi-model implementation plan while preserving Claude as the only filesystem writer. | — |
| `/multi-frontend` | Run a frontend-focused multi-model workflow for components, layouts, animation, and UI polish. | — |
| `/multi-plan` | Create a multi-model implementation plan without modifying production code. | — |
| `/multi-workflow` | Run a full multi-model development workflow with research, planning, execution, optimization, and review. | — |
| `/plan` | Restate requirements, assess risks, and create step-by-step implementation plan. WAIT for user CONFIRM before touching any code. | — |
| `/plan-prd` | Generate a lean, problem-first PRD and hand off to /plan for implementation planning. | — |
| `/pm2` | Analyze a project and generate PM2 service commands for detected frontend, backend, or database services. | — |
| `/pr` | Create a GitHub PR from current branch with unpushed commits — discovers templates, analyzes changes, pushes | — |
| `/project-init` | Detect a project's stack and produce a dry-run ECC onboarding plan using the repository's install manifests and stack mappings. | — |
| `/projects` | List known projects and their instinct statistics | — |
| `/promote` | Promote project-scoped instincts to global scope | — |
| `/prompt-optimize` | Legacy slash-entry shim for the prompt-optimizer skill. Prefer the skill directly. | — |
| `/prp-commit` | Quick commit with natural language file targeting — describe what to commit in plain English | — |
| `/prp-implement` | Execute an implementation plan with rigorous validation loops | — |
| `/prp-plan` | Create comprehensive feature implementation plan with codebase analysis and pattern extraction | — |
| `/prp-pr` | Create a GitHub PR from current branch with unpushed commits — discovers templates, analyzes changes, pushes | — |
| `/prp-prd` | Interactive PRD generator - problem-first, hypothesis-driven product spec with back-and-forth questioning | — |
| `/prune` | Delete pending instincts older than 30 days that were never promoted | — |
| `/python-review` | Comprehensive Python code review for PEP 8 compliance, type hints, security, and Pythonic idioms. Invokes the python-reviewer agent. | — |
| `/quality-gate` | Run the ECC quality pipeline for a file or project scope and report remediation steps. | — |
| `/refactor-clean` | Safely identify and remove dead code with verification after each change. | — |
| `/resume-session` | Load the most recent session file from ~/.claude/session-data/ and resume work with full context from where the last session ended. | — |
| `/review-pr` | Comprehensive PR review using specialized agents | — |
| `/rust-build` | Fix Rust build errors, borrow checker issues, and dependency problems incrementally. Invokes the rust-build-resolver agent for minimal, surgical fixes. | — |
| `/rust-review` | Comprehensive Rust code review for ownership, lifetimes, error handling, unsafe usage, and idiomatic patterns. Invokes the rust-reviewer agent. | — |
| `/rust-test` | Enforce TDD workflow for Rust. Write tests first, then implement. Verify 80%+ coverage with cargo-llvm-cov. | — |
| `/santa-loop` | Adversarial dual-review convergence loop — two independent model reviewers must both approve before code ships. | — |
| `/save-session` | Save current session state to a dated file in ~/.claude/session-data/ so work can be resumed in a future session with full context. | — |
| `/security-scan` | Run AgentShield against agent, hook, MCP, permission, and secret surfaces. | — |
| `/sessions` | Manage Claude Code session history, aliases, and session metadata. | — |
| `/setup-pm` | Configure your preferred package manager (npm/pnpm/yarn/bun) | — |
| `/skill-create` | Analyze local git history to extract coding patterns and generate SKILL.md files. Local version of the Skill Creator GitHub App. | — |
| `/skill-health` | Show skill portfolio health dashboard with charts and analytics | — |
| `/test-coverage` | Analyze coverage, identify gaps, and generate missing tests toward the target threshold. | — |
| `/update-codemaps` | Scan project structure and generate token-lean architecture codemaps. | — |
| `/update-docs` | Sync documentation from source-of-truth files such as scripts, schemas, routes, and exports. | — |
