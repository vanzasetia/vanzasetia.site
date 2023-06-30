---
title: CSS is Family
date: 2023-06-30
copyDescription: false
tableOfContents: false
---

In real life, a child looks like a parent. The child inherits some of the parent's physical appearance. Not all of them.

The body element (`<body>`) is the absolute parent element for the visible elements. The styling on the body element gets inherited by most of the elements—by default.

Text styling such as font family, font size, and line height will be get inherited by most text elements such as paragraphs, headings, and links.

You can force all the descendant elements to inherit all the styling of the body element.

```css
*,
*::after,
*::before {
  all: inherit;
}
```

That is a horrible idea. It makes all elements visible — [Do not inherit all styles](https://html.cafe/x0ef0126e)

In real life, a child that looks exactly like the parent is not good. A child is younger than the parent.

In CSS life, the child elements that inherit all styles of parent elements will result in all elements looking the same. That is not good. How will users distinguish the paragraph with links?

**The takeaway is to not inherit all styles for all elements.**

You should use inheritance to make styling elements much easier. Then, you can make each element have unique styling.

For example, for the font styles of the website, you put it on the `<body>` element.

```css
body {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: calc(1rem + 0.5vw);
  line-height: 1.5;
  color: #222;
}
```

Then if you want to have unique styles for the anchor tag, you can overwrite the `<body>`'s styling and add its specific styles.

I recommend writing CSS with:

1. the global styling first, 
1. after that, write the specific styles for each type of element, and 
1. then, start writing the specific styles—probably with class selectors.

If you start writing with specific styles for each element then you will end up with a lot of classes and repetitions.

For example, you start setting the font family for each type of element.

```css
h1,
h2,
h3,
p {
  font-family: Lato, sans-serif;
}
```

The problem with that is you have to keep adding new elements if you use a new text element such as an anchor tag or `<blockquote>` tag.

Even worse, you start with adding utility classes.

```css
.lato-font-family {
  font-family: Lato, sans-serif;
}
```

The problem is you must add a class attribute to the HTML element that needs to use the Lato font family.

The best solution is to set the global font family on the `<body>` element.

```css
body {
  font-family: Lato, sans-serif;
}
```

No class attribute. No specificity issue.

The result is most of the text elements will have the Lato font family.

Going back to my analogy, in real life, the children should not be the same as the parents. The children can have their own uniqueness.

In CSS life, the child elements should inherit some of the stylings from the parent element. At the same time, they can have unique styles.
