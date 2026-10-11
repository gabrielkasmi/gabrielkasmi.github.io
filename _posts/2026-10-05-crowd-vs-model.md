---
title: "If in Doubt, Say So"
subtitle: "A crowd of volunteers, a detector, and the value of being allowed to say “not sure”"
description: >-
  Ten volunteers vote on each PV detection. Where they hesitate matches where
  the model is less reliable, and the crowd is more cautious than a confident
  detector: it rejects a few detections the detector is sure about.
date: 2026-10-05
tags: [Crowdsourcing, Photovoltaics, DeepPVMapper]
---

<p>
  In PV Check, volunteers look at an aerial image that depicts a detected PV systems. The interface draws a box in the center of the image and the question asked to the volunteer is <i>is there a PV panel that overlaps with this square ?</i> Three choices are possible: <em>yes</em>, <em>no</em>, or <em>not sure</em>. 
</p>

<p>
  This blog post unwraps the first results coming from the 10,000 first annotations. 165 annotators took part of the collective effort. 971 installations from the database have been validated, accross all departements. This post
  focuses on how the "not sure" button is informative of the intrinsinc difficulty to detect a PV system.
</p>

<h3>1. Ten votes, and what they look like</h3>

<p>
  With ten independent votes on each installation, many cases are clear: all ten voters see an installation, or all ten see something else. But other cases are not, and the votes say so: they split, or most voters tell us they can't tell. Here are four of them.
</p>

<div class="blog-figure-row">
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=125130.2607326143%2C5447671.74781536%2C125210.2607326143%2C5447751.74781536&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking the detection: a rooftop with solar panels" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Unanimous yes.</strong> All ten voters see an installation.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=65532.13907306394%2C6008711.068606492%2C65612.13907306394%2C6008791.068606492&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking the detection: a roof without solar panels" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Unanimous no.</strong> All ten voters don't see an installation.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=641643.8092405829%2C6316247.170125842%2C641723.8092405829%2C6316327.170125842&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking the detection: an ambiguous roof" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Split vote.</strong> Five yes, five no: the picture doesn't settle it.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=177939.08474732985%2C5411121.717348352%2C178019.08474732985%2C5411201.717348352&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking the detection: a roof on which most voters say they are not sure" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Mostly “not sure”.</strong> Seven of the ten voters say so; the other three are split, two yes and one no.</figcaption>
  </figure>
</div>
<p class="figure-note"><small>Aerial images © IGN, loaded from the Géoplateforme, with the white square showing the marker voters see in the game.</small></p>

<p>
  I use the 971 installations that have collected their full set of 10 votes (9,710 votes in total). To summarize how much the voters hesitate on an installation, I use the entropy of its votes: I express it as a percentage of its maximum: 0% when all ten say the same thing, 100% when the three answers are equally likely.
</p>

<h3>2. Where it gets interesting: the model's own uncertainty</h3>

<p>
  Is it the same installations that are hard for people and for the model? To find out, I compare the hesitation of the voters with how uncertain the model is. I don't use the model's precision as a score to beat: I use the published precision, recall and F1 of DeepPVMapper in each département as a gauge of how uncertain the model is there.
</p>

<p>
The estimation of the model uncertainty comes from the recently published preprint that audits the TSO's grid connection data. Click <a href="https://deeppvmapper.fr/content/main-results.html">here</a> to learn more about this project. 
</p>

<figure class="blog-figure">
  <img src="{{ '/blog/img/crowd-vs-model/maps-smooth.webp' | relative_url }}" alt="Two smoothed maps of France on the same color scale. Left: where PV Check voters hesitate most. Right: where the model is least reliable (1 minus F1). Both are darkest in Brittany and the North-West and brightest in the South and the Alps">
  <figcaption>Left: how much voters hesitate (entropy of the votes, in percent of its maximum). Right: how uncertain the model is (1 − F1 of DeepPVMapper, from the publication). Same scale on both maps, smoothed over space. Darker means harder on both maps.</figcaption>
</figure>

<p>
A clear trend appears: the North-West of France, Brittany ahead, is where it is the hardest to find PV systems from aerial images. On the other hand, the South in general and the South-East in particular is the least uncertain, no matter whether you consider a humain or automated rooftop PV detector.
</p>
<p>
The reason is actually quite straightforward: in Brittany, detecting PV systems on slate roofs with a strong tilt can be challenging. On the other hand, in Provence, PV systems are mouned on tile roofs, against which the they stand out clearly. So, in some places, it is intrinsically more difficult to detect PV systems on RGB images.
</p>
<p>
Among the reasons for that may simply be that models rely on annotated images. These images were annotated by humans, so the models inherit our own biases and uncertainties. It could be interesting to see if adding other spectral bands could help the model, or if what a model do is eventually bounded by what knowledge humans can distill into the training dataset.
</p>

<h3>3. When the crowd says no to a confident detector</h3>

<p>
Another feature that stands out is that humans appear to be more cautious than the model. Is it because the humans are too cautious, or because the model is overconfident. Established work tend to support the latter, but let's find out if we recover that in our data.
</p>

<p>
Among the installations in the campaign, about half of them (409) feature a confidence score. How reliable is this score ? To find out, we need to see if this score is <i> calibrated </i>: if it says 0.60, then the detector should be right 60% of the time.
</p>

