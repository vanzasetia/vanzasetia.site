---
title: "CSS Discussion: Should I Prefer to Use the Type Selector or the Class Selector?"
description:
  I need clarification on whether I should use type selectors or class
  selectors. Please help me by giving your opinion.
date: 2023-02-22
---

## Have some knowledge first

Type selector is a selector for selecting a type of HTML element.

Here is an example of the type selector:

```html
<style>
  button {
    font: inherit;
  }
</style>
<button type="button">Get something</button>
<script>
  const button = document.querySelector("button");
</script>
```

Class selector is a selector for selecting HTML elements based on the value of their `class` attribute.

Here is an example of class selector:

```html
<style>
  .button {
    font: inherit;
  }
</style>
<button type="button" class="button">Get something</button>
<script>
  const button = document.querySelector(".button");
</script>
```

Links to learn more about these two kinds of CSS selector.

[Type selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors)

[Class selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

## The good things about class selector

I use class selectors most of the time. I use the Block Element Modifier (BEM) methodology to help me make a decision about naming classes. Also, I use `js-` classes for selecting HTML elements inside JavaScript.

For example:

```html
<button type="button" class="button js-button-modal">Contact Me</button>
```

I think it is good doing that because every decision is separate.

The button element has semantic meaning. It tells assistive technologies that it is a button. Then, it tells browsers that it should behave like a button element. Meaning, it is focusable and actionable via the keyboard

The `button` class is for styling.

The `js-button-modal` class is used to do something with the element inside JavaScript.

If, in the future, I decide to use an anchor tag instead of the button element, then I need to go to the HTML and change the `<button>` to `<a>`. After that, remove the JavaScript code. I don't need to touch the CSS file.

```html
<a href="/contact" class="button">Contact Me</a>
```

## The bad things about class selector

I think a class selector is bad because it can be used on any element.

For example, I can do:

```html
<div class="button js-button-modal">Contact Me</div>
```

I will not see any errors. It still looks like a button. The functionality that I added through JavaScript is still working fine. The only missing thing is that it is not _actually_ a button. Browsers and assistive technologies treat that as a `<div>`.

Also, at the beginning of the project, I have to add a `class` attribute to every single element to apply both styling and functionality. Otherwise, the element is not having styling and functionality.

Moreover, naming things is hard. It is hard to keep coming up with a good class name.

## The good things about type selector

Why don't use what's already available? Type selector allows me to select a type of an HTML element. Also, I can use CSS type selectors within JavaScript using `querySelector()` and `querySelectorAll()`.

The HTML also will look cleaner.

```html
<button type="button">Contact Me</button>
```

I also don't have to keep coming up with a new class name for every single HTML element.

Inside both CSS and JavaScript, I can use `button` selector to style and provide functionality at the same time.

Then, if I change the `<button>` element to a non-interactive element, I will see that the styling does not get applied. Also, the functionality—that comes from the JavaScript—will stop working. In other words, I can see the error.

## The bad things about type selector

If, in the future, I decide not to use a button to open a contact form. Instead, I create a separate contact page and then change the "Contact Me" button to a link. Then, I have to change the HTML markup and at the same time, I have to change the CSS selector from `button` to `a`.

```html
<a href="/contact">Contact Me</a>
```

For the JavaScript, I can just delete the code—same as before.

## What do you think?

I am not saying that you have to choose one approach and don't use the other one. I am showing this to help you answer the following question, _"should I use class selector or type selector **whenever possible** in my CSS?"_

For the base styling, I use type selectors. Then, I use the class selectors to style specific things such as card and page containers. To be clear, this is not what I am talking about.

For page containers, there is no HTML element for it. I must use class to identify a `<div>` that should behave like a page container. Also, there are no semantic concerns since it is only for presentational purposes. This is also not what I am trying to discuss.

This is what I am talking about. Sometimes things can be styled using either class selectors or type selectors.

For example, what kind of selector you will choose to style the below HTML markup? Also, let's assume that there is another navigation in the footer of the page.

```html
<header>
  <nav>
    <ul>
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>
```

For me, if I use type selector then, I would do the following in my CSS:

```css
header {
  /* styling */
}

header nav {
  /* styling */
}

header ul {
  /* styling */
}

header li {
  /* styling */
}

header a {
  /* styling */
}
```

If I use BEM methodology, then I would do the following and then use the class selectors to style the necessary elements:

```html
<header class="header">
  <nav class="header__navigation">
    <ul class="header__list">
      <li class="header__item">
        <a href="/home" class="header__link">Home</a>
      </li>
      <li class="header__item">
        <a href="/about" class="header__link">About</a>
      </li>
      <li class="header__item">
        <a href="/contact" class="header__link">Contact</a>
      </li>
    </ul>
  </nav>
</header>
```

Which one do you prefer? The type selector or the class selector?
