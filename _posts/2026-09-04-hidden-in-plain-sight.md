---
title: "Hidden in Plain Sight"
subtitle: "Why openness is the robust choice for mapping what everyone can already see."
description: >-
  Something visible from the sky or the street isn't made safe by hiding the
  dataset — that only decides who gets to see it. Why openness is the
  robust choice for mapping infrastructure like rooftop solar.
date: 2026-09-04
tags: [Open Data, OpenStreetMap, Photovoltaics]
extra_head: |
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/styles.css"/>
  <script defer src="https://cdn.jsdelivr.net/npm/img-comparison-slider@8/dist/index.js"></script>
---

<p>
  Like most people, I had used OpenStreetMap for years without ever really understanding the idea underneath it. It was just "the open Google Maps", with a lot of large systems already referenced in Europe.
</p>

<p>
  It took a weekend at State of the Map to realize that OSM rests on two core principles, far more interesting than the map itself.
</p>

<p>
  The first: <strong>you only map what can be seen.</strong> OSM records what is observable to anyone standing in a public place: a road, a roundabout, a building's footprint. The second: <strong>the map cannot be appropriated.</strong> It's a commons. No company, no state, no individual can enclose it. Everyone contributes, everyone benefits, and the thing itself belongs to no one.
</p>

<p>
  Two modest-sounding rules. I've come to think they're the answer to a discomfort that keeps coming up in my own work, and in a debate I watched at the conference.
</p>

<h3>Panoramax, or: we put photos on the internet</h3>

<p>
  One of the flagship projects in the room was <strong>Panoramax</strong>, an open, community-run alternative to Street View. Volunteers capture street-level imagery and publish it openly for anyone to use.
</p>

<p>
  And immediately, the uncomfortable question: we are photographing streets and putting them online. A parked car that moves at a certain hour tells you someone has left home. Multiply that across a city, point modern AI at it, and you extract a lot that people never meant to share. So, do we <em>want</em> to enable that?
</p>

<p>
  It's a fair question. But notice where it bites. The car was on the street, in plain view, the whole time. The imagery didn't create the information; it made it <em>easier to collect at scale</em>. The line that matters isn't between <strong>taking the photograph</strong> and <strong>not taking it</strong> — it's between taking it and <strong>misusing it</strong>.
</p>

<h3>"You're going to look inside people's homes"</h3>

<p>
  I recognize that discomfort because it followed me all through my PhD. Every time I described mapping rooftop solar from aerial imagery, someone would say some version of: <em>aren't you going to look inside people's homes?</em>
</p>

<p>
  It's the same worry as Panoramax, wearing different clothes. A solar panel on a roof is visible from the sky, and it always has been. What changed is that a model can now find all of them, everywhere, cheaply. The instinct, in both cases, is the same: this feels intrusive, so maybe we should keep the data closed.
</p>

<h3>The counter-intuitive part</h3>

<p>
  Here's the thing about closing a dataset of something already visible: <strong>it doesn't hide the phenomenon. It only decides who gets to see it.</strong>
</p>

<p>
  The rooftop is still there. The street is still filmed by every passing dashcam. Locking away the <em>map</em> doesn't remove the <em>capability</em> — it concentrates it in the hands of whoever can afford to rebuild it privately, while denying it to the researchers, local authorities and citizens who would use it in the open.
</p>

<p>
  Cryptographers have a name for the mistake this avoids. <strong>Kerckhoffs's principle</strong> says a system should stay secure even if everything about it <em>except the key</em> is public. Security that depends on nobody knowing how the system works isn't security — it's a fragility waiting to be found.
</p>

<p>
  Translate that to infrastructure data and it reads almost the same:
</p>

<blockquote>
  <p><em>A system you have to keep secret to keep safe isn't safe, it's fragile. What's robust is what everyone can see, check, and correct.</em></p>
</blockquote>

<p>
  This is where OSM's two principles click into place. <strong>Map only what's visible</strong>, and you're not building surveillance — you're describing what is already public. <strong>Make it inappropriable</strong>, and no single bad actor gains an asymmetric edge, because everyone holds the same map, including the people who would spot and fix its errors. You regulate the <em>misuse</em>, not the <em>looking</em>.
</p>

<figure class="blog-figure">
  <img-comparison-slider style="width:100%; --divider-width:2px;">
    <img slot="first" src="{{ '/blog/img/hidden-in-plain-sight/before.webp' | relative_url }}" alt="Aerial view over Montélimar — before detection" width="1600" height="890" style="width:100%; display:block;">
    <img slot="second" src="{{ '/blog/img/hidden-in-plain-sight/after.webp' | relative_url }}" alt="The same view with detected rooftop PV installations" width="1600" height="890" style="width:100%; display:block;">
  </img-comparison-slider>
  <figcaption>It was there all along — drag the slider to reveal the detected rooftop PV. Detections over Montélimar, from <a href="https://deeppvmapper.fr">deeppvmapper.fr</a>.</figcaption>
</figure>

<h3>The case for open PV mapping</h3>

<p>
  This isn't abstract for me. Rooftop solar is a near-perfect example of something <em>hidden in plain sight</em>: visible from space, yet largely missing from the official registries meant to track it. In several countries the gap between what's installed and what's recorded runs into the tens of percent.
</p>

<p>
  You can close that gap two ways. You can buy exclusive high-resolution imagery, run it privately, and publish a number nobody else can reproduce. You get a figure standing on sand, trustworthy only as far as you trust the people who made it. Or you can do it in the open.
</p>

<p>
  That's the bet behind <strong><a href="https://open-energy-transition.github.io/earthpv/">EarthPV</a></strong> and <strong><a href="https://deeppvmapper.fr/">DeepPVMapper</a></strong>: open imagery, open models, open data, and a crowdsourcing loop where anyone can verify a detection and feed the correction back in. The map isn't weaker for being public. Every extra pair of eyes that checks a panel, every community that corrects a boundary, makes it better. It's a public good in the literal sense: it gains value as more people use it.
</p>

<p>
  I'm not trying to settle the grand "should data be open or closed" debate. My point is narrower, and I think harder to argue with: for infrastructure <em>already visible from the sky or the street</em>, the real choice was never "seen or hidden." It's "seen by a well-resourced few, or seen — and correctable — by everyone." Openness isn't the risky option here. It's the robust one.
</p>
