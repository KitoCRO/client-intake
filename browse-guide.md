# Question 4: finding websites the client likes

**Goal:** the client's own favourites (if any) plus their reaction to **2 sites you
suggest**, each with a clear **why**. This is how KitoCRO learns their taste. Without the why, the list is
useless. People often love a site for one detail and dislike the rest.

## First: can you control a browser?
Check whether you can **open and drive a web browser** (e.g. Claude in Chrome, ChatGPT
agent, computer use). It changes how you SHOW sites, never what you ask.

## Step 1: their own sites first
Ask: *"Are there any websites you've seen and liked, for any kind of business? Which
ones? And any you've disliked?"*
- **With a browser:** open each site they name and look at it together. Scroll it for
  them and ask what jumps out.
- **Without a browser:** just ask and listen. **Don't hand them a list of sites here.**
- If they can't think of any: *"Think of a business, brand, app or shop whose look you
  like, even if it isn't online. What is it about it?"* Having none is fine. Move to Step 2.

Record each as a `references[]` item with `"source": "client"`. If they give a name but
no address, record `name` and leave `url` out. **Never guess a URL.**

## Step 2: suggest 2 more similar sites
Pick **exactly 2 real websites you think they'd react to**:
- **If they named sites they liked:** pick 2 that share what they liked (same feel, layout
  or style), ideally one from their industry and one from outside it.
- **If they named none:** pick 2 that fit their business (Q1) and the impression they want
  (Q3). E.g. "credible" → a calm, well-known firm in a nearby field; "friendly" → a warm
  local brand.
- **Only FAMOUS big-brand sites: household names whose address you know by heart.** Never a
  small local business, and **never search the web for them** (search results are full of
  small sites that are often dead). With a browser, open them first; if one doesn't load,
  or the client says a link doesn't work, swap it for ANOTHER famous brand.

Show them:
- **With a browser:** open each one and walk through it together.
- **Without a browser:** give just these 2 links, each with a one-line note on what to
  look at. This is the only time you share links. Ask them to open each one and tell you
  their reaction.

Ask: *"Gut reaction: love it, hate it or meh? What exactly makes you feel that way?"*
Record each as a `references[]` item with `"source": "suggested"`. A "meh" or "hate" is a
useful answer too. If they truly don't have time, record `suggestions_skipped` with the reason.

## Then: dig into the why (required)
For each site they react to, ask until you have something specific:
- *"What exactly do you like: the colours, the layout, the photos, the fonts, how
  simple it is, how it moves, the tone of the words?"*
- *"Is there anything on it you'd NOT want?"*

Record each one as a `references[]` item:
`url` (or `name` if they named it without an address), `verdict` (`love`, `meh` or `hate`), `source` (`client` or `suggested`), `why` (their words), `specifics` (which of colours /
layout / fonts / photos / motion / tone / simplicity / other), and an optional `notes`.

## Finally: stop when you have enough
- ✅ **At least 2 loves, each with a real why**, counting the suggested ones. If they don't reach 2, record what they did say in `references_shortfall` and move on. Don't push.
- ✅ **Both suggested sites have a reaction** (or `suggestions_skipped`).
- ✅ 1 hate with a why (ask for one; it's fine if they truly have none).
- Don't drag it out. 10 minutes is plenty.

## Don'ts
- Don't steer them toward your own taste or call any site good or bad.
- Don't recommend a design for their site. KitoCRO does that.
- Don't log into anything or click buy/sign-up buttons on the sites.
