---
title: Something Fishy about UI Hyphen Font Families
date: 2023-07-01
copyDescription: false
tableOfContents: false
---

UI hyphen font families are:

- `ui-serif`: The default user interface serif font.
- `ui-sans-serif`: The default user interface sans-serif font.
- `ui-monospace`: The default user interface monospace font.

All of them will use the default system font families.

**Reference:** [font-family - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

The purpose of them is to allow users to see the font family that they are already familiar. So the font family of the website is the same as the font family of their operating system.

The problem is the users can not change the system font family. There are no options or settings provided by the operating system to change the font family.

Changing the system font families can be a hard thing to do.

I searched about how to change the font family on Windows 10. After I read an article about it, I think the way to change the font family is not user-friendly.

The article that I read — [How to Change the Default System Font on Windows 10](https://www.howtogeek.com/716407/how-to-change-the-default-system-font-on-windows-10/)

I wish there is a setting to change the font family—like on the browser's setting.

If the website uses just `serif` or `sans-serif`, the users can change the font family on the browser setting. Also, the users can change the browser's language and then, the website will respond with the appropriate font family.

I am not sure that UI hyphen font families are bad. They work as expected. But, **does the ability for the users to change the font matter?**

If it matters then `serif`, `sans-serif`, and `monospace` will be better than UI hyphen font families.

If it does not matter then UI hyphen font families will be better.

By the way, you can play with the UI hyphen font families and the browser's default font families by yourself.

[A website with the UI hyphen font families](https://html.cafe/xede2593b)

[A website with the browser's default font families](https://html.cafe/x5a5890fa)

I recommend comparing both of them side by side to see the differences.

## Resources

[Never, ever use system-ui as the value of font-family](https://infinnie.github.io/blog/2017/systemui.html)

[CSS Fonts Module Level 4 #generic-font-families](https://drafts.csswg.org/css-fonts/#generic-font-families)
