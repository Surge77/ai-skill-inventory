# ConardLi/garden-skills

[← back to the registry](README.md) · [← back to the atlas](../README.md)

ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more.

| | |
|---|---|
| Repo | https://github.com/ConardLi/garden-skills |
| Skills published | 5 |
| Installed here | 0 |
| Stars / forks | 12,227 / 1,478 |
| License | MIT |
| Last push | 2026-07-12 |
| Scanned at commit | `aaf9a82f5efd` |
| Status | **Not installed** |
| Starred | 2026-09-07 |

> evaluated, not installed — overlaps the existing design pile

**Installing every skill here would add ~826 tokens** to every system prompt, before one of them fires. See [../reports/context-cost.md](../reports/context-cost.md) for what the installed library already costs.

## Skills

✅ installed here · ⚠️ a different skill already holds this name · — not on this disk

| Skill | On disk | Trigger | Size | Desc tokens | Description |
|---|:---:|:---:|---:|---:|---|
| `beautiful-article` | — | auto | 80 KB | 201 | 把用户提供的素材（网页 URL / PDF / DOCX / Markdown / 纯文本 / 截图 / 粘贴材料）编辑、设计成一篇美丽的、可离线打开和分享的**单文件 HTML 网页文章**。基于 reacticle 组件协议：不手写裸 HTML/CSS，而用语义组件 + 受主题约束的 Raw… |
| `gpt-image-2` | — | auto | 65 KB | 146 | 面向 GPT Image 2 的图像生成 / 编辑技能。可在 3 种环境下使用：(A) Garden 本地模式，通过 OpenAI 兼容接口直接出图并落盘；(B) Host-Native 模式，把本 Skill 当作提示词工程指引，把渲染好的 prompt 交给宿主 Agent 自带的图像工具出图… |
| `kb-retriever` | — | auto | 29 KB | 96 | 面向本地知识库目录的检索和问答助手。核心流程：(1)分层索引导航 (2)遇到PDF/Excel时必须先读取references学习处理方法 (3)处理文件后再检索。按文件类型组合使用 grep、Read、pdfplumber、pandas 进行渐进式检索，避免整文件加载。用户问题涉及"从知识库目录… |
| `web-design-engineer` | — | auto | 91 KB | 114 | Build or redesign polished browser-rendered visual artifacts with HTML/CSS/JavaScript/React: pages, dashboards, prototypes, slide decks, animations,… |
| `web-video-presentation` | — | auto | 59 KB | 269 | 把一篇文章或口播稿，做成"看起来像视频"的点击驱动 16:9 网页演示，可选合成口播音频。流程：原始文章 → **一次产出**口播稿 + outline 开发计划 → 用户**一次对齐** 5 件事（稿子 / outline / 主题 / 素材 / 开发模式）→ 网页开发（逐章 / 顺序 / 并行… |

## Installing one of these

```bash
git clone --depth 1 https://github.com/ConardLi/garden-skills.git /tmp/conardli-garden-skills
cp -r /tmp/conardli-garden-skills/<path-from-the-table-above> ~/.claude/skills/
```

Copy the whole skill directory, not just `SKILL.md` — the `Size` column counts sibling files, and a skill whose siblings are missing has dangling links. The upstream `npx skills@latest add ConardLi/garden-skills` installs the entire repo through a shared store; see [../reports/health.md](../reports/health.md) for why that store is avoided here.
