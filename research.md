---
layout: page
title: Research
description: Research of Gabriel Kasmi — explainable AI, remote sensing, and rooftop photovoltaic systems.
permalink: /research/
toc: true
---

<p>
  My research explores how we can <strong>better understand, trust, and deploy deep
  learning systems</strong> to support the energy transition. I work at the
  intersection of <strong>explainable AI, geospatial data, and renewable energy
  systems</strong>, combining theoretical insights with applied work on the causes
  and consequences of rooftop photovoltaic (PV) development.
</p>

<h2 id="highlights">Highlights</h2>

<div class="highlight-block">
  <p>
    <strong><u>Kasmi, G.</u>, Brunetto, A., Fel, T., Parekh, J. (2025).</strong>
    One Wave To Explain Them All: A Unifying Perspective On Feature Attribution.
    <i>Forty-second International Conference on Machine Learning (ICML)</i>.
    <a href="https://proceedings.mlr.press/v267/kasmi25a.html">Link</a>.
  </p>
  <p>
    <strong><u>Kasmi, G.</u>; Dubus, L; Saint-Drenan, Y.-M.; Blanc, P. (2025)</strong>
    Space-scale exploration of the poor reliability of deep learning models: the case
    of the remote sensing of rooftop photovoltaic systems.
    <i>Environmental Data Science 4</i>(e22).
    <a href="https://doi.org/10.1017/eds.2025.13">Link</a>.
  </p>
  <p>
    <strong><u>Kasmi, G.</u>, Saint-Drenan, Y. M., Trebosc, D., Jolivet, R., Leloux, J., Sarr, B., & Dubus, L. (2023).</strong>
    A crowdsourced dataset of aerial images with annotated solar photovoltaic
    arrays and installation metadata. <i>Scientific Data 10</i>(1), 59.
    <a href="https://doi.org/10.1038/s41597-023-01951-4">Link</a>.
  </p>
</div>

<p>These are the papers that best summarize what I've been working on. The full record is below.</p>

<h2 id="current">Reliable and Scalable Deep Learning for the Energy Transition</h2>

<p>This work bridges <strong>algorithm design, large-scale mapping, and applied
  energy analytics</strong>, and is organized along three main threads. I highlight
  future research directions for each thread. If one of these directions is of
  interest to you, feel free to contact me.
</p>

<h3>Remote Sensing of Rooftop Photovoltaic Systems</h3>
<p>
  A large share of PV capacity is distributed across rooftops, but these systems
  are often poorly mapped and monitored. In France, this stems from
  <strong>fragmented information</strong> spread across stakeholders, each with
  their own priorities and data formats.
</p>
<p>
  The core of my thesis focused on mapping rooftop PV systems and building a
  nationwide registry. I developed
  <strong><a href="{{ '/projects/#deeppvmapper' | relative_url }}">DeepPVMapper</a></strong>,
  an algorithm for detecting and characterizing rooftop PV systems at scale, and
  released an open-source library,
  <strong><a href="https://github.com/gabrielkasmi/pypvroof">PyPVRoof</a></strong>,
  for further development. Using these tools, we mapped over 500,000 systems in
  France and validated the results against existing datasets — showing their
  potential to <strong>bridge critical information gaps</strong> as PV deployment
  accelerates.
</p>
<p>
  Today, my focus is on making these mapping methods more actionable, reliable,
  and computationally efficient. One emerging direction is designing an
  <em>optimal pipeline</em> that balances accuracy, computational cost, and data
  availability. I'm also exploring mapping in new contexts, particularly in
  <strong>developing countries</strong> where PV is often adopted informally.
</p>
<p><strong>Future research directions:</strong></p>
<ul>
  <li>Optimal pipelines for efficient and accurate PV mapping.</li>
  <li>Multi-label mapping for richer characterization of rooftop systems.</li>
</ul>

<h3>Methods: Reliability and Interpretability of Machine Learning Models</h3>
<p>
  The use of deep learning for computer vision is now commonplace. The real
  challenge lies not in implementation, but in <strong>deploying these models at
  scale and trusting their predictions</strong>.
