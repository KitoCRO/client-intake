// The example must pass; the incomplete one must fail FOR THE RIGHT REASONS (scope, references, budget is a valid skip).
import { readFileSync } from "node:fs";
import { validate } from "./validate.mjs";
const load = (p) => JSON.parse(readFileSync(new URL(`../examples/${p}`, import.meta.url), "utf8"));
let fail = 0;
const check = (name, cond) => { console.log(`${cond ? "PASS" : "FAIL"} ${name}`); if (!cond) fail++; };

const good = validate(load("brief.example.json"));
check("example brief is valid", good.ok);

const bad = validate(load("brief.incomplete.json"));
check("incomplete brief is invalid", !bad.ok);
check("names the missing scope (Q6)", bad.problems.some((p) => p.includes("Q6")));
check("names the missing 2 loved websites (Q4)", bad.problems.some((p) => p.includes("Q4")));
check("an explicit budget skip is accepted (not reported)", !bad.problems.some((p) => p.includes("budget")));

const noConfirm = load("brief.example.json"); noConfirm.playback.confirmed = false;
check("unconfirmed playback is rejected", validate(noConfirm).problems.some((p) => p.includes("playback")));
const noWhy = load("brief.example.json"); delete noWhy.references[0].why;
check("a reference without a why is rejected", !validate(noWhy).ok);
const noCustomer = load("brief.example.json"); delete noCustomer.business.customer;
check("missing customer (Q1) is rejected", validate(noCustomer).problems.some((p) => p.includes("Q1")));

const short = load("brief.incomplete.json"); short.scope.shape = "one-page"; short.suggestions_skipped = "Client ran out of time."; short.references_shortfall = "Couldn't think of any sites; likes the feel of their local bank branch.";
check("fewer than 2 loves is OK WITH a shortfall note", validate(short).ok);
const nameOnly = load("brief.example.json");
check("a reference by name only (no URL) is accepted", nameOnly.references.some((r) => !r.url && r.name) && validate(nameOnly).ok);
const noRefId = load("brief.example.json"); delete noRefId.references[0].url;
check("a reference with neither url nor name is rejected", !validate(noRefId).ok);
const wantedNoFb = load("brief.example.json"); delete wantedNoFb.kitocro_examples.feedback;
check("KitoCRO examples wanted but no feedback is rejected", validate(wantedNoFb).problems.some((p) => p.includes("KitoCRO-sites")));
const declined = load("brief.example.json"); declined.kitocro_examples = { wanted: false };
check("declining the KitoCRO examples is accepted", validate(declined).ok);

const noSugg = load("brief.example.json"); noSugg.references = noSugg.references.filter((r) => r.source === "client");
check("missing the 2 suggested sites is rejected (names it)", validate(noSugg).problems.some((p) => p.includes("suggested")));
noSugg.suggestions_skipped = "Out of time";
check("suggestions skipped WITH a reason is accepted", validate(noSugg).ok);
const meh = load("brief.example.json");
check("a 'meh' verdict on a suggested site is accepted", meh.references.some((r) => r.verdict === "meh") && validate(meh).ok);
const noSource = load("brief.example.json"); delete noSource.references[0].source;
check("a reference without a source is rejected", !validate(noSource).ok);

const stub = load("brief.example.json"); stub.playback.summary = "Maya confirmed the website intake summary.";
check("a placeholder playback summary (<200 chars) is rejected", !validate(stub).ok);

const bare = load("brief.example.json"); bare.current_site.url = "lakesidefamilydental.example.com"; bare.references[0].url = "mckinsey.com";
check("bare web addresses (no https://) are accepted", validate(bare).ok);
const junk = load("brief.example.json"); junk.current_site.url = "my old site";
check("a non-address current site is rejected", !validate(junk).ok);

const extras = load("brief.example.json"); extras.client_additions = ["We also want it in Spanish."]; extras.playback.summary += ' Added: "We also want it in Spanish."';
check("client_additions (client extras) are accepted", validate(extras).ok);
const emptyExtras = load("brief.example.json"); emptyExtras.client_additions = [];
check("an empty client_additions list is rejected (leave it out instead)", !validate(emptyExtras).ok);

const noAdded = load("brief.example.json"); noAdded.client_additions = ["We also want it in Spanish."];
check("a client extra missing from the read-back is rejected", !validate(noAdded).ok);
const withAdded = load("brief.example.json"); withAdded.client_additions = ["We also want it in Spanish."]; withAdded.playback.summary += ' Added: "we also want it in Spanish"';
check("a client extra quoted in the read-back passes", validate(withAdded).ok);

process.exit(fail ? 1 : 0);