<p>
  The crowd gives us a way to check it, with the caveat that "ten votes, eight yes" is not ground truth, only the verdict of people looking at the same aerial image. Below, I group the 409 installations by score (the scores start at 0.50, since the detector only keeps detections above that) and show how the crowd judged each group.
</p>

<figure class="blog-figure">
  <img src="{{ '/blog/img/crowd-vs-model/calibration-bars.webp' | relative_url }}" alt="Bars, one per bin of the detector's score from 0.50 to 1.00. Blue: average share of annotators who said yes, from 43% to 86%. On top of each bar, a pale orange block shows the extra share of yes that would be needed to reach the average score of the bin (a black line): +2 points in the first bin, +23 and +26 around 0.65 and 0.75, +12 above 0.95">
  <figcaption>For each bin of the detector's score (409 detections from FRPV), the average share of annotators who said yes (blue). The black line is the average score of the bin; the pale block is the additional share of annotators who should have said yes for the score to be calibrated. Under each bin: its size and a 95% bootstrap interval on the gap.</figcaption>
</figure>

<p>
  The detector is almost always overconfident: in every bin, fewer annotators say yes than the score announces. The gap is relatively fair at the lowest score (0.50) and at the highest. In between, the situation is quite messy and the score cannot be interpreted as a probability of finding a PV panel. The detector orders its detections reasonably well, but the number it attaches to them is too optimistic, and it is the most wrong where it matters most: when it hesitates.
</p>

<p>
  The worst case of miscalibration is a detector that is very sure and wrong. It is rare, but it happens. Among the 183 detections scored 0.97 or more, four are rejected by the majority of voters (six "no" or more), one of them unanimously. That is 2% of them. At 0.95 or more, it is six detections out of 214, and below 0.70 it is a third of them. Here are the 8 detections scored 0.90 or more that a majority of voters reject.
</p>

<div class="blog-figure-row" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr))">
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=246851.69534284595%2C5524025.276645563%2C246931.69534284595%2C5524105.276645563&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking a detection that the detector scores very high and that voters mostly reject" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Score 0.99.</strong> 7 no, 2 not sure, 1 yes.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=-153897.70081884382%2C6238816.95768488%2C-153817.70081884382%2C6238896.95768488&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking a detection that the detector scores very high and that voters mostly reject" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Score 0.98.</strong> 10 no.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=313365.08425089915%2C6149520.234603568%2C313445.08425089915%2C6149600.234603568&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking a detection that the detector scores very high and that voters mostly reject" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Score 0.98.</strong> 8 no, 2 not sure.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=-394403.1632798426%2C6168936.141230439%2C-394323.1632798426%2C6169016.141230439&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking a detection that the detector scores very high and that voters mostly reject" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Score 0.97.</strong> 7 no, 2 not sure, 1 yes.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=-320074.97433678084%2C6040711.419422714%2C-319994.97433678084%2C6040791.419422714&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking a detection that the detector scores very high and that voters mostly reject" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Score 0.96.</strong> 8 no, 1 not sure, 1 yes.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=278149.0294413954%2C6258443.793083411%2C278229.0294413954%2C6258523.793083411&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking a detection that the detector scores very high and that voters mostly reject" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Score 0.95.</strong> 7 no, 3 not sure.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=144145.3780928153%2C6198906.099666656%2C144225.3780928153%2C6198986.099666656&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking a detection that the detector scores very high and that voters mostly reject" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Score 0.92.</strong> 8 no, 2 not sure.</figcaption>
  </figure>
  <figure>
    <div style="position:relative;aspect-ratio:1/1">
      <img src="https://data.geopf.fr/wms-r/wms?SERVICE=WMS&amp;VERSION=1.3.0&amp;REQUEST=GetMap&amp;LAYERS=ORTHOIMAGERY.ORTHOPHOTOS&amp;STYLES=&amp;CRS=EPSG%3A3857&amp;BBOX=-56066.632890253844%2C6243608.129050047%2C-55986.632890253844%2C6243688.129050047&amp;WIDTH=400&amp;HEIGHT=400&amp;FORMAT=image%2Fjpeg" alt="Aerial crop with a white square marking a detection that the detector scores very high and that voters mostly reject" loading="lazy" style="width:100%;height:100%;display:block">
      <span style="position:absolute;top:50%;left:50%;width:34%;aspect-ratio:1/1;transform:translate(-50%,-50%);border:1px solid #fff;border-radius:3px;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))"></span>
    </div>
    <figcaption><strong>Score 0.91.</strong> 7 no, 2 not sure, 1 yes.</figcaption>
  </figure>
</div>
<p class="figure-note"><small>Aerial images © IGN, loaded from the Géoplateforme, with the white square showing the marker voters see in the game.</small></p>

<p>
It appears that improving the model's calibration should be the next feature for the database, maybe even more than improving its accuracy. I'll keep you posted on the future updates. 
</p>

<p>
In the meantime, the crowdsourcing campaign is still going on. The more calibration data, the best. If you'd like to join, the game is accessible accessible <a href="https://deeppvmapper.fr/game/">here</a>.
</p>

<p>
  <em>PV Check exists to check, with the help of volunteers, how reliable the detections of a rooftop PV model really are, and to build a reference against which a detector's confidence can be tested. The full story of why it exists and where it is going is discussed in <a href="../../10/rooftop-solar-needs-an-open-registry/">this post</a>.</em>
</p>