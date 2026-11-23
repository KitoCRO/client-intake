# For AI agents (Claude Code, Codex, Cursor, etc.)

This repo is a **client intake kit**, not a codebase to modify.

**Read and follow `START.md`.** It tells you how to interview the person you're working
with, help them pick reference websites, and produce and submit a website brief for
KitoCRO.

- Don't edit files in this repo.
- Write the outputs (`brief.json`, `brief.md`) wherever the user asks, by default a new
  folder outside this repo. Never commit client answers here.
- Validate before submitting: `node tools/validate.mjs <path-to-brief.json>` (needs `npm install` once).