</p>
<p>
  My PhD was designed as a cookbook to improve the reliability of neural networks
  applied to the remote sensing of PV systems. I notably introduced a new
  explainability method, the
  <strong><a href="https://openreview.net/forum?id=112o4j4VCY">Wavelet Scale
  Attribution Method (WCAM, XAI in Action workshop @ NeurIPS 2023)</a></strong>,
  which reveals whether models rely on shapes, textures, or other structural
  features — offering richer insights than standard pixel-based saliency maps.
</p>
<p>
  We later expanded this into the
  <strong><a href="{{ '/projects/#wam' | relative_url }}">Wavelet Attribution
  Method (WAM, ICML 2025)</a></strong>, which unifies feature attribution across
  different modalities (images, audio, etc.). Looking ahead, I'm exploring how to
  select meaningful <em>feature attribution domains</em> (with wavelets as one
  example) and whether we can combine <strong>concept-based explanations</strong>
  (powerful but abstract) with the practicality of feature attribution.
</p>
<p><strong>Future research directions:</strong></p>
<ul>
  <li>Revisiting the shape and texture bias (see
    <a href="https://openreview.net/pdf?id=Bygh9j09KX">the paper by Geirhos et
    al, 2019</a>) using WAM.</li>
  <li>Generalizing the generalization: I believe we can show that feature
    attribution can and should be made in other domains than the input domain
    (<a href="https://gabrielkasmi.github.io/wam/static/content/application.html">see
    the What's Next section here</a>), the wavelet domain being one example.
    Domains equipped with a sense of concepts may be particularly interesting.
    Second, WAM generalized gradient-based feature attribution, but I think that
    <i>any</i> feature attribution method can be generalized. To tackle this
    second point, I would rather adopt a theoretical perspective.</li>
</ul>

<h3>Applications: PV Power Estimation and Socio-Economic Insights</h3>
<p>
  Beyond methodological work, I apply these tools to tackle <strong>real-world
  energy challenges</strong>. The ultimate goal of rooftop PV mapping is to
  improve <strong>observability</strong>, enabling grid operators to produce
  precise estimates of rooftop PV generation.
</p>
<p>
  The final chapter of my thesis introduced a simplified method for PV production
  estimation (see the paper <a href="https://www.mdpi.com/1996-1073/17/17/4353">here</a>).
  We demonstrated that this method slightly outperforms the one currently used by
  the French transmission system operator (TSO) and, importantly, better accounts
  for <strong>self-consumption practices</strong>.
</p>
<p>
  I have also co-supervised work leveraging DeepPVMapper data to analyze
  <strong>socio-economic patterns</strong> in PV adoption, from local to national
  scales.
</p>
<p><strong>Future research directions:</strong></p>
<ul>
  <li>The impact of self-consumption on PV power prediction.</li>
  <li>PV deployment vs. targets: are we on track to meet national goals?</li>
</ul>

<h2 id="full-record">Full Publication Record</h2>

<h3>Publications in peer-reviewed journals</h3>
<ul class="pub-list">
  <li>
    <u>Kasmi, G.</u>; Dubus, L; Saint-Drenan, Y.-M.; Blanc, P. (2025)
    Space-scale exploration of the poor reliability of deep learning models: the
    case of the remote sensing of rooftop photovoltaic systems.
    <i>Environmental Data Science 4</i>(e22).
    <a href="https://doi.org/10.1017/eds.2025.13">Link</a>.
  </li>
  <li>
    <u>Kasmi, G.</u>; Touron, A.; Blanc, P.; Saint-Drenan, Y.-M.; Fortin, M.; Dubus, L. (2024)
    Remote-Sensing-Based Estimation of Rooftop Photovoltaic Power Production Using
    Physical Conversion Models and Weather Data. <i>Energies 17</i>(17), 4353.
    <a href="https://doi.org/10.3390/en17174353">Link</a>.
  </li>
  <li>
    <u>Kasmi, G.</u>, Saint-Drenan, Y. M., Trebosc, D., Jolivet, R., Leloux, J., Sarr, B., & Dubus, L. (2023).
    A crowdsourced dataset of aerial images with annotated solar photovoltaic
    arrays and installation metadata. <i>Scientific Data 10</i>(1), 59.
    <a href="https://doi.org/10.1038/s41597-023-01951-4">Link</a>.
  </li>
</ul>

<h3>International conference proceedings (peer reviewed)</h3>
<ul class="pub-list">
  <li>
    <u>Kasmi, G.</u>, Brunetto, A., Fel, T., Parekh, J. (2025).
    One Wave To Explain Them All: A Unifying Perspective On Feature Attribution.
    <i>Forty-second International Conference on Machine Learning (ICML)</i>.
    <a href="https://proceedings.mlr.press/v267/kasmi25a.html">Link</a>.
  </li>
</ul>

<h3>Workshops (peer reviewed)</h3>
<ul class="pub-list">
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2023).
    Assessment of the Reliability of a Model's Decision by Generalizing
    Attribution to the Wavelet Domain. <i>In XAI in Action: Past, Present, and
    Future Applications</i>. <a href="https://openreview.net/forum?id=112o4j4VCY">Link</a>.
  </li>
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2023).
    Can We Reliably Improve the Robustness to Image Acquisition of Remote
    Sensing of PV Systems?. <i>In Tackling Climate Change with Machine Learning
    workshop at NeurIPS 2023</i>. <a href="https://arxiv.org/abs/2309.12214">Link</a>.
  </li>
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Blanc, P., & Saint-Drenan, Y. M. (2022).
    Towards unsupervised assessment with open-source data of the accuracy of
    deep learning-based distributed PV mapping. <i>In MACLEAN: MAChine Learning
    for EArth ObservatioN Workshop co-located with the European Conference on
    Machine Learning and Principles and Practice of Knowledge Discovery in
    Databases (ECML/PKDD 2022)</i>. <a href="https://arxiv.org/abs/2207.07466">Link</a>.
  </li>
