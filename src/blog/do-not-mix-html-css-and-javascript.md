---
title: Do Not Mix HTML, CSS, and Javascript
date: 2023-06-10
copyDescription: false
tableOfContents: false
---

Use HTML to create elements on the page. Do not use CSS. Do not use JavaScript for static content.

Use HTML first. If HTML can not do what you want, use CSS. If both still can not achieve what you want, use JavaScript. JavaScript should be the last resort.

For example, if you want to create a button, start with HTML first. Do not start by creating a good-looking button with CSS. Do not start creating a button with JavaScript and ARIA roles.

Style elements with CSS. Do not use HTML. Do not use heading tags to make text bold and big. Do not use JavaScript to change the size of the text. Use CSS for styling.

Use JavaScript to create dynamic user interfaces. Use JavaScript to enhance the user experience. For example, create a custom form validation. A user enters "hello" as a passphrase. It is too short. Use JavaScript to tell the user to enter a longer passphrase.

Use JavaScript to keep track of the state of an element. For example, to keep track of the `aria-expanded` value, you need to use JavaScript.

Use them based on their power. Make them work together.
