---
layout: layouts/general.njk
title: Resources
description: This page contains a wide range of resources that I found useful.
eleventyNavigation:
  key: Resources
  order: 2
tableOfContents: true
---

{% for resource in resources %}
  ## {{ resource.category }}
  {% include "resources/section.njk" %}
{% endfor %}
