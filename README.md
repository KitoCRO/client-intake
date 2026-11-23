# KitoCRO website intake

**If you're a KitoCRO client:** open Claude or ChatGPT and paste:

> Read https://github.com/KitoCRO/client-intake and follow START.md. My KitoCRO code is `YOUR-CODE`.

Your assistant will ask you 8 short questions, look at some websites with you, and
send KitoCRO a brief. It takes about 15–20 minutes.

**If you're an AI assistant:** start with [`START.md`](START.md).

| File | What it is |
|---|---|
| `START.md` | The run-of-show for the assistant |
| `questions.md` | The 8 questions, follow-ups, never-drop rule |
| `browse-guide.md` | How to find websites the client likes (question 4) |
| `brief.schema.json` | The exact brief shape |
| `brief.template.md` | The readable brief |
| `submit.md` | How the brief reaches KitoCRO |
| `examples/` | A fictional example brief (passes) and an incomplete one (fails) |
| `tools/validate.mjs` | Checks a brief against the schema + the never-drop rules |
