---
title: "Rooftop Solar Needs an Open Registry"
subtitle: "Why DeepPVMapper and PV Check exist, and where it is going"
description: >-
  Rooftop solar is a blind spot in energy data. Why I think it needs an open,
  regularly updated registry, how DeepPVMapper and PV Check contribute to it,
  and what 213 volunteers checking detections make possible.
date: 2026-10-12
tags: [Crowdsourcing, Photovoltaics, DeepPVMapper]
---

<figure class="blog-figure">
  <img src="{{ '/blog/img/rooftop-solar-needs-an-open-registry/asset.webp' | relative_url }}" alt="Illustration: a group of people gathered around a map in the middle of a neighbourhood of houses with solar panels on their roofs, surrounded by check marks and speech bubbles">
</figure>

<p>
  At the time this blog post is written (Oct 2026), 3,354 rooftop installations have been looked at by 213 volunteers in PV Check. The 10k contribution bar has been surpassed (currently 13,605 contributions). First of all, I'd like to thank all the annotators who contributed to the crowdsourcing campaign.
</p>

<p>
Following up on some comments and discussions, this blog post provides a little bit of background and motivation behind this game, and the DeepPVMapper project as a whole. 
</p>

<h3>1. An open-source registry of rooftop PV systems, for France and beyond</h3>

<p>
  <a href="https://deeppvmapper.fr/">DeepPVMapper</a>'s motivation is grounded in the fact that rooftop PV data is a blind spot in the current energy data ecosystem, and it will play a key role, as rooftop PV is the simplest energy source to adopt and one of the fastest growing, especially in developing countries (see the recent Pakistani solar boom). Worldwide, distributed PV, a category dominated by rooftop systems, accounted for about 286 GW of the 698 GW installed in 2025 (roughly 41%), up from 233 GW in 2024 (<a href="https://iea-pvps.org/wp-content/uploads/2026/04/Snapshot-of-Global-PV-Markets-2026.pdf">IEA PVPS</a>). Yet nobody knows precisely how much of it there is. The IEA itself does not publish a cumulative figure for distributed PV, and notes that small systems and self-consumed generation are hard to track, even in mature markets. For several markets, the volumes are derived from import data. In several developing countries, solar boom had a signifcant impact on the grid, e.g., recently in Pakistan, while official figures have proven to be completly off track.
</p>
<p>
  On the other hand, the definitions regarding PV in general and rooftop PV in particular can be quite messy. Among institutional actors, nobody focuses specifically on rooftop PV systems, although I think that their scale and diversity make them a class of assets of its own, deserving <a href="../../../08/15/three-maps-three-definitions/">its own definition</a> and a specific focus by some actor that is not doing rooftop PV mapping <i>among something else</i>, but specifically rooftop PV mapping.
</p>

<p>
To be clear, my sole point is to detect PV systems from openly available imagery. What I'm interested in is to know that there is a PV system that is visible, to know its technical characteristics and at some point to be able to derive some statistics such as the installation year of the system (if I find a way to do so). I do not want to know <i> who </i> owns it, why the system was bought or any other private information.
</p>

<p>
I briefly considered building a startup to carry out this work. However, I realized that it doesn't really make sense to make the map a paid asset. It prevents adoption, introduces unnecessary barriers to adoption, whereas the value of such a product comes (1) from having people use it and (2) from having people combine it with their own workflows. Either you monetize the whole workflow (good luck with that), or you provide the map for free, as an open source product.
</p>

<p>
Open sourcing also offers a more collaborative way of thinking about the problem. As discussed in <a href="../../../08/15/three-maps-three-definitions/">this post</a>, the definitions regarding rooftop PV are not very settled, and I want to avoid defining a standard that sits next to existing standards and conventions, but rather introducing an interoperable basis that lets users match their own desired format. Opening everything is the only way to give this <i> forum </i> a chance to exist.
</p>

<p>
Having worked on the topic during my PhD makes me a good candidate to initiate the movement. I believe that remote sensing is a good starting point to carry out the task (even if it comes with its limitations). Numerous works (including mine) introduced their own mapping. What is now needed is to make those maps actually usable, which requires having users and providing regular updates and improvements.
</p>

<h3>2. DeepPVMapper and its ecosystem</h3>

<p>
I'm happy to see that other works such as <a href="https://open-energy-transition.github.io/earthpv/">EarthPV</a> and <a href="https://tracethesun.org/">TraceTheSun</a> exist, and I hope that more and more initiatives will take place. In this ecosystem, DeepPVMapper focuses on the French case and is an attempt to "industrialize" this map. A faraway dream would be that the experience acquired for France benefits other communities.
</p>

