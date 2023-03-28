---
title: Straightforward Progressive Enhancement
description:
  Applying progressive enhancement can make sure that all your users get good
  experience. It does not have to be the same experience. But, it has to be a
  good experience.
date: 2023-02-19
date: 2023-03-28
---

## CSS error handling

CSS is good at handling errors. If there is something the browser does not know, it will simply skip that line of code and continue to execute the rest of the code.

You should use this as a way of applying progressive enhancement.

For example, you want to use the `ch` unit, but you have a group of people who use your site and their browsers do not support the `ch` unit. You can give them a fallback by using the `rem` unit instead.

```css
.container {
  max-width: 30rem;
  max-width: 60ch;
}
```

Browsers that don't support the `ch` unit will treat the above code as follows:

```css
.container {
  max-width: 30rem;
  /* max-width: 60ch; */
}
```

Browsers that support `ch` unit will use the `60ch` value as the `max-width`.

```css
.container {
  max-width: 30rem;
  max-width: 60ch; /* higher specificity */
}
```

Related links for this section:

- [ch (character) unit | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/ch-unit)
- [rem (root em) units | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/rem)

## Make sure hidden elements are hidden

If an element has a `hidden` attribute, it must be hidden. To make sure that will happen, you can do the following:

```css
[hidden] {
  display: none !important;
}
```

## Images without alternative text should not be ignored

Decorative images should not be read by screen readers. You should leave the alternative text empty for such images. Then, you can enhance it by adding `aria-hidden="true"` attribute to make sure that no screen readers will pronounce the image.

```html
<img src="/decorative.jpg" alt="" aria-hidden="true" />
```

Adding `aria-hidden="true"` is only for enhancement to macOS `10.14.4` to hide a decorative image to VoiceOver when paired with Chrome. That's okay. Other users will not have any impact.

Reference: [Contextually Marking up accessible images and SVGs](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html)

## No motion first approach

Any motion that you want to add should be added inside the `@media (prefers-reduced-motion: no-preference)`. This way, the transitions or animations will only be visible to the users that choose to see them. Also, those users that use browsers that don't support the query will not see the animations.

```css
@media (prefers-reduced-motion: no-preference) {
  /* Add animation or transition or both */
}
```

## Use @supports query

You can use `@supports` query to give users that support the feature a better experience.

You need to keep in mind to not use the `not` operator. The problem can happen when the browsers support the feature but do not support the `@supports` query.

Take a look at the following code:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@supports not (display: grid) {
  .container {
    max-width: 32rem;
    margin-right: auto;
    margin-left: auto;
  }
}
```

The users that don't support both CSS Grid and `@supports` query will have no styling.

You should do the following instead:

```css
.container {
  max-width: 32rem;
  margin-right: auto;
  margin-left: auto;
}

@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: unset;
    margin-right: unset;
    margin-left: unset;
  }
}
```

Another thing to keep in mind is to make sure to check the support table. The purpose is to prevent something that is supported before `@supports` query from getting ignored.

For example, `border-radius` is getting supported before the `@supports` query.

```css
@supports (border-radius: 1em) {
  .card {
    border-radius: 1em;
  }
}
```

For the above code to be executed, the browsers need to support both of them to have a rounded card. The users should be able to get a rounded card without supporting the `@supports` query.

You should use the "Can I Use" website to check the support for the `@supports` query and the feature that you want to use.

Related links for this section:

- [CSS3 Border-radius (rounded corners) | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/border-radius)
- [CSS Feature Queries | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/css-featurequeries)

## JavaScript for enhancement

You should use JavaScript to make the user experience better instead of replacing the native features whenever possible.

For example, if the website has a hamburger menu, then you can provide another experience for users that don't have JavaScript. For the users that have JavaScript, they will get a hamburger menu while the users that don't have JavaScript will have visible navigation links.

See the example in an action — [Craft Designs That Make Real Impact - Designo](https://officialdesigno.netlify.app/)

Try to view the site on mobile view and toggle the JavaScript.

Related resource — [Everyone has JavaScript, right?](https://www.kryogenix.org/code/browser/everyonehasjs.html)

## Learn more about progressive enhancement

[Make Beautifully Resilient Apps With Progressive Enhancement](https://austingil.com/resilient-applications-progressive-enhancement/)

[Is Progressive Enhancement Dead Yet? (Webbed Briefs)](https://briefs.video/videos/is-progressive-enhancement-dead-yet/)
