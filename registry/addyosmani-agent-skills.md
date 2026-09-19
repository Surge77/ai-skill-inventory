# addyosmani/agent-skills

[← back to the registry](README.md) · [← back to the atlas](../README.md)

Production-grade engineering skills for AI coding agents.

| | |
|---|---|
| Repo | https://github.com/addyosmani/agent-skills |
| Skills published | 25 |
| Installed here | 25 |
| Stars / forks | 96,637 / 10,209 |
| License | MIT |
| Last push | 2026-09-18 |
| Scanned at commit | `c004a74784a0` |
| Status | **Fully installed** |
| Starred | 2026-09-19 |

> installed 2026-09-19 — full-SDLC pack, 25 skills, all auto-invocable

**Installing every skill here would add ~2,163 tokens** to every system prompt, before one of them fires. See [../reports/context-cost.md](../reports/context-cost.md) for what the installed library already costs.

## Skills

✅ installed here · ⚠️ a different skill already holds this name · — not on this disk

| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
| `api-and-interface-design` | ✅ | auto | 15 KB | 63 | Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoi… |
| `browser-testing-with-devtools` | ✅ | auto | 14 KB | 82 | Tests in real browsers via Chrome DevTools MCP. Use when building or debugging anything that runs in a browser. Use when you need to inspect the DOM,… |
| `ci-cd-and-automation` | ✅ | auto | 11 KB | 52 | Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configu… |
| `code-review-and-quality` | ✅ | auto | 20 KB | 60 | Conducts multi-axis code review. Use before merging any change. Use when reviewing code written by yourself, another agent, or a human. Use when you… |
| `code-simplification` | ✅ | auto | 13 KB | 61 | Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or… |
| `constraint-driven-development` | ✅ | auto | 21 KB | 222 | Establishes a project's quality bar as a written contract and stops agents quietly lowering it. Interviews the user on which dimensions matter, suppl… |
| `context-engineering` | ✅ | auto | 15 KB | 50 | Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to… |
| `debugging-and-error-recovery` | ✅ | auto | 11 KB | 82 | Guides systematic root-cause debugging. Use when tests fail, builds break, something that worked yesterday broke, behavior doesn't match expectations… |
| `deprecation-and-migration` | ✅ | auto | 12 KB | 84 | Manages deprecation and migration. Use when removing old systems, APIs, or features. Use when migrating users from one implementation to another. Use… |
| `documentation-and-adrs` | ✅ | auto | 10 KB | 73 | Records decisions and documentation. Use when you need to document an architecture decision (ADR) or the reasoning behind a design choice, when chang… |
| `doubt-driven-development` | ✅ | auto | 16 KB | 122 | Subjects every non-trivial decision to a fresh-context adversarial review before it stands. Use when you want every assumption cross-examined before… |
| `frontend-ui-engineering` | ✅ | auto | 10 KB | 77 | Builds production-quality, accessible, responsive user-facing UIs. Use when building or modifying interfaces and pages, creating components, implemen… |
| `git-workflow-and-versioning` | ✅ | auto | 14 KB | 106 | Structures git workflow practices. Use when making any code change. Use when committing, branching, resolving conflicts, splitting uncommitted work i… |
| `idea-refine` | ✅ | auto | 39 KB | 84 | Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking. Use when an idea is still vague, when you nee… |
| `incremental-implementation` | ✅ | auto | 9 KB | 86 | Delivers changes incrementally in thin, verifiable slices. Use when implementing any feature or change that touches more than one file, or when picki… |
| `interview-me` | ✅ | auto | 14 KB | 122 | Extracts what the user actually wants instead of what they think they should want. Achieves this through one-question-at-a-time interview until ~95%… |
| `observability-and-instrumentation` | ✅ | auto | 14 KB | 77 | Instruments code so production behavior is visible and diagnosable. Use when adding logging, metrics, tracing, or alerting. Use when shipping any fea… |
| `performance-optimization` | ✅ | auto | 21 KB | 74 | Optimizes application performance across frontend, backend, queries, and databases. Use when performance requirements exist, when you suspect perform… |
| `planning-and-task-breakdown` | ✅ | auto | 10 KB | 60 | Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels… |
| `security-and-hardening` | ✅ | auto | 27 KB | 146 | Hardens code against vulnerabilities. Use when auditing an input handler for vulnerabilities, when handling user input, authentication, data storage,… |
| `shipping-and-launch` | ✅ | auto | 11 KB | 68 | Prepares production launches. Use when preparing to deploy to production, or when asking what needs to be in place before shipping. Use when you need… |
| `source-driven-development` | ✅ | auto | 10 KB | 77 | Grounds every implementation decision in official documentation. Use when you want to verify an approach against the official docs before implementin… |
| `spec-driven-development` | ✅ | auto | 12 KB | 108 | Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when drafting a PRD… |
| `test-driven-development` | ✅ | auto | 16 KB | 67 | Drives development with tests using the red-green-refactor loop. Use when implementing any logic, fixing any bug, or changing any behavior. Use when… |
| `using-agent-skills` | ✅ | auto | 10 KB | 60 | Discovers and invokes agent skills. Use when starting a session, or when you need to decide which skill or workflow applies to the piece of work at h… |

## Installing one of these

```bash
git clone --depth 1 https://github.com/addyosmani/agent-skills.git /tmp/addyosmani-agent-skills
cp -r /tmp/addyosmani-agent-skills/<path-from-the-table-above> ~/.claude/skills/
```

Copy the whole skill directory, not just `SKILL.md` — the `Size` column counts sibling files, and a skill whose siblings are missing has dangling links. The upstream `npx skills@latest add addyosmani/agent-skills` installs the entire repo through a shared store; see [../reports/health.md](../reports/health.md) for why that store is avoided here.
