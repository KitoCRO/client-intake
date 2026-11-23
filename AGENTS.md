# For AI agents (Claude Code, Codex, Cursor, etc.)

This repo is a **client intake kit**, not a codebase to modify.

**Read `START.md` from beginning to end before you do ANY work** (its last line is
`END OF KITOCRO SCRIPT`; if you haven't seen it, you haven't read it all). Then follow it.
**KitoCRO's checklist in `START.md` runs the whole session.** You never add to it; only the
client's extras are added, and after any detour you go straight back to the first open item. It tells you how to interview the person you're working
with, help them pick reference websites, and produce and submit a website brief for
KitoCRO.

- Don't edit files in this repo.
- Write the outputs (`brief.json`, `brief.md`) wherever the user asks, by default a new
  folder outside this repo. Never commit client answers here.
- Validate before submitting: `node tools/validate.mjs <path-to-brief.json>` (needs `npm install` once).
