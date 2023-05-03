---
title: Beginner Guides for Applying Webmention
description: I can not find a friendly guide for using Webmention. So, I create one.
date: 2023-05-03
tocMaxLevel3: true
---

## Webmention is hard

Learning Webmention can be like going to another country without any purpose. You do not know what to do.

This guide exists to help you—and myself—to learn about Webmention.

## What is Webmention?

Webmention is a protocol that enables interactions between websites such as reposting, commenting, bookmarking, liking, and others.

## Sign-in to Webmention.io

First, you need to sign in to [Webmention.io](https://webmention.io/). Then, if you click the sign-in button, you will get an error page.

{% image "./indie-login-error-page.png", "IndeLogin.com error page. It gives an alert, that says they could not authenticate you using your website." %}

The page says they could not find any way to know that you are the owner of your website. Then, you need to tell them.

### Tell IndieLogin.com that you are the owner of the website

You can tell them by having `<a>` element with `rel="me"` attribute. Then, the Uniform Resource Locator (URL) must be one of these services:

- Twitter
- GitHub
- Email address
- PGP key

If you have a Twitter account, then you can add a link to your Twitter account on the home page.

```html
<a href="https://twitter.com/[USERNAME]" rel="me">Twitter</a>
```

After that, you add your website URL to your Twitter profile. This will prove to them that you own the website and the Twitter account.

If you decide to use GitHub, then you can have a link to your GitHub account on the home page.

```html
<a href="https://github.com/[USERNAME]" rel="me">GitHub</a>
```

After that, you need to add your website URL to your GitHub profile—the same as Twitter.

If you decide to use your email address, then you can have a link to your email address on the home page.

```html
<a href="mailto:[EMAIL_ADDRESS]" rel="me">My email</a>
```

After that, IndieLogin will send you an email to verify that you own the email.

I do not know about the PGP key. If you decide to use this you can see this guide — [How to Start Using IndieLogin.com #pgp](https://indielogin.com/setup#pgp)

I chose to tell them that I am the owner of the VanzaSetia.site by putting my GitHub URL inside the `<head>`.

```html
<link href="https://github.com/[USERNAME]" rel="me">
```

To keep it simple, you should choose one approach.

Learn more about IndieLogin — [How to Start Using IndieLogin.com](https://indielogin.com/setup)

I do not remember what happens once I got verified. But, you need to go back to the Webmention.io website and then visit your settings page — [Settings](https://webmention.io/settings).

If you can see the settings page, then you are good to go.

{% image "./webmention-settings-page.png", "The settings page of Webmention" %}

## Add Webmention to your website

Next, you need to add the two `<link>` tags to every page on your website.

```html
<link rel="webmention" href="https://webmention.io/vanzasetia.site/webmention" />
<link rel="pingback" href="https://webmention.io/vanzasetia.site/xmlrpc" />
```

If you copy-paste from here, you need to replace `vanzasetia.site` with your own domain.

Once that is done, you can start receiving Webmention.

## Nobody is sending you a Webmention

If you do not have a mention, I can give you a mention on your website. You can [send me an email](mailto:venusbumi2@gmail.com).

Then, I will send a mention from my testing website — [Totobor — Testing Webmention](https://testing-webmention-to-vanzasetia-site.netlify.app/).

## See the mentions that you got

On the settings page, you copy-paste the first URL from the "Mentions Feed" section. 

Here is mine for example — [Webmention feed](https://webmention.io/api/mentions.html?token=EYTzYK2WnWAPZHFOSJV9ew)

## Gather mentions from your social media accounts

You can do that by using [Bridgy](https://brid.gy/).

You need to connect to one of the listed social media platforms on the Bridgy homepage.

I chose Twitter and then Bridgy gather mentions from my Twitter account. **Now, it is no longer possible**. So I changed to Mastodon.

If you choose Mastodon then you need to add your website to your Mastodon. After that, you will get a permission page. Read it. Then, if you agree with what Bridgy can do, accept the permission.

Next, you can visit your Bridgy page to make Bridgy gather data from your Mastodon. You need to click the "Crawl now" button.

As a side note, I do not remember what the page looks like when you visit it the first time. But, I am pretty sure there is a "Crawl now" button.

## Control your mentions

You can control them through the dashboard page — [Dashboard](https://webmention.io/dashboard).

Right there, you can delete the mentions that you already got. So if someone gives you an unsolicited comment, you can delete it.

## Block a domain

You can block a domain—or more—by visiting the blocklist page — [Blocklist Settings](https://webmention.io/settings/blocks).

## How about Web Hooks?

I do not understand it.

## Display the mentions that you already get on your website

You can show the mentions by using the following code snippet to get the JSON.

```javascript
const getMentions = async () => {
  const domain = "vanzasetia.site";
  const token = "EYTzYK2WnWAPZHFOSJV9ew";
  const response = await fetch(
    `https://webmention.io/api/mentions.jf2?domain=${domain}&token=${token}&per-page=1000&page=0`
  );
  const json = await response.json();
  console.log(json);
  return json;
};
getMentions();
```

Replace the `domain` variable with your domain. Then, replace the `token` variable with your token or API key.

After that, you can do something with it.

As a side note, I use Eleventy to build my website and I use a plugin to show the mentions. So, I do not know how to exactly show mentions with JavaScript.

[CodeFoodPixels/eleventy-plugin-webmentions: An eleventy plugin to fetch webmentions and helper methods to display them](https://github.com/CodeFoodPixels/eleventy-plugin-webmentions)

## Send Webmention

You can send a Webmention from your website. You do not have to rely on Mastodon or any social media platforms to like, comment, and repost a website.

You need to tell Webmention.io that it is a Webmention or mention. To do that, you use microformats.

Microformats are HTML class names that you can use to markup your mention.

Learn more about microformats:

- [Microformats Wiki](https://microformats.org/wiki/Main_Page)
- [Barnaby Walters • Getting started with microformats2](https://waterpigs.co.uk/articles/getting-started-with-microformats2/)

Then, you can send the mention through `https://webmention.io/[DOMAIN]/webmention`.

You should change the `[DOMAIN]` to the domain of the website that you want to mention or the target URL. For example, if you want to send a mention to VanzaSetia.site, then you should send it through `https://webmention.io/vanzasetia.site/webmention`—[Hosted Webmention Service | The Webmention Endpoint for VanzaSetia.site](https://webmention.io/vanzasetia.site/webmention)'.

You must know that `https://webmention.io/vanzasetia.site/webmention` and `https://webmention.io/vanzasetia.site/webmention/` are **different**. If you add a forward slash at the end of the URL, it will give you a "Not Found" page.

### Comment on a website

The markup that I use to comment on one of my blog posts—[Better — Vanza Setia](https://vanzasetia.site/blog/better/)—is from my testing website.

```html
<div class="h-entry">
  <div class="h-card p-author">
    <img
      src="/t.jpg"
      alt="Totobor"
      width="72"
      height="72"
      class="u-photo"
    />
    <p class="p-name">
      <a
        href="/"
        class="u-url"
        rel="me"
      >
        Totobor
      </a>
    </p>
  </div>
  <h2 class="p-name">Simple yet motivating</h2>
  <p>
    Published on
    <time class="dt-published" datetime="2023-04-26">
      26 April 2023
    </time>
  </p>
  <div>
    <div class="e-content">
      <p>
        This blog post is very simple and yet motivating me to be better.
        To be better you do not a lot of things. Just be better.
      </p>
    </div>
    <p>
      I commented on
      <a
        href="https://vanzasetia.site/blog/better/"
        class="u-in-reply-to"
      >
        Better — Vanza Setia
      </a>
    </p>
    <p>
      The link for this comment:
      <a
        href="/another-comment.html"
        class="u-url"
      >
        Another Comment — Totobor
      </a>
    </p>
  </div>
</div>
```

The `h-entry` class indicates that this is a microformatted markup.

The `h-card p-author` classes indicate that this is the author's profile.

The `u-photo` **inside** the `h-card p-author` indicates the name of the author.

The `p-name` class **inside** the `h-card p-author` indicates the name of the author.

The `u-url` **inside** the `h-card p-author` indicate the website of the author.

The `p-name` class indicates the title of the comment.

The `dt-published` class on a `<time>` element indicates when the comment is published. The value of the `datetime` attribute must follow one of the formats from The World Wide Web Consortium (W3C) — [Date and Time Formats](https://www.w3.org/TR/NOTE-datetime).

The `e-content` class indicates the comment from the author.

The `u-in-reply-to` class on `<a>` indicates the that this is **a reply** to another post or anything. The `href` attribute contains the URL of the post you are replying to.

The `u-url` class for the `h-entry` indicates the URL for the comment.

### Like a website

The markup that I use to like VanzaSetia.site from my testing website.

```html
<div class="h-entry">
  <div class="h-card p-author">
    <img
      src="/t.jpg"
      alt="Totobor"
      width="72"
      height="72"
      class="u-photo"
    />
    <p class="p-name">
      <a
        href="/"
        class="u-url"
        rel="me"
      >
        Totobor
      </a>
    </p>
  </div>
  <p>
    I liked
    <a href="https://vanzasetia.site/" class="u-like-of">
      VanzaSetia.site home page
    </a>
  </p>
  <p>
    The link for this like (or where I like VanzaSetia.site):
    <a
      href="/like.html"
      class="u-url"
    >
      First Like with Webmention — Totobor
    </a>
  </p>
</div>
```

The difference between the comment and the like microformats.

- No need to tell the time when you like the website
- No `e-content` microformat
- Use `u-like-of` instead of `u-in-reply-to`

### Repost a website

The markup that I use to repost VanzaSetia.site from my testing website.

```html
<div class="h-entry">
  <div class="h-card p-author">
    <img
      src="/t.jpg"
      alt="Totobor"
      width="72"
      height="72"
      class="u-photo"
    />
    <p class="p-name">
      <a
        href="/"
        class="u-url"
        rel="me"
      >
        Totobor
      </a>
    </p>
  </div>
  <p>
    I reposted
    <a href="https://vanzasetia.site/" class="u-repost-of">
      VanzaSetia.site
    </a>
  </p>
  <p>
    The link for this like:
    <a
      href="/repost.html"
      class="u-url"
    >
      Repost with Webmention — Totobor
    </a>
  </p>
</div>
```

The repost markup is similar to the like markup. The only difference is using `u-repost-of` instead of `u-like-of`.

### Validate your microformat

You can validate it using IndieWebify.Me website. It also provides you with a guide about Webmention.

[IndieWebify.Me - a guide to getting you on the IndieWeb](https://indiewebify.me/)

## Source code of my testing website

The source code is on GitHub — [vanzasetia/testing-webmention](https://github.com/vanzasetia/testing-webmention)

Live site — [Totobor — Testing Webmention](https://testing-webmention-to-vanzasetia-site.netlify.app/)

## Caveats

I learned this the hard way, as Webmention did not give a clear error message.

### Sensitive string

When you are trying to input the target URL, make sure that the URL on the markup is the **exact** same. For example, **https://vanzasetia.site** and **https://vanzasetia.site/** are different.

You should make sure that **the target URL is the same as the URL you want to mention**.

Again, you should remember that `https://webmention.io/vanzasetia.site/webmention` and `https://webmention.io/vanzasetia.site/webmention/` are **different**. The URL with a forward slash at the end will give you a "Not Found" page.

### Specificity

For example, if you have `<a href="https://vanzasetia.site/" class="u-like-of">` on line 8, then `<a href="https://vanzasetia.site/" class="u-repost-of">` on line 9, the Webmention will think that you want to repost instead of liking the website.

```html
<p>
  <a href="https://vanzasetia.site/" class="u-like-of">
    I like VanzaSetia.site
  </a>
  <a href="https://vanzasetia.site/" class="u-repost-of">
    I actually repost VanzaSetia.site
  </a>
</p>
```

The above markup will result in a repost of VanzaSetia.site—instead of a like.

### I can not do many mentions at once

I do not know how to do many mentions on a single page. Maybe, that is not possible or I am missing something.

### Edit your comment

If you want to change the comment that you have sent, you can do that by sending it again with the same source URL and target URL with the edited comment.

### Spam

Everyone can spam your website with unsolicited mentions such as promoting their products or services.

Remember, you have the power to delete their mentions and block their websites from sending mentions to your website in the future.

## Webmention is still hard

That is all I can share.

Webmention is awesome overall. The only thing that is missing is a simple tutorial. I do not find a good video tutorial about Webmention on YouTube.

I wish there is a complete video tutorial on YouTube about Webmention with HTML, CSS, and JavaScript. This way, a lot of people can understand about it and easily add Webmention to their websites.

## Webmention resources

[Joining the IndieWeb with Webmentions and Microformats](https://stevenwoodson.com/blog/joining-the-indieweb-with-webmentions-and-microformats/)

[Sending your First Webmention from Scratch • Aaron Parecki](https://aaronparecki.com/2018/06/30/11/your-first-webmention)

[microformats2 - Microformats Wiki](http://microformats.org/wiki/microformats2)

Example of `h-card` microformats — [h-card - Microformats Wiki](http://microformats.org/wiki/h-card)

Example of `h-entry` microformats — [h-entry - Microformats Wiki](http://microformats.org/wiki/h-entry)

Examples of IndieWeb — [Webmention - IndieWeb](https://indieweb.org/Webmention)

[IndieWeb](https://indieweb.org/)

[The Webmention Specification](https://www.w3.org/TR/webmention/)

A validator to help you test your Webmention implementation — [Webmention Rocks!](https://webmention.rocks/)

[PHP Microformats Parser](http://php.microformats.io/)

[mention.tech](https://mention.tech/)

[aaronpk/webmention.io: Easily enable webmentions and pingbacks on any web page](https://github.com/aaronpk/webmention.io)

[Webmention Implementations](https://webmention.net/implementations/)