<p>
I would like to expand DeepPVMapper to other countries, either by doing the mapping myself or by letting others reuse the source code and eventually feature their detections within the database, thus offering the same accessibility level as the map that I develop for France.
</p>

<p>
The rooftop PV detections -- gathered in the OpenPVMapper database -- are accessible through direct download, an API, an MCP server and soon a QGIS plugin. Anything that ends up hosted with OpenPVMapper will be accessible through these tools. The only requirement to use these tools is to refrain from using them for harmful purposes or scams. I know that this warning will not prevent bad guys from doing bad things, but at least they are warned that any unfair usage is against the terms and conditions.
</p>

<p>
If you are building your own initiative around (rooftop) PV mapping, would like to map systems over your country and/or would like to suggest to me new tools to make the data more accessible, feel free to contact me.
</p>

<h3>3. The value of human verification</h3>

<p>
Mapping rooftop PV systems over a country is an ambitious and tedious task, let alone worldwide. Hopefully, machine learning models can do the heavy lifting for us. Or, said otherwise, rooftop PV detection from aerial imagery wouldn't be feasible without modern machine learning techniques.
</p>

<p>
However, machine learning algorithms are far from perfect and even the most sophisticated system makes mistakes. On this point, I think that what should be prioritized is the ability to quantify the accuracy and the uncertainties of the detector, rather than improving its performance. Algorithms will eventually (if not already) achieve near-perfect accuracy. But the barrier to adoption lies in the darkness that surrounds this <i> near </i> perfect accuracy, rather than the accuracy itself. Crowdsourcing gives you a reference against which to measure the reliability of your detections.
</p>

<p>
This is where the collaborative work comes into play. I built PV Check, but also introduced a couple of <a href="https://maproulette.org/browse/projects/64195">MapRoulette</a> challenges to verify the detections of the algorithm. These verified detections will be documented as such in the subsequent releases of the map. In particular, the MapRoulette-validated systems are now part of the OpenStreetMap ecosystem.
</p>

<p>
I view crowdsourcing as one means to collectively improve the quality of the data. Cross-referencing the detections, or enabling users to directly correct the detections on the website are two other ways of improving the quality of the data. My hope is that quality improves over time, as more users are involved, either as crowdsourcers, mappers, or end users of the data. The open nature of the project is such that the improvements benefit the whole community.
</p>

<h3>4. Trickling down</h3>

<p>
Crowdsourcers are not only there to validate systems. First, their contribution helps improve the model itself, through the acquisition of high-quality training data. Future model updates will be trained on crowdsourced data. I already formatted OpenPVMapper as a training dataset and I have now gathered sufficient data to train state-of-the-art models and dramatically increase the accuracy and reliability of the detections.
</p>

<p>
The crowdsourcing campaign also makes it possible to carry out some real science. I think that there are many studies to carry out on the campaign itself, to learn how to motivate people, keep them engaged, and improve the quality of the detections. If you want to read more about the first results of the detection campaign, you can read <a href="../../05/crowd-vs-model/">this post</a>.
</p>

<p>
On the science side, PV Check will also make it possible to build a benchmark dataset to evaluate modern AI systems. This is a project that I had in mind for a while and we are on the path to making it happen. The precise contours of this project remain to be defined, but I'll keep you posted on its evolution.
</p>

<p>
Currently, there are more than 1M systems in OpenPVMapper, so the campaign can virtually run forever. However, I think that everybody (including me) will eventually be tired of verifying systems over France. I would like to open PV Check for other mapping needs. The only requirement that I have is that the data produced will be redistributed openly (that includes the raw annotations and the final dataset).
</p>

<p>
If you'd like to participate in the update and training of the models, would like to contribute to a research article or wish to use the annotation platform PV Check, feel free to reach out to me.
</p>

<h3>5. Closing thoughts</h3>

<p>
DeepPVMapper exists because I think that rooftop PV data needs its own place to be gathered, curated and disseminated. Academic works have shown that detection is feasible; now we need to make it usable. DeepPVMapper is an attempt to do so.
</p>

<p>
DeepPVMapper is open at its core, because I think that the true value lies in the forum that this kind of initiative can create: coders will find an interesting case study to improve the code or push new model updates. Mappers will find a new asset to chase, or a place to host their detections. Users will find a useful piece of information for their workflow. And researchers may find a useful annotation tool for subsequent annotation needs. This forum cannot exist behind paywalls.
</p>

<p>
If you want to be part of it, you can check the <a href="https://deeppvmapper.fr/content/contribute.html">contribute page</a> to see how you can help. For anything else, feel free to reach out to me.
</p>
