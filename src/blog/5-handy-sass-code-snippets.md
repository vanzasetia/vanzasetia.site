---
title: 5 Handy Sass Code Snippets
date: 2022-10-12
dateModified: 2023-03-21
---

## Disclaimer

I use [Dart Sass](https://sass-lang.com/dart-sass). So, I can make sure that these functions and mixins are working.

I recommend using it since this is the latest and recommended Sass compiler. You can install it with NPM.

```bash
# save as dev dependency
npm i -D sass

# install globally
npm i -g sass
```

Also, I use SCSS syntax.

### Visual Studio Code Extensions

It may not be compatible with [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) which uses [LibSass](https://sass-lang.com/libsass) under the hood. LibSass is deprecated. So, it doesn't support new features from Sass.

There's the [new Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass). I never try this. So, you may want to give it try. If it doesn't work then install Sass through NPM instead.

## `rem()` Function

```scss
@use "sass:math";

@function rem($number) {
  @if unitless($number) {
    $default-one-rem-in-pixel: 16;

    @return math.div($number, $default-one-rem-in-pixel) * 1rem;
  }

  @error "Sorry, this '#{$number}' must have not any unit";
}
```

This is the most-used function. It allows me to input pixel value. Then, converts into `rem` value.

Example of the usage:

```scss
/* SCSS */
body {
  font-size: rem(20);
}

/* CSS */
body {
  font-size: 1.25rem;
}
```

Let me explain the `rem()` function.

- First, the function checks if `20` has no unit. Since it has no unit then it moves to the next step.
- The next step is to divide `20` by `16` which gives us `1.25`.
- Lastly, to give it a unit, it does: `1.25` x `1rem` = `1.25rem`. This is the value that gets returned.

To trigger the error, we can pass in `20px` for example. This will give us the following output.

```
Error: "Sorry, this '20px' must have not any unit"
  ╷
4 │   font-size: rem(20px);
  │              ^^^^^^^^^
  ╵
  scss\base\_reset.scss 4:14  @forward
  scss\base\_index.scss 1:1   @use
  scss\main.scss 3:1          root stylesheet
```

I've realized that the error message is saying "Sorry". I guess that's not needed. 😂

## `on-event()` Mixin

```scss
@mixin on-event() {
  &:hover,
  &:active {
    @content;
  }
}
```

The example of the usage.

```scss
/* SCSS */
.link {
  color: white;

  @include on-event {
    color: black;
  }
}

/* CSS */
.link {
  color: white;
}

.link:hover,
.link:active {
  color: black;
}
```

## Media Query Breakpoints

```scss
@mixin breakpoint-up($size) {
  @media screen and (min-width: map-get($breakpoints-up, $size)) {
    @content;
  }
}

@mixin breakpoint-down($size) {
  @media screen and (max-width: map-get($breakpoints-down, $size)) {
    @content;
  }
}
```

This one is the most-used mixin.

It takes a [map](https://sass-lang.com/documentation/values/maps) which is a key-value pair. You can think of it as an object in JavaScript.

```scss
$breakpoints-up: (
  "tiny": 40em,
  "very-small": 48em,
  "small": 69.375em
);

$breakpoints-down: (
  "tiny": 39.9275em,
  "very-small": 47.9375em,
  "small": 69.3125em
);
```

To get the value of the map, use [`map-get()`](https://sass-lang.com/documentation/modules/map#get). Use [`@debug`](https://sass-lang.com/documentation/at-rules/debug) to test the SCSS code.

```scss
@debug map-get($breakpoints-up, "tiny"); // Debug: 40em
```

The example of the usage.

```scss
/* SCSS */
body {
  background-image: url("../images/pattern-mobile.svg");

  @include breakpoint-up("small") {
    background-image: url("../images/pattern-desktop.svg");
  }
}

/* CSS */
body {
  background-image: url("../images/pattern-mobile.svg");
}

@media screen and (min-width: 69.375em) {
  body {
    background-image: url("../images/pattern-desktop.svg");
  }
}
```

## `prefers-motion` Mixin

```scss
@mixin prefers-motion() {
  @media screen and (prefers-reduced-motion: no-preference) {
    @content;
  }
}
```

The example of the usage.

```scss
/* SCSS */
.link {
  color: white;

  @include on-event {
    color: black;
  }

  @include prefers-motion {
    transition: color 200ms ease-in-out;
  }
}

/* CSS */
.link {
  color: white;
}

.link:hover,
.link:active {
  color: black;
}

@media screen and (prefers-reduced-motion: no-preference) {
  .link {
    transition: color 200ms ease-in-out;
  }
}
```

{% note %}
For animations and transitions, I recommend <a href="https://tatianamac.com/posts/prefers-reduced-motion">taking a no-motion-first approach</a>. This way, only the users who choose to see them will be able to see them. Also, if the users' browsers don't support the <code>prefers-reduced-motion</code> media query, they will not see any animations and transitions.
{% endnote %}

## Sass-sy Copy Paste

We can create small mixins to help us write repetitive CSS properties.

```scss
@mixin center-grid() {
  display: grid;
  place-items: center;
}
```

The example of usage.

```scss
/* SCSS */
body {
  min-height: 100vh;
  @include center-grid;
}

.card {
  @include center-grid;
}

/* CSS */
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.card {
  display: grid;
  place-items: center;
}
```

## Conclusion

I hope those things give your Sass more power. Let me know if you have any questions. Also, any feedback is appreciated!

## Author

- [GitHub - @vanzasetia](https://github.com/vanzasetia)
- [LinkedIn - Vanza Setia](https://www.linkedin.com/in/vanzasetia/)
- Want to see me on other platforms? [Check my linktree!](https://linktr.ee/vanzasetia)
