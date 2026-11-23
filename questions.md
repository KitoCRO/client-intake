# The 8 questions

Ask in this order, one at a time. 🔴 = **never-drop**: an answer, or an explicit
skip with a reason, is required before you can finish.

Each question lists the brief fields it fills (see `brief.schema.json`).

---

### 1. 🔴 Your business and your customer
> **What does your business do, and who is your ideal customer? What do they need to
> see before they contact you?**

Fills: `business.what`, `business.customer`, `business.customer_needs_to_see`
- If they only describe themselves, ask: *"And who's the customer you most want to reach?"*
- Allowed follow-up (only if it fits): *"How do people find you today?"* → `business.how_found`

### 2. Why now
> **Why are you changing your website now? What bugs you about the current one?**

Fills: `why_now.reason`, `why_now.whats_wrong`
- The first answer is often a feeling ("it's ugly"). Ask once: *"What's the real cost of
  that? Who sees it and what do they think?"* The second answer is usually the real one.
- No current site? Ask why now, and set `whats_wrong` to `"no current site"`.
- Allowed follow-up: *"Fill in the blanks: we want ___ because ___ so that ___."* → `why_now.want_because_so_that`

### 3. The site's one job
> **When someone lands on your site, what's the ONE thing you want them to do, and what
> should they believe about you when they leave?**

Fills: `goal.one_action`, `goal.believe`
- If they name several actions, ask which ONE matters most.
- For the belief, offer: *"One word is fine, like 'credible', 'friendly' or 'premium'."*

### 4. Websites you love (and one you don't)
> **Are there any websites you've seen and liked, from any kind of business, or any
> you've disliked? Why?** Then I'll show you 2 more that I think you might like and get
> your reaction. (See `browse-guide.md`. Use the browser if you can control one.)

Fills: `references[]`. **Run this with `browse-guide.md`.**
- 🔴 **Every site needs a "why".** If they say "I just like it", ask what exactly: the
  colours, the layout, the photos, the feel, how simple it is.

### 5. 🔴 What you already have
> **What's ready to use: logo, brand colours, fonts, photos, video, written copy? And on
> your current site, what has to stay and what can go?**

Fills: `assets.*`, `current_site.url`, `current_site.keep`, `current_site.remove`
- Go through each asset: logo / colours / fonts / photos / video / copy → `ready`, `partial`, `need` or `not sure`.
- Get the current site's URL if one exists.

### 6. 🔴 Scope
> **Do you want one strong page, or separate pages, like services, team, portfolio,
> pricing or news? And does it need to DO anything, like booking, forms, a blog or
> payments?**

Fills: `scope.shape`, `scope.pages[]`, `scope.features[]`
- If they're unsure, offer: *"Most businesses start with one page or about three. Which
  feels closer?"*
- For features, also ask which tools they already use (a booking app, an email list) → `scope.existing_tools`

### 7. After launch, and timing
> **Who will update the site after it launches, and is there a date it needs to be live
> by?**

Fills: `after_launch.who_updates`, `after_launch.how_often`, `timing.deadline`, `timing.why_that_date`
- Allowed follow-ups, only if relevant:
  - *"Do you care what platform it's built on?"* → `after_launch.platform_preference`
  - *"Do you use AI tools like this one day to day?"* → `after_launch.uses_ai`
  - *"If we ever have to choose between complicated and simple, which should we lean toward?"* → `after_launch.complicated_or_simple`

### 8. 🔴 Decision and budget
> **Are you the only person who decides on this, or does someone else weigh in? And do
> you have a budget range in mind?**

Fills: `decision.decision_makers`, `decision.budget`
- Budget: any of a number, a range, or "not sure" is fine. Never react to the number and
  never suggest one. If they're unsure, say: *"No problem. KitoCRO will walk you through
  their packages."*
- Allowed follow-up: *"Have you had a website built before? What did it cost and how did
  it go?"* → `decision.past_site`

---

## Never-drop check (do this before the playback)
Each must have an answer or `"skipped": true` with a reason:
- [ ] Q1 customer (`business.customer`)
- [ ] Q5 assets (every asset has a status)
- [ ] Q6 scope (`scope.shape`)
- [ ] Q8 decision-makers **and** budget
- [ ] Q4: their own sites (or none) + reactions to 2 suggested sites, each with a why; ≥2 loves or a `references_shortfall`