</ul>

<h3>Oral presentations</h3>
<ul class="pub-list">
  <li>
    <u>Kasmi, G.</u>, Saint-Drenan, Y. M., Dubus, L. & Blanc, P. (2025).
    DeepPVMapper: télédétection à l'échelle nationale des installations PV sur
    toiture. <i>In Journées Nationales du Photovoltaïque (JNPV), Strasbourg,
    France</i>.
    <a href="https://docs.google.com/presentation/d/1iwkDNqpftcyklbhLWQRz6fP2TT0DPKjc/edit?usp=drive_link&ouid=105935550887435734242&rtpof=true&sd=true">Slides.</a>
  </li>
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2025).
    Space-scale exploration of the poor reliability of deep learning models: the
    case of the remote sensing of rooftop photovoltaic systems.
    <i>In Machine Learning for Sustainable Power Systems (ML4SPS) workshop at
    ECML-PKDD, Porto, Portugal</i>.
    <a href="https://docs.google.com/presentation/d/1ZElKEbWTjk0RzXjdfBR5vY8CcymepGn9/edit?usp=drive_link&ouid=105935550887435734242&rtpof=true&sd=true">Slides.</a>
  </li>
  <li>
    <u>Kasmi, G.</u>, Touron, A., Blanc, P. Saint-Drenan, Y.-M.,& Dubus, L. (2025).
    Enhancing Rooftop PV Observability in France: A Comparative Evaluation of
    Physics-based methods with the TSO's approach. <i>In International
    Conference in Energy and Meteorology (ICEM), Padova, Italy</i>.
    <a href="https://www.wemcouncil.org/ICEMs/ICEM2025/ICEM2025_20250603_Giganti_1500_Kasmi.pdf">Slides.</a>
  </li>
  <li>
    <u>Kasmi, G.</u>, Touron, A., Blanc, P. Saint-Drenan, Y.-M., Fortin, M.,& Dubus, L. (2023).
    Enhancing regional PV power estimation using physics-based models, solar
    irradiance data and deep learning. <i>In International Conference in Energy
    and Meteorology (ICEM), Padova, Italy</i>.
    <a href="https://www.wemcouncil.org/ICEMs/ICEM2023/ICEM2023_20230628_SCROVEGNI_1400_KASMI.pdf">Slides.</a>
  </li>
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2022).
    Leveraging earth observation data and deep learning to estimate the PV
    output in France. <i>In MACLEAN Workshop @Cap/RFIAP, Vannes, France</i>.
    <a href="https://caprfiap2022.sciencesconf.org/data/pages/pitch_kasmi.pdf">Slides</a>.
  </li>
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2022).
    Assessment of the potential of Earth observation data and deep convolutional
    neural networks to improve the estimation and forecast of the solar power
    production in France. <i>PVPS Tasks 16 experts meeting, 2022,
    Sophia-Antipolis, France.</i>
  </li>
