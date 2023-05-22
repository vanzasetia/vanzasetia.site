---
title: Make Standard Button Better
date: 2023-05-22
copyDescription: false
tableOfContents: false
---

## What is *not* a button?

Before discussing the *standard* button, you need to know what is not a standard button.

The following HTML markup is not button elements:

```html
<!-- Only visually look like a button -->
<div class="button">Toggle Theme</div>

<!-- 
Only tell assistive technologies that it is a button 
-->
<div role="button">Add an item</div>

<!--
HTML can not be two things at once
-->
<a href="#" role="button">Change your item</a>

<!-- Invalid HTML -->
<button>
  <a href="#">Edit your item</a>
</button>
<a href="#">
  <button>Buy this product</button>
</a>
```

## Make the standard button better

The HTML markup for a button element is:

```html
<button></button>
```

You can improve it by adding text content that describes the purpose of the button.

```html
<!-- A text button -->
<button>Create a new profile</button>

<!-- An icon button -->
<button aria-label="Create a new profile">
  <svg focusable="false" aria-hidden="true"><!-- SVG Markup --></svg>
</button>
```

We will continue with the text button to keep things simple.

Then, you need to add a `type` attribute. This will ensure that the button behaves as expected.

```html
<button type="submit">Create a new profile</button>
```

In this case, it uses `type="submit"`. You can imagine that the button is inside a `<form>` element. So it is a submit button. If it is just a regular button, then you should use `type="button"`.

Next, you can style the button to make it better.

```css
button[type] {
  display: inline-block;
  font: inherit;
  padding: 1em;
}
```

The attribute selector is used to make sure you always add a `type` attribute. This way, if you forget to add a `type` attribute to your button, you will be able to see that the button will not get any styling. In other words, you can see the error.

You can be more specific by specifying the value of the `type` attribute, `button[type="submit"]`.

Let us say the submit button should be a block element.

```css
button[type="submit"] {
  display: block;
  width: 100%;
}
```

You can be creative with the styling. Then, you need to make sure that:

- **It is large enough**: At least 44 pixels by 44 pixels in size. The bigger the better.
- **It looks like a button**: Do not style it to look like any other elements such as links.
- **It behaves like a button**: Do not wrap a submit button with a `<form>` to create a link with a button element. Just use an anchor tag.
- **It has a clear label**: Tell the purpose or the action that will occur after the button is clicked. For example, "Join my newsletter".
- **It has a clear focus indicator**: Make sure it has a clear focus styling.

## My example

I try making my own buttons — [Example of Buttons at HTML.cafe](https://html.cafe/xc1e0db38)

## Go

Create good buttons!

## Resources

[Foundations: target sizes](https://tetralogical.com/blog/2022/12/20/foundations-target-size/)

[Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/)

[Target Size and 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)

[Size matters! Accessibility and Touch Targets](https://scribe.rip/@zacdicko/size-matters-accessibility-and-touch-targets-56e942adc0cc)
