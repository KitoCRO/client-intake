#!/usr/bin/env node
// Validate a brief: the JSON schema (shape + never-drop fields) and plain-English errors.
// Exit 0 = valid · 1 = invalid (problems listed) · 2 = couldn't run (bad path / not JSON).
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const NAMES = {
  "/business/customer": "Q1: who the ideal customer is",
  "/scope/shape": "Q6: one page or separate pages",
  "/decision/decision_makers": "Q8: who decides",
  "/decision/budget": "Q8: budget",
  "/references": "Q4: at least 2 websites the client loves, each with a why",
  "/suggestions_skipped": "Q4: reactions to the 2 suggested sites (or suggestions_skipped saying why not)",
  "/references_shortfall": "Q4: at least 2 loved websites (or references_shortfall saying why not)",
  "/kitocro_examples": "the optional KitoCRO-sites step (feedback needed when wanted is true)",
  "/assets": "Q5: what's ready (logo, colours, fonts, photos, video, copy)",
  "/client_additions": "the extras the client added (their words; leave it out if none)",
  "/playback/confirmed": "the client confirming the playback summary",
};

export function validate(brief) {
  const schema = JSON.parse(readFileSync(fileURLToPath(new URL("../brief.schema.json", import.meta.url)), "utf8"));
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  addFormats(ajv);
  const ok = ajv.validate(schema, brief);
  if (ok) return { ok: true, problems: [] };
  const problems = [...new Set(ajv.errors.filter((e) => !(((e.keyword === "anyOf" || e.keyword === "allOf") && e.instancePath === "") || (e.keyword === "const" && /^\/references\/\d+\//.test(e.instancePath)))).map((e) => {
    const path = e.instancePath + (e.keyword === "required" ? `/${e.params.missingProperty}` : "");
    const hit = Object.keys(NAMES).find((k) => path === k || path.startsWith(k + "/"));
    return hit ? `missing or invalid: ${NAMES[hit]} (${path})` : `${path || "(root)"} ${e.message}`;
  }))];
  return { ok: false, problems };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const file = process.argv[2];
  if (!file) { console.error("usage: node tools/validate.mjs <brief.json>"); process.exit(2); }
  let brief;
  try { brief = JSON.parse(readFileSync(file, "utf8")); } catch (e) { console.error(`cannot read ${file}: ${e.message}`); process.exit(2); }
  const { ok, problems } = validate(brief);
  if (ok) { console.log(`VALID: ${file}`); process.exit(0); }
  console.log(`INVALID: ${file}`); for (const p of problems) console.log(`  - ${p}`); process.exit(1);
}