</ul>

<h3>Position papers, working papers</h3>
<ul class="pub-list">
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2024).
    Leveraging Artificial Intelligence to Improve the Integration of
    Photovoltaic Energy into the Grid. <i>TTI 1.5 Working papers</i>.
    <a href="https://doi.org/10.23646/9nev-py65">Link</a>
  </li>
</ul>

<h3>Preprints</h3>
<ul class="pub-list">
  <li>
    <u>Kasmi, G.</u>, Saint-Drenan, Y. M., Dubus, L., & Blanc, P. (2026).
    Nationally Consistent, Locally Incomplete: A Bayesian Remote-Sensing Audit
    of Rooftop Photovoltaic Registries. <i>arXiv preprint arXiv:2609.16294</i>.
    <a href="https://arxiv.org/abs/2609.16294">Link</a>.
  </li>
  <li>
    <u>Kasmi, G.</u> (2026).
    OpenPVMapper: A Multi-source, Nationwide Database of Rooftop
    Photovoltaic Systems in France. <i>arXiv preprint arXiv:2607.25153</i>.
    <a href="https://arxiv.org/abs/2607.25153">Link</a>.
  </li>
  <li>
    Mbobda-Kuate, K., <u>Kasmi, G.</u> (2026)
    Is Bigger Always Better? Efficiency Analysis in Resource-Constrained Small
    Object Detection. <i>arXiv preprint arXiv:2603.02142</i>.
    <a href="https://arxiv.org/abs/2603.02142">Link</a>.
  </li>
  <li>
    <u>Kasmi, G.</u>, Touron, A., Dubus, L., Saint-Drenan, Y.-M., & Blanc, P. (2025).
    Balancing Robustness and Accuracy in Rooftop PV Estimation: Benchmarking
    the French TSO's Approach and Physics-Based Models. <i>SSRN preprint
    5385856</i>. <a href="https://ssrn.com/abstract=5385856">Link</a>.
  </li>
  <li>
    Mehiyddine, S., & <u>Kasmi, G.</u> (2025).
    Understanding the socio-economic patterns driving the adoption of rooftop
    photovoltaic systems: a preliminary literature review. <i>HAL preprint
    halshs-05121399</i>. <a href="https://halshs.archives-ouvertes.fr/halshs-05121399">Link</a>.
  </li>
  <li>
    Trémenbert, Y., <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2023).
    PyPVRoof: a Python package for extracting the characteristics of rooftop PV
    installations using remote sensing data. <i>arXiv preprint
    arXiv:2309.07143</i>. <a href="https://arxiv.org/abs/2309.07143">Link</a>.
  </li>
</ul>

<h3>Posters</h3>
<ul class="pub-list">
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2025).
    Mapping the Invisible: A Remote Sensing Audit of Rooftop PV Data in France.
    <i>In AI + Environment Summit, Zurich, Switzerland</i>.
  </li>
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2022).
    Assessment of the potential of Earth observation data and deep
    convolutional neural networks to improve the estimation and forecast of
    the solar power production in France. <i>In 4th MADICS Symposium, Lyon,
    France</i>.
  </li>
  <li>
    <u>Kasmi, G.</u>, Dubus, L., Saint-Drenan, Y. M., & Blanc, P. (2021).
    Solar Array Detection on Aerial Photography Based on Convolutional Neural
    Networks: Image of the Solar Array Characteristics and Image Backgrounds
    on the Out-of-domain Generalization. <i>In SophIA Summit, Sophia-Antipolis,
    France</i>.
  </li>
</ul>

<h3 id="misc-works">Miscellaneous works</h3>
<ul class="pub-list">
  <li><u>Kasmi, G.</u>, Dubus, L, Saint-Drenan, Y.-M. & Blanc, P. Looking for a
    frequency-based principle to predict the sensitivity of convolutional
    neural networks to Gaussian image perturbations.</li>
