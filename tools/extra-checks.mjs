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
  return problems;
}
