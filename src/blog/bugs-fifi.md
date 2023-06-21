---
title: Bugs FiFi
date: 2023-06-21
copyDescription: false
tableOfContents: false
---

I create an application that can fix and find fake bugs. It is called Bugs FiFi.

Bugs FiFi is an open-source web application that is built with NextJS.

You can try it out.

[Bugs FiFi — Automatically find and fix bugs with just one click](https://bugsfifi.netlify.app/)

The source code is available on GitHub — [vanzasetia/bugs-fifi: Bugs FiFi is an application that can find and fix bugs. You can fix all the bugs with just one click.](https://github.com/vanzasetia/bugs-fifi)

## What I learned

I learned about `useState`.

At first, I wrote the `useState`'s variables with curly brackets instead of square brackets. I thought it was an object.

```js
const {bugs, setBugs} = useState(data);
```

It turned out that `useState` always returns an array with two items.

The first item is the data. The second item is a function to update the state and update the user interface with the updated state.

[useState – React](https://react.dev/reference/react/useState#usestate)
