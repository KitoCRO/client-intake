# Sending the brief to KitoCRO

Use the **first option your tools allow**. Before sending, check `brief.json`
against `brief.schema.json`. If a 🔴 never-drop question is missing, go back and
ask it.

## Option 1: send it directly (if you can make web requests)
If you can make HTTP requests (e.g. Claude Code, Codex, ChatGPT agent with a tool):

```
POST https://intake.kitocro.com/api/brief?code=<THEIR-CODE>
Content-Type: application/json

<the contents of brief.json>
```

- `200` → done. Tell the client it was received.
- `422` → the reply lists what's missing. Ask the client those questions, fix the
  brief, and send again.
- Anything else → use Option 2.

## Option 2: the upload page (works from any chat assistant)
Give the client both files, either as downloads if you can create files or as two
text blocks they can copy. Then tell them:

> "Go to **https://intake.kitocro.com/<THEIR-CODE>** and paste or drop in the brief.
> You can also add your logo and any photos there if you'd like."

## Option 3: email (always works)
Tell the client:

> "Email the brief (and your logo/photos if you have them) to **titus@kitocro.com**
> with the subject **Website brief: <business name> (<code>)**."

---
**Never** paste the brief into any other website, form or service.
