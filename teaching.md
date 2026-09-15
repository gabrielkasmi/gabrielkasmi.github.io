---
layout: page
title: Teaching & Popularization
description: Teaching, mentoring, talks, and popularization activities of Gabriel Kasmi.
permalink: /teaching/
toc: true
---

<h2 id="teaching">Teaching</h2>

<h3>Interns supervision</h3>

<h4>February–August 2025: End of study internship of Sarah Mehiyddine</h4>
<p>
  In the context of the French and European energy transition, this
  internship aimed to analyze the determining factors for the adoption of
  residential photovoltaic systems, particularly in a regulatory context
  evolving towards self-consumption. The main objective was to understand how
  economic incentives, notably feed-in tariffs, influence individual adoption
  decisions.
</p>
<p><strong>Research article in preparation</strong></p>
<p>
  A scientific article is currently being written, based on the analysis of
  granular French data covering the period 2005–2024. This article uses
  detailed installation data provided by RTE and long-term socioeconomic data
  from the
  <a href="https://unehistoireduconflitpolitique.fr/telecharger.html">Piketty
  and Cagé (2023) historical database</a> to model the profitability of PV
  installations. We account for the specificities of injection configurations
  (full vs. surplus). We propose a two-step analysis where we first assess
  the impact of profitability on adoption, and then focus on the determinants
  of profitability itself.
</p>
<p>
  Our key contributions are to show that, in the current context,
  profitability depends primarily on electricity prices rather than feed-in
  tariffs. This effect becomes more pronounced as the self-consumption rate
  increases (the threshold appears to be around 60–70% self-consumption). We
  also evaluate the installed potential that could be achieved with rooftop
  PV in self-consumption with surplus by 2035.
</p>
<p>
  This work challenges the idea that recent reductions in feed-in tariffs
  will necessarily slow down photovoltaic deployment. On the contrary, it
  highlights the growing importance of self-consumption, enhanced by
  technological progress in storage and flexibility.
</p>
<p>This analysis provides policymakers and network operators with key elements to:</p>
<ul>
  <li>Evaluate the effectiveness of current incentive mechanisms</li>
  <li>Anticipate behavioral changes in response to regulatory modifications</li>
  <li>Calibrate adoption projections to optimize investments in the electrical system</li>
</ul>
<p><strong>Extensive literature review</strong></p>
<p>
  A comprehensive literature review was conducted and published, examining
  the key factors influencing the adoption of residential rooftop
  photovoltaic systems. This review adopts both macroeconomic and
  microeconomic approaches, identifying all determinants, particularly
  socioeconomic and financial ones, that guide individual decisions. The
  literature review is available
  <a href="https://shs.hal.science/halshs-05121399/">here</a>.
</p>
<p><strong>Questionnaire on individual determinants</strong></p>
<p>
  A questionnaire was developed to identify and analyze individual
  motivations behind the adoption of residential photovoltaic systems. This
  survey captures not only economic factors but also social and
  environmental factors that influence household decisions.
</p>

<h4>March–September 2022: End of study internship of Yann Trémenbert</h4>
<p>
  Photovoltaic (PV) energy grows at an unprecedented pace, which makes it
  difficult to maintain up-to-date and accurate PV registries, which are
  critical for many applications such as PV power generation estimation.
  This lack of qualitative data is especially true for rooftop PV
  installations. As a result, extensive efforts are put into building PV
  inventories. However, although valuable, these registries cannot be
  directly used for monitoring the deployment of PV or estimating PV power
  generation, as these tasks usually require PV system <em>characteristics</em>.
  To seamlessly extract these characteristics from the global inventories,
  we introduce PyPVRoof, a Python package to extract essential PV
  installation characteristics: tilt angle, azimuth, surface, localization,
  and installed capacity. PyPVRoof is designed to cover all use cases
  regarding data availability and user needs, and is based on a benchmark of
  the best existing methods. Data for replicating our accuracy benchmarks are
  available on our
  <a href="https://doi.org/10.5281/zenodo.7586879">Zenodo repository</a>,
  and the package code is accessible at
  <a href="https://github.com/gabrielkasmi/pypvroof">this URL</a>.
