---
title: Div Element Does Not Exist on This Website
description: This website—this is a website—does not have that element.
date: 2023-03-14
---

This website does not contain a lot of things. Instead of creating a list of that, I rather tell you what exists on this website by the time I am writing this article:

- HTML
- CSS
- One image
- Favicons
- Two custom font families
- 9 pages: home page, archive page, about page, and 6 blog posts

I still want to highlight some of the things that this website does not have.

- JavaScript
- Cookies
- Trackers
- `<div>`

The first three items can be considered good things. But, `<div>`? Is that something I should be proud of? NO.

> Note: This website does not contain `<div>` elements by the time I am writing this.

Some humans think that having no `<div>` means they have created an accessible website. No `<div>`, no issue. That is **wrong**. Instead, say this: no code, no issue.

Accessibility is not _only_ about using semantic HTML. A lot more things to consider such as:

- **The content of the site**: Does it have good readability level? Does it contain a lot of jargon?
- **The design of the site**: Is it consistent? Does it have enough white space? Does it use a legible custom font?
- **Performance**: Does it contain unused code? Do the images are necessary? If they are necessary, then do you optimize them?

HTML accessibility is one of many things web developers need to consider when creating an accessible website.

Then, how about using `<section>` and `<article>` instead? I see an HTML source code that does not contain any `<div>` and use those two elements instead.

```html
<section class="container">
  <section class="card">
    <article></article>
  </section>
</section>
```

I should ask myself some questions if I decide to have an HTML markup like that.

- **Do I need them?** I probably don't need them. Also, don't use `<section>` and `<article>` for styling purposes.
- **Is there another way to achieve the same result?** Try to find a simpler answer. It is hard to have only one solution to a problem, especially in web development.

`<div>` helps web developers achieve a presentational layout without affecting the accessibility of the website. In other words, it does not have meaning and is good for layout.

For instance, the following HTML markup would be treated the same by assistive technologies, no matter how many `<div>` elements wrap the `<h1>`.

```html
<!-- First example -->
<div>
  <div>
    <div>
      <h1>Hello World</h1>
    </div>
  </div>
</div>

<!-- Second example -->
<div>
  <h1>Hello World</h1>
</div>
```

> Note: Don't use multiple `<h1>` in a page. You should only have one `<h1>` for each page.

Both are treated the same by those tools. Assistive technologies such as screen readers will not pronounce the `<div>` elements to the users. They only care about the semantic HTML. So, based on this example, they only care about the `<h1>`.

The rule I follow is only using and nesting `<div>` when needed. That does not mean when I want to have a semantic HTML page, I have to avoid using `<div>` and replace all the existing `<div>` with `<article>` and `<section>`.

Just like taking a shower. Let's say Tom is a clean person. But, that does not mean he should take shower five times a day. It would be a waste of water. He should take shower before going to work and after coming home. That's it. He does not need to shower at the office.

In summary, `<div>` element is okay to use. Use it properly. Don't nest unnecessarily. No guarantee that if a website has no `<div>` that means no accessibility issues. You should not use `<section>` and `<article>` for presentational purposes. Use `<div>` elements instead.
