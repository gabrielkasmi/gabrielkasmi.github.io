---
layout: page
title: Misc
description: Older and side projects of Gabriel Kasmi — ATLAS, wolf-pack tracking, and political science research.
permalink: /research/misc/
toc: true
---

<p class="back-link"><a href="{{ '/research/' | relative_url }}">← Back to Research</a></p>

<h2 id="atlas">ATLAS: modelling short-term European electricity markets</h2>
<p>
  The ATLAS model simulates the various stages of the electricity market chain
  in Europe, including the formulation of offers by different market actors,
  the coupling of European markets, strategic optimization of production
  portfolios and, finally, real-time system balancing processes. ATLAS was
  designed to simulate the various electricity markets and processes that
  occur from the day-ahead timeframe to real-time with a high level of
  detail. Its main aim is to capture impacts from imperfect actor
  coordination, evolving forecast errors and a high level of technical
  constraints — both regarding different production units and the different
  market constraints.
</p>
<p>
  During my work-study contract at RTE, I was involved with the
  implementation of the "day-ahead-orders" module of the simulation model.
  This module consists in simulating the formulation of market orders. This
  formulation aims at maximizing the market participant's profit, but should
  reflect the technical constraints of their portfolio of means of
  production. A particular emphasis was laid on implementing an optimization
  program for the formulation of thermal orders, aiming at reflecting the
  technical constraints of these technologies. This optimization program for
  thermal units relies heavily on mixed-integer linear programming (MILP).
</p>
<p>
  The deliverable resulting from the project is accessible
  <a href="https://www.osmose-h2020.eu/wp-content/uploads/2022/02/OSMOSE-D2.3-ModelsForMarketSimulation_Final.pdf">here</a>,
  and the supporting preprint is accessible
  <a href="https://arxiv.org/abs/2402.12848">here</a>.
</p>
<p><strong>Reference</strong>:</p>
<ul>
  <li>
    Little, E., Cogen, F., Bustarret, Q., Dussartre, V., Lâasri, M., Kasmi,
    G., ... & Bourmaud, J. Y. (2024). ATLAS: A Model of Short-term European
    Electricity Market Processes under Uncertainty. <i>arXiv preprint
    arXiv:2402.12848</i>.
  </li>
</ul>

<h2 id="tassu">Counting wolfpacks in Finland</h2>
<p>
  In January 2019 the University of Jyväskylä and the National Resources
  Institute Finland (Luke) started a collaboration to implement a new
  approach for estimating the wolf population in southern Finland. The end
  goal is to propose an online assessment of the Finnish wolf population
  using a multiple target tracking algorithm based on a dynamic statistical
  model.
</p>
<p>
  Currently, estimations are carried out using yearly surveys, and population
  simulation models are used to fill the gap between two rounds of
  estimation. The model is run using different specifications, and when new
  data is available, predictions outside the observed realizations are
  discarded. Fresh data then serves as the new initial conditions of the
  model. This method allows for online and frequent estimation of the number
  of wolves.
</p>
<p>
  On the other hand, as part of the wolf monitoring policy in Finland, Luke
  maintains a database of wild animal observations. This database, called
  TASSU, is updated on a daily basis, and the idea would be to develop a
  statistical model that could provide a real-time estimation of the number
  of wolf packs. This estimation would then be available to the public
  through a dedicated website. Besides, compared to other approaches (e.g.
  surveys or GPS tracking), this method, if proven reliable, could be much
  more cost-efficient.
</p>
<p>
  The Department of Mathematics and Statistics focuses on developing the
  estimation algorithm based on a statistical model. To do so, it is
  necessary first to construct a dynamic model and an observation model. The
  former describes how new packs are formed or disappear, while the
  observation model links the latent dynamics to the actual observations
  that feed the TASSU database. Among other things, this observation model
  needs to take into account the fact that not all packs are necessarily
  immediately observed.
</p>
<p>
  From a mathematical perspective, this setting can be seen as a filtering
  problem, i.e., a dynamic situation where incomplete signals (the
  observations) are received from a latent unobserved system (the wolf packs
  population). These observations can be noisy, and yet one wants to use
  them to provide a "best estimation" of the current status of the system.
</p>
<p>
  More precisely, the filtering method that was chosen is a particle filter
  (or sequential Monte-Carlo) that allows computing Monte-Carlo
  approximations when dealing with filtering problems. The construction of
  this filter is gradual. The starting point is to simulate the dynamic and
  observation models in a very simple manner and to see if inference in this
  context is feasible. The main question of this internship was to know
  whether inference could be made in the context of wolf pack tracking.
</p>
<p>
  The internship report can be accessed
  <a href="https://drive.google.com/file/d/1AEypPf6nrcfW42oFfEkHeYRWtLP9iR0M/view?usp=drive_link">here</a>
  and the resulting publication is accessible
  <a href="https://doi.org/10.1016/j.ecolmodel.2022.110101">here</a>.
</p>
<p><strong>Reference</strong>:</p>
<ul>
  <li>
    Karppinen, S., Rajala, T., Mäntyniemi, S., Kojola, I., & Vihola, M.
    (2022). Identifying territories using presence-only citizen science
    data: An application to the Finnish wolf population. <i>Ecological
    Modelling, 472</i>, 110101.
  </li>
</ul>

<h2 id="ape">APE's master thesis</h2>
<p>
  <strong>Abstract</strong>: What incentives do politicians respond to?
  Based on aggregated data of the French National Assembly activities, we
  constructed a dataset designed for estimating the impact of the majority.
  Our fixed-effect model allows us to document a 4.67% increase in the
  probability of attending committee meetings and a decrease of 6.48% in the
  probability of intervening in floor meetings associated with the majority.
  The qualitative pattern argues in favor of a majority focused on moving the
  Government's agenda forward while leaving the floor to the opposition
  during public meetings. Thus, it suggests that the subordination of the
  National Assembly to the Executive branch originates from the subordination
  of the majority group. These results provide renewed evidence of what has
  been highlighted by earlier literature as a distinctive pattern of the
  National Assembly and show how differences in political status can
  influence otherwise similar deputies.
</p>
<p>
  You can access the master thesis
  <a href="https://drive.google.com/file/d/1sWWr9xmrkHjb3-lnMT80lPfkOYjObcJx/view?usp=drive_link">here</a>
  and the Beamer presentation
  <a href="https://drive.google.com/file/d/1QcPQoFzOgcXKomatCWT_WNexZ8U3J8os/view?usp=drive_link">here</a>.
  For this project, I used the data gathered by the non-profit association
  <a href="https://www.regardscitoyens.org/">Regards Citoyens</a> and
  accessible on the website <a href="https://www.nosdeputes.fr/">Nos
  Députés</a>. The supporting dataset in .dta (Stata) format can be accessed
  <a href="https://doi.org/10.5281/zenodo.10980404">here</a>.
</p>
