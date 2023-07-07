---
title: Do Not Dictate Browsers
date: 2023-07-07
copyDescription: false
tableOfContents: false
---

You should as often as possible influence the browsers to get the layout that you want.

You should provide a guide such as `grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr))` whenever possible. The reason is the column's layout will be responsive without having to add a breakpoint. One line of code for one layout.

You should avoid dictating browsers to create a layout such as `grid-template-columns: repeat(3, 1fr)` whenever possible. The reason is the columns layout will always be three columns even though the layout does not have enough space. Also, you need a media query to change the number of columns.

An example — [Influence Browsers](https://html.cafe/x48b20925)

Be an influencer.
