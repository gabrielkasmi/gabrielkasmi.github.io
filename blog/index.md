---
layout: page
title: Blog
description: Notes on (explainable) AI, computer vision, open data and mapping, with occasional excursions into whatever's coming to my mind.
permalink: /blog/
---

<p>
  Notes on (explainable) AI, computer vision, open data and mapping, with occasional excursions into whatever's coming to my mind.
</p>

{% for post in site.posts %}
<div class="post-preview">
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p class="post-meta">
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %Y" }}</time>
    {% for tag in post.tags %}<span class="tag">{{ tag }}</span>{% endfor %}
  </p>
  <p>{{ post.description }}</p>
  <a href="{{ post.url | relative_url }}">Read the article →</a>
</div>
{% endfor %}