</ul>
<p>
  This work in process was presented during the PhD Forum at ECML-PKDD 2022. It
  is a snapshot of our early attempts to use Fourier theory to explain the
  (lack of) robustness of a CNN classifier. This work later led to the WCAM.
  The manuscript is accessible
  <a href="https://drive.google.com/file/d/1ebLL5pKBaO2bIvoEQJCbQbala3D96d-4/view?usp=drive_link">here</a>
  and the slides of the presentation
  <a href="https://drive.google.com/file/d/1w84tL_hcle8P6EYiwON3A7H1RyHFOVsz/view?usp=drive_link">here</a>.
</p>

<h2 id="peer-review">Reviewer</h2>

<h3>Journals</h3>
<p>
  <a href="https://www.nature.com/ncomms/">Nature Communications</a>,
  <a href="https://www.nature.com/sdata/">Scientific Data</a>,
  <a href="https://www.sciencedirect.com/journal/renewable-energy">Renewable Energy</a>,
  <a href="https://www.nature.com/srep/">Scientific Reports</a>,
  <a href="https://ietresearch.onlinelibrary.wiley.com/journal/17521424">IET Renewable Power Generation</a>,
  <a href="https://onlinelibrary.wiley.com/journal/2367198x">Solar RRL</a>,
  <a href="https://link.springer.com/journal/41976">Remote Sensing in Earth Systems Sciences</a>,
  <a href="https://www.mdpi.com/journal/land">Land</a>
</p>

<h3>Conferences</h3>
<p>
  <strong>NeurIPS</strong>: Ethics reviewer, Conference
  (<a href="https://openreview.net/group?id=NeurIPS.cc/2026/Conference/Ethics_Reviewers">2026</a>);
  Ethics reviewer, Benchmark and Datasets Track
  (<a href="https://neurips.cc/Conferences/2024">2024</a>,
  <a href="https://neurips.cc/Conferences/2025">2025</a>), renamed Evaluations
  and Datasets Track in
  <a href="https://openreview.net/group?id=NeurIPS.cc/2026/Evaluations_and_Datasets_Track/Ethics_Reviewers">2026</a>;
  Reviewer, Position Paper Track
  (<a href="https://openreview.net/group?id=NeurIPS.cc/2026/Position_Paper_Track/Reviewers">2026</a>).
</p>

<h3>Workshops</h3>

<h4>Tackling Climate Change with Machine Learning</h4>
<p>
  <a href="https://openreview.net/group?id=NeurIPS.cc/2026/Workshop/TCCML/Reviewers">NeurIPS 2026</a>,
  <a href="https://www.climatechange.ai/events/neurips2025">NeurIPS 2025</a>,
  <a href="https://www.climatechange.ai/events/iclr2025">ICLR 2025</a>,
  <a href="https://www.climatechange.ai/events/neurips2024">NeurIPS 2024</a>
  (emergency reviewer),
  <a href="https://www.climatechange.ai/events/iclr2024">ICLR 2024</a>.
</p>

<h4>Interpretability</h4>
<p>
  <a href="https://openreview.net/group?id=colmweb.org/COLM/2026/Workshop/AIW/Reviewers">Actionable
  Interpretability Workshop at COLM 2026</a>,
  <a href="https://actionable-interpretability.github.io/">Actionable
  Interpretability Workshop (ICML 2025)</a>,
  <a href="https://interpretable-ai-workshop.github.io/">Interpretable AI: Past,
  Present and Future workshop (NeurIPS 2024)</a>,
  <a href="https://xai-in-action.github.io/">XAI in Action workshop (NeurIPS 2023)</a>.
</p>

<h4>Computer Vision</h4>
<p>
  <a href="https://sites.google.com/view/wicv-cvpr-2024/">Women in Computer
  Vision workshop (CVPR 2024)</a>.
</p>

<nav class="section-nav">
  <a href="{{ '/research/phd-thesis/' | relative_url }}">PhD Thesis →</a>
  <a href="{{ '/research/misc/' | relative_url }}">Misc →</a>
</nav>
