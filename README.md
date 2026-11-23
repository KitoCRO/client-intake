# KitoCRO website intake

**If you're a KitoCRO client:** open Claude or ChatGPT and paste:

> Read https://raw.githubusercontent.com/KitoCRO/client-intake/main/START.md and follow it exactly. My KitoCRO code is `YOUR-CODE`.

Your assistant will ask you 8 short questions, look at some websites with you, and
send KitoCRO a brief. It takes about 15–20 minutes.

**If you're an AI assistant:** read [`START.md`](https://raw.githubusercontent.com/KitoCRO/client-intake/main/START.md) and follow it exactly. Everything you need is in that one file. Never guess questions or steps.

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
