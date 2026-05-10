# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

This is the **AI Scrum Team** project for a pilot program (2026 Q2) at a financial institution (國泰世華銀行). It contains:

- `index.html` — An interactive planning dashboard (standalone SPA, no build step) for the 6-month AI Scrum Team roadmap covering milestones, April/May activity plans, training curriculum, and RACI matrix.
- `aimember.md` — The proposal document for **O大 🦀**, an AI team member bot (9th virtual member) that automates Scrum ceremonies, IDA Pulse tracking, and Claude usage reporting via LINE, GitHub Board, Notion, and Firebase.

## Development

`index.html` is a zero-dependency static file. Open it directly in a browser — no server, build tool, or package manager required.

```bash
# macOS
open index.html

# Linux
xdg-open index.html
```

For live-reload during development:
```bash
python3 -m http.server 8080
# then navigate to http://localhost:8080
```

## Architecture of index.html

The file is a self-contained SPA using vanilla JS and CSS custom properties:

**Data layer** (bottom `<script>` block): All content is defined as JS arrays (`raciData`, `msFlow`) and rendered into the DOM on init via `renderRaci()` and `renderFlow()`.

**Tab navigation**: `switchTab(id)` shows/hides `<section id="sec-{id}">` elements and resets CSS animations by forcing a reflow (`offsetHeight`).

**Design system**: All colours and spacings are CSS custom properties on `:root` (e.g. `--accent: #00704a`, `--shadow`, `--radius`). New UI elements must use these variables, not hardcoded values.

**Fonts**: Three Google Fonts families are loaded — `Noto Sans TC` (body), `DM Serif Display` (headings), `Space Mono` (monospace/data). Match their usage patterns when adding new elements.

**Animation**: Cards use `opacity:0` + `animation: slideIn/fadeUp` with `.stagger-N` delay classes. New card lists should follow the same pattern.

**Interactive components**:
- `toggleCard(header)` — accordion expand/collapse on `.activity-card`
- `toggleCheck(item, id)` / `updateProgress(id)` — checklist state with a live progress bar (state is in-memory only, not persisted)

## O大 Bot Architecture (aimember.md)

The planned integration stack for the AI member:

| Layer | Tool |
|-------|------|
| Scheduling / orchestration | n8n or Make.com |
| Messaging / push | LINE Messaging API (Bot with @mention) |
| Task board | GitHub Board API (read issues, burndown) |
| Daily fill tracking | Firebase REST API (IDA Pulse) |
| Knowledge / archive | Notion API (member roster, leave table, weekly reports, Retro records) |
| AI summarisation | Claude API (news digest, Retro synthesis) |
| Usage tracking | Anthropic Usage API (Phase 2) |

**Member roster** in Notion is the single source of truth for mapping LINE UserIDs ↔ GitHub accounts ↔ display names. All @mention and board-lookup logic depends on this table being accurate.

**Scheduled jobs** (key ones):
- Daily 08:50 morning roll-call; 17:00–18:00 end-of-day SOP + IDA Pulse checks
- Monday 09:00 Sprint opening pack; 09:30 AI news digest
- Thursday 23:00 Claude usage weekly report (window: last Friday 00:00 → this Thursday 23:59)

## Key Conventions

- All primary content text is in **Traditional Chinese** (zh-TW). New content should follow the same language.
- The dashboard is read-only; checklist state is ephemeral (no localStorage, no backend).
- `aimember.md` is confidential internal documentation — do not publish or expose its contents externally.
- When adding new milestone months to the timeline grid, add the corresponding entry to both the `msFlow` array and the `.timeline` HTML block to keep them in sync.
