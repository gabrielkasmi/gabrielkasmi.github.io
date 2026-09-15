---
title: "Navier–Stokes, Scaling Laws, and Peak Tokens"
subtitle: >-
  What if the real constraint on AI isn't energy or money, but tokens — and
  the race to the frontier is built to cannibalize itself?
description: >-
  OpenAI's Navier–Stokes result quietly admits that user prompts may be
  training data too. A look at why tokens — not energy or money — could be
  AI's binding constraint, and why that last reservoir is set up to run dry.
date: 2026-09-15
tags: [AI, Scaling Laws, Open Data]
---

<p>
  Much has already been said about the OpenAI Navier–Stokes affair — about the credibility of the method itself (does the model actually reason, or is this brute force dressed up as insight), and about the credit dispute with the mathematicians who were working the same problem. One detail, though, is worth dwelling on longer than the rest of the coverage has: OpenAI's own admission that <em>"while unlikely, [it] cannot rule out that de-identified data derived from their usage of our products helped improve our models."</em>
</p>

<p>
  Behind that sentence sits a fairly simple fact: any AI model needs good data to keep improving. The public conversation about AI's limits keeps circling around an energy wall, or a valuation bubble. But what if the real binding constraint is something narrower and more specific — tokens — and what if, for this particular resource, the race to the frontier is set up to cannibalize itself?
</p>

<h3>1. Data is all you need</h3>

<p>
  At first order, progress in these models has depended on scaling two things together: compute and training tokens. Very roughly speaking, for each additional parameter, 20 additional tokens are needed.
</p>

<p>
  This arithmetic quickly exhausted the internet. Current models are already trained on the whole internet. It's worth noting, in passing, that the <em>other</em> commonly discussed constraint — energy and compute infrastructure — is the one the industry actually knows how to throw engineering at, however extreme: Google and SpaceX are jointly developing Project Suncatcher, orbital data centers running on continuous solar power, targeting deployment as early as 2027. There is, notably, no equivalent engineering fix for a shortage of genuinely new ideas. You cannot launch a satellite to go fetch a thought that doesn't exist yet.
</p>

<h3>2. The law of receding tokens</h3>

<p>
  With the open internet drained, the hunt has moved to other reservoirs: open data commons that were never built to withstand this kind of load. Wikimedia has documented a 50% surge in bandwidth demand on Wikimedia Commons driven by AI crawlers; The Register names Meta and OpenAI specifically as the worst offenders. The same pressure is reported anecdotally around other open infrastructure — OpenStreetMap and Zenodo among them — maintainers describing a need to defend against "excessive automation" alongside legitimate use.
</p>

<p>
  But the open commons aren't the only reservoir left to mine. The Navier–Stokes episode reveals the next one: users' own prompts. If interactions with a model can measurably improve it, then prompts are training data too — original, unpublished, often more valuable per token than anything left on the open web, precisely because they capture reasoning that has never been written down anywhere else. The question this opens isn't legal so much as reputational: once people understand this is happening, how will it be received?
</p>

<h3>3. The clock is ticking</h3>

<p>
  If the pool of good prompts is the last frontier, it's also a strikingly fragile one, for at least two reasons.
</p>

<p>
  First, an eviction effect: people with genuinely original ideas may simply stop feeding them to a tool, once the Navier–Stokes precedent is out there. This isn't a hypothetical reaction — the mechanism has already been measured elsewhere. After the Snowden revelations, Jon Penney's study of Wikipedia traffic found a measurable drop in visits to sensitive topics, driven purely by the awareness of being watched, without any actual enforcement action ever taking place. There's no reason to expect researchers and domain experts to behave differently once they suspect their brainstorming sessions might be harvested.
</p>

<p>
  Second, a structural response: the growth of self-hosted, open-weight models will likely absorb a growing share of exactly this kind of high-value brainstorming, run locally and never reaching Anthropic's or OpenAI's servers at all.
</p>

<figure class="blog-figure">
  <img src="{{ '/blog/img/scaling-laws-navier-stokes/goya-saturn.jpg' | relative_url }}" alt="Francisco de Goya, Saturn Devouring His Son" style="display:block; max-width:55%; height:auto; margin:0 auto;">
  <figcaption>Francisco de Goya, <em>Saturno devorando a su hijo</em> (c. 1820). Public domain (Wikimedia Commons).</figcaption>
</figure>

<p>
  OpenAI's celestial naming scheme is well chosen, incidentally — Terra, Luna, Sol. A fitting next name for GPT-6.1 might be Saturn: the Roman god who devoured his own children. More fundamentally, though: it's worth asking whether the deposit of usable data needed to train the next generation of these models might run dry before the data centers meant to train them have even finished being built.
</p>

<h3>Sources</h3>

<ul>
  <li><a href="https://openai.com/index/navier-stokes-solution/">OpenAI — On the Navier–Stokes Millennium Prize Problem</a></li>
  <li><a href="https://arxiv.org/html/2406.12907v1">Reconciling Kaplan and Chinchilla Scaling Laws (arXiv)</a></li>
  <li><a href="https://www.pbs.org/newshour/economy/ai-gold-rush-for-chatbot-training-data-could-run-out-of-human-written-text-as-early-as-2026">PBS NewsHour — AI gold rush for chatbot training data could run out of human-written text as early as 2026</a></li>
  <li><a href="https://diff.wikimedia.org/2025/04/01/how-crawlers-impact-the-operations-of-the-wikimedia-projects/">Wikimedia Diff — How crawlers impact the operations of the Wikimedia projects</a></li>
  <li><a href="https://techcrunch.com/2025/04/02/ai-crawlers-cause-wikimedia-commons-bandwidth-demands-to-surge-50">TechCrunch — AI crawlers cause Wikimedia Commons bandwidth demands to surge 50%</a></li>
  <li><a href="https://www.theregister.com/2025/08/21/ai_crawler_traffic/">The Register — AI crawlers and fetchers are blowing up websites, with Meta and OpenAI the worst offenders</a></li>
  <li><a href="https://pretalx.com/sotm2026/speaker/YGZZPU/">State of the Map 2026 — "Running OpenStreetMap.org in the Age of AI" (Grant Slater)</a></li>
  <li><a href="https://theconversation.com/data-centres-in-space-will-2027-really-be-the-year-ai-goes-to-orbit-271018">The Conversation — Data centres in space: will 2027 really be the year AI goes to orbit?</a></li>
  <li><a href="https://www.datacenterdynamics.com/en/news/project-suncatcher-google-to-launch-tpus-into-orbit-with-planet-labs-envisions-1km-arrays-of-81-satellite-compute-clusters/">Data Center Dynamics — Project Suncatcher</a></li>
  <li><a href="https://theintercept.com/2016/04/28/new-study-shows-mass-surveillance-breeds-meekness-fear-and-self-censorship/">The Intercept — Mass surveillance breeds meekness, fear, and self-censorship, new study shows (Jon Penney)</a></li>
</ul>