</p>
<p>
  The main tasks of the internship included an extensive literature review of
  existing works on extracting characteristics of PV systems, a benchmark of
  these methods, and an implementation of new methods (e.g., Theil-Sen
  regression). All methods were extensively compared both in terms of
  accuracy and computational cost on
  <a href="https://www.nature.com/articles/s41597-023-01951-4">BDAPPV</a>.
  Yann put a particular emphasis on the environmental impact of his coding
  practices and the methods he implemented. The idea to discuss the
  environmental impact of DeepPVMapper (appendix A of the thesis manuscript)
  came from him. This internship was co-supervised with L. Dubus.
</p>

<h3>Supervision of group projects</h3>

<h4>Since 2022: Applied statistics projects at ENSAE</h4>
<p>
  About 20 hours of teaching load to a group of 2nd year engineering
  students at ENSAE Paris
  ("<a href="https://www.ensae.fr/courses/1408-groupe-de-statistique-appliquee">groupe
  de statistiques appliquées</a>").
</p>
<ul>
  <li><strong>2024–2025</strong>: Detection of PV systems from UAV images in Madagascar</li>
</ul>
<p>
  In 2023, global renewable energy capacity reached a record 3,870 GW, thanks
  to growth of 473 GW, 73% of which came from solar power. Despite this
  dynamism, the geographical distribution remains uneven, particularly in
  Africa, where the increase was only 4.6%, well short of the continent's
  needs. To bridge this gap, solutions such as remote sensing, already widely
  used in developed countries, could play a crucial role in promoting the
  integration of renewable energies in developing countries. The aim of this
  study is to propose the first application of a convolutional neural
  network (CNN) to the remote sensing of rooftop PV installations in
  Madagascar. The students used training data from an openly available
  dataset to train and test their model, and discovered the fundamentals of
  machine learning and deep learning — empirical risk minimization, model
  training (loss minimization, gradient descent), model architectures — and
  implemented a deep learning model on a GPU-based instance. This course
  gives students a first hands-on experience with deep learning for
  classification and segmentation.
</p>
<ul>
  <li><strong>2022–2023</strong>: Detection of PV systems from aerial images</li>
</ul>
<p>
  The project title was "Deep learning for detecting individual solar
  systems from aerial images". The students' tasks were to carry out a
  short literature review, define the fundamental notions of machine
  learning and deep learning (empirical risk minimization, perceptron,
  neural network, convolutional layers, CNN), and to implement a custom-made
  and a ready-to-use neural network for binary classification on
  <a href="https://www.nature.com/articles/s41597-023-01951-4">BDAPPV</a>.
  The students leveraged PyTorch to train and evaluate the classification
  model. The project repository can be accessed
  <a href="https://github.com/gabrielkasmi/statapp-ensae">here</a> and the
  students' implementation
  <a href="https://github.com/Basso42/DeepPVClassification">here</a>.
</p>

<h4>February–July 2023: Computer science project at Mines Paris</h4>
<p>
  About 20 hours of teaching load to a group of 1st year engineering
  students at Mines Paris
  ("<a href="https://catalogue.mines-paristech.fr/#cp=course&group=IC1A&course=ECUE22.3&mainTab=COURSEgeneralites">projet
  d'informatique</a>"). The students' task was to implement a website to
  visualize the outputs of DeepPVMapper (similar to
  <a href="https://waynehuu.github.io/solarMapper/">this website</a>). The
  main tasks were to implement an architecture with a client and a host
  based on Flask, to implement spatial indexing and preprocessing of the raw
  data to minimize loading times, and to propose complementary statistics
  (e.g., the number of systems or the cumulated installed capacity per
  city). The project repository can be accessed
  <a href="https://git.sophia.mines-paristech.fr/oie/projet-info-pv">here</a>.
  This project was co-supervised with R. Jolivet.
</p>

<h3>Mentoring</h3>
<ul>
  <li><strong>2024–2025</strong> Mentoring 5 final-year students from CentraleSupélec.</li>
  <li><strong>2024–2025</strong> Mentoring a first-year student from ENSAE.</li>
</ul>

<h2 id="talks">Talks and popularization</h2>

<h3>Talks</h3>
<ul>
  <li>Améliorer l'observabilité du PV sur toiture en France : une comparaison
    des approches physiques avec celles du GRT. De meilleures données
    solaires pour booster le photovoltaïque, April 2025, SIRTA, Palaiseau.</li>
  <li>Mapping rooftop PV installations with deep learning. Geostat seminar,
    October 2024, Sophia-Antipolis.</li>
  <li>Reliably mapping the rooftop photovoltaic installations in France to
    support the decarbonation of the electric grid. PitchYourThesis,
    February 2024, Paris, France.</li>
  <li>Reliably mapping the rooftop photovoltaic installations in France to
    support the decarbonation of the electric grid. ML4Climate Meetup #2,
    December 2023, Paris, France.</li>
  <li>Mapping rooftop PV installations with deep learning. MIG seminar,
    November 2023, Sophia-Antipolis.</li>
  <li>Mapping rooftop PV installations with deep learning. Geostat seminar,
    October 2023, Sophia-Antipolis.</li>
  <li>Mapping rooftop PV installations with deep learning. Solar Winter
    School, March 2023, Sophia-Antipolis.</li>
</ul>

<h2 id="press">In Press</h2>
<p>Press coverage and popularization writing — mostly in French, on reliable/transparent AI and rooftop PV observability.</p>
<ul>
  <li>
    [En Français] « Améliorer la fiabilité des modèles d'apprentissage
    profond en vue d'accroître l'observabilité des installations
    photovoltaïques en toiture en France », rubrique « Ma thèse en une page »,
    La Revue de l'Energie n°680, Septembre-Octobre 2025.
    Lire l'article <a href="https://www.larevuedelenergie.com/ameliorer-la-fiabilite-des-modeles-dapprentissage-profond-en-vue-daccroitre-lobservabilite-des-installations-photovoltaiques-en-toiture-en-france/">ici</a>.
  </li>
  <li>
    [En Français] « Une cartographie par IA pour évaluer les données de
    raccordement de systèmes PV », PV Magazine France, 24 Septembre 2025.
    Lire l'article <a href="https://www.pv-magazine.fr/2025/09/24/une-cartographie-par-ia-pour-evaluer-les-donnees-de-raccordement-de-systemes-pv/">ici</a>.
  </li>
  <li>
    [En Français] « L'observabilité de la production photovoltaïque sur
    toiture : une question de connaissance du parc installé », PV Magazine
    France, 17 Septembre 2025.
    Lire l'article <a href="https://www.pv-magazine.fr/2025/09/17/lobservabilite-de-la-production-photovoltaique-sur-toiture-une-question-de-connaissance-du-parc-installe/">ici</a>.
  </li>
  <li>
    [En Français] avec Sarah Mehiyddine, « Comprendre comment
    l'autoconsommation façonne l'adoption du PV sur toiture », PV Magazine
    France, 1er Octobre 2025.
    Lire l'article <a href="https://www.pv-magazine.fr/2025/10/01/comprendre-comment-lautoconsommation-faconne-ladoption-du-pv-sur-toiture/">ici</a>.
  </li>
  <li>
    [En Français] « Photovoltaïque et réseau électrique : comment une IA
    fiable et transparente pourrait faciliter la décarbonation », The
    Conversation, 10 août 2025.
    Lire l'article <a href="https://theconversation.com/photovolta-que-et-reseau-electrique-comment-une-ia-fiable-et-transparente-pourrait-faciliter-la-decarbonation-261681">ici</a>.
  </li>
  <li>
    [En français] « Vers une IA fiable et transparente pour la
    décarbonation du système électrique », Décryptage, Zenon Research, 27
    mai 2025.
    Lire l'article <a href="https://www.zenon.ngo/insights/ia-fiable-transparente-decarbonation-systeme-electrique">ici</a>.
  </li>
  <li>
    [En français] « L'IA pour intégrer le photovoltaïque au réseau »,
    rubrique « En direct des Labos », Le Journal du Photovoltaïque, n°52
    (juillet-août-septembre 2024).
    Lire l'article <a href="https://drive.google.com/file/d/1vmpklt_UFAJVf9QrtC6EK-M1F6GbibZd/view?usp=drive_link">ici</a>.
  </li>
  <li>
    [En français] « Des images aériennes pour cartographier automatiquement
    les panneaux PV en toiture » (Emiliano Bellini), PV Magazine France, 23
    février 2023.
    Lire l'article <a href="https://www.pv-magazine.fr/2023/02/23/des-images-aeriennes-pour-cartographier-automatiquement-les-panneaux-pv-en-toiture/">ici</a>.
  </li>
  <li>
    [In English] "Aerial image dataset automatically maps rooftop solar
    arrays" (Emiliano Bellini), PV Magazine, 9 February 2023.
    Read the article <a href="https://www.pv-magazine.com/2023/02/09/aerial-image-dataset-automatically-maps-rooftop-solar-arrays/">here</a>.
  </li>
</ul>
