# SpectraSoundLab - Para OpenCode, Cursor, Windsurf

Source of truth: /docs/
Stack: Next.js 14 + Firebase - see /docs/01-STACK.md
Architecture: Capture -> Interpret (Gemini) -> Generate (Stable Audio) - see /docs/02-ARCHITECTURE.md
Types: /lib/types.ts - never change shape without updating /docs/03-DATA-MODEL.md
Roadmap: /docs/07-ROADMAP.md - follow linearly

Rules:
- Do not refactor working files with green build
- Only edit files allowed in current step
- Update roadmap checkbox when done
- Run npm run build after each step
