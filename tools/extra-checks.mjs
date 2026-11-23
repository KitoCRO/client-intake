// Checks JSON Schema can't express. Pure JS, no deps: shared with the intake Worker
// (copied into it by its scripts/build-validator.mjs). Returns a list of problems.
const norm = (s) => String(s).toLowerCase().replace(/["“”'‘’]/g, "").replace(/[.,!?;:]+/g, " ").replace(/\s+/g, " ").trim();

export function extraChecks(brief) {
  const problems = [];
  const summary = norm(brief?.playback?.summary || "");
  for (const add of brief?.client_additions || []) {
    if (!summary.includes(norm(add))) {
      problems.push(`missing or invalid: the read-back (playback.summary) must quote every client extra, but it doesn't include: "${add}"`);
    }
  }
  // Q5: a client with a current site must say what stays AND what goes (an answer or {"skipped":...}).
  const site = brief?.current_site;
  if (site && site.url && site.url !== "none") {
    for (const part of ["keep", "remove"]) {
      if (site[part] === undefined || site[part] === "") {
        problems.push(`missing or invalid: Q5: what ${part === "keep" ? "has to stay on" : "can go from"} their current site (/current_site/${part}). Ask: "On your current site, what ${part === "keep" ? "has to stay" : "can go"}?"`);
      }
    }
  }
  // references_shortfall is ONLY for fewer than 2 loved sites.
  const loves = (brief?.references || []).filter((r) => r && r.verdict === "love").length;
  if (brief?.references_shortfall !== undefined && loves >= 2) {
    problems.push(`missing or invalid: references_shortfall is only for fewer than 2 loved sites, but this brief has ${loves}. Remove references_shortfall.`);
  }
  return problems;
}
