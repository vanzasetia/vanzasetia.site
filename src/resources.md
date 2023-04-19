---
layout: layouts/general.njk
title: Resources
description: This page contains a wide range of resources that I found useful.
eleventyNavigation:
  key: Resources
  order: 2
tableOfContents: true
---

## Knowledge

You need to have some knowledge first before you can create something. This is a list of trustworthy resources to get some knowledge.

{% set list = resources.knowledge %}
{% for resource in list %}
  {% include "resources/card.njk" %}
{% endfor %}

## Videos

You can get a lot of information from watching experts talk about web development.

{% set list = resources.videos %}
{% for resource in list %}
  {% include "resources/card.njk" %}
{% endfor %}

## Tools

You can make your development process better and quicker by using these tools.

{% set list = resources.tools %}
{% for resource in list %}
  {% include "resources/card.njk" %}
{% endfor %}

## Screen Readers

It is beneficial to learn how to use screen readers to do manual testing on your website. Here are some videos to help.

{% set list = resources.screenReaders %}
{% for resource in list %}
  {% include "resources/card.njk" %}
{% endfor %}

## Games

Tired of coding? Why don't you try playing some of these games to relax?

{% set list = resources.games %}
{% for resource in list %}
  {% include "resources/card.njk" %}
{% endfor %}
