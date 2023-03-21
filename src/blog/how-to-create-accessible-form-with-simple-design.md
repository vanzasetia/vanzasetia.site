---
title: How To Create Accessible Form with Simple Design?
description:
  You must ensure that your form is accessible to different users. This article
  will help you understand how to create an accessible form.
date: 2022-10-07
dateModified: 2023-02-22
tocMaxLevel3: true
---

## See the website

You can use these resources as your reference. Here are the links.

- [Live Review](https://a11yform.netlify.app/)
- [GitHub Repository](https://github.com/vanzasetia/accessible-form-finished)

## Starter files

You can try to follow along by [downloading the starter files (ZIP, 42KB)](https://github.com/vanzasetia/accessible-form-starter-files/archive/refs/heads/main.zip). You can [visit the repository](https://github.com/vanzasetia/accessible-form-starter-files/) first before downloading the starter files.

Feel free to follow along!

## HTML first approach

**You have to start from HTML.** HTML can impact the way assistive technology, search engine bots, and other tools understand the page content. So, it is important to get it right.

### Plan the HTML markup

You need to think about the HTML markup you are going to write. This step can help you focus on the HTML. As a result, you can find yourself writing higher-quality HTML.

First, you should look at the website as a design reference. Then, based on the design, think about the appropriate HTML markup for each element.

For example, I came up with the following HTML markup:

```txt
main
  h1
  form
    div
      label
        span
        input:text[name="name"][required]
      p
    div
      label
        span
        input:email[name="email"][required]
      p
    button:submit
```

{% note %}
I use <a href="https://docs.emmet.io/cheat-sheet/">Emmet syntax</a> as the syntax for my <a href="https://en.wikipedia.org/wiki/Pseudocode">pseudocode</a>. It's up to you how to write the pseudocode.
{% endnote  %}

There are reasons why I decided to write the HTML markup like that.

- First, the `<main>` element wraps all the page content to tell robots—like search engine bots and assistive technologies—that it is the main content of the page.
- Second, I make "Accessible Form - Project Example" as an `<h1>`. Each page must have one `h1`. No more, no less.
- Third, I make the `<label>` element wrapping the `<input>`. This way, I don't need to use the `for` attribute on the `<label>`. Also, I don't have to add `id` on each `<input>` element.
- Fourth, I use `<p>` element to hold the error message. Don't use `<div>` or `<span>`. Text content must always be wrapped by a meaningful element.
- Fifth, I use `<button>` with `type="submit"` for the sign-up button. Do not use `<input>` with `type="submit"`. It's a legacy element that is used before the `<button>` element exists.

Let's turn that pseudocode into real code.

```html
<main>
  <h1>Accessible Form - Project Example</h1>
  <form>
    <div>
      <label>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <p></p>
    </div>
    <div>
      <label>
        <span>Email</span>
        <input type="email" name="email" required />
      </label>
      <p></p>
    </div>
    <button type="submit">Sign Up</button>
  </form>
</main>
```

That HTML code gives the following result.

![Accessible form page without styling](/images/unstyled-form.jpg)

The site gets the browser's default styling and we can understand the site.

This can be one of the ways to validate HTML markup. If you can't understand the page content without styling, then there's a good chance that something is wrong with the HTML.

### Improving the experience of assistive technology users

ARIA (Accessible Rich Internet Application) attributes allow us to extend the ability of HTML accessibility.

It's important to know that [**no ARIA is better than bad ARIA**](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/). So, you need to have a reason to use ARIA attributes. Otherwise, don't use them.

> _"Increased ARIA usage on pages correlated to higher detected errors. The more ARIA attributes that were present, the more detected accessibility errors could be expected."_ 
>
> From [WebAIM: The WebAIM Million - The 2022 report on the accessibility of the top 1,000,000 home pages](https://webaim.org/projects/million/).

You need to use `aria-live` attribute to make the alert message get pronounced by screen readers.

```html
<p aria-live="polite"></p>
```

The `p` for the error message is empty at first. Then, use JavaScript to populate the error message. This way, the error message will get announced by screen readers.

You should choose `polite` as the value of the `aria-live` attribute because the validation runs after the users try to submit the form. If the validation runs while the user is typing, you should use `assertive` to tell the user about the error immediately.

Next, you need to tell that the `<p>` is linked to the `<input>` by using `aria-describedby`. Doing this will tell assistive technologies that the `<p>` is used to describe the linked `<input>` element.

Now, the HTML markup looks like this:

```html
<div>
  <label>
    <span>Name</span>
    <input type="text" name="name" required aria-describedby="name-alert" />
  </label>
  <p id="name-alert" aria-live="polite"></p>
</div>
<div>
  <label>
    <span>Email</span>
    <input type="email" name="email" required aria-describedby="email-alert" />
  </label>
  <p id="email-alert" aria-live="polite"></p>
</div>
```

Related resources for this section:

- [aria-live - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [aria-describedby - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)

### Enhancing the label of the required fields

All the fields are required. But, the users don't know about them at first. So, you should tell them. Don't make your users guess whether they should fill in all the fields.

```diff
<label>
-  <span>Name</span>
+  <span>Name <strong>(required)</strong></span>
  <input type="text" name="name" required aria-describedby="name-alert" />
</label>
```

### The placeholder attribute is an enemy

You should not use the `placeholder` attribute as a replacement for `<label>`.

You should not use the `placeholder` attribute to specify the format for the Input value. It is because `placeholder` will disappear once the users start typing. Users with cognitive concerns will not be able to remember the format.

I have that experience. I always get annoyed when I have to clear the input because I forget what is the format of the value that I should be typing. Then, I have to re-enter the value again. Bad user experience!

Next, the `placeholder` attribute has a low color contrast.

One more thing, the value of the `placeholder` attribute can make users think that the input has already been filled in.

Related resources for this section:

- [Don’t Use The Placeholder Attribute](https://www.smashingmagazine.com/2018/06/placeholder-attribute/)
- [Why Using Input Placeholders in Place of Labels is a Bad Idea](https://joshuawinn.com/ux-input-placeholders-are-not-labels/)

### Make sure the HTML is valid

Here is what we have so far.

```html
<main>
  <h1>Accessible Form - Project Example</h1>
  <form>
    <div>
      <label>
        <span>Name <strong>(required)</strong></span>
        <input type="text" required aria-describedby="name-alert" />
      </label>
      <p id="name-alert" aria-live="polite"></p>
    </div>
    <div>
      <label>
        <span>Email <strong>(required)</strong></span>
        <input type="email" required aria-describedby="email-alert" />
      </label>
      <p id="email-alert" aria-live="polite"></p>
    </div>
    <button type="submit">Sign Up</button>
  </form>
</main>
```

You can use [The W3C Markup Validation Service](https://validator.w3.org/) to make sure the HTML is valid.

## Make the page looks better

You are done with the HTML. Now, you need to make it looks better by using CSS.

### Set up the styling foundation

First, you need to use a CSS reset. This way, you can have a styling good foundation.

I recommend using Andy Bell's CSS reset.

Get the code — [A Modern CSS Reset | Andy Bell](https://andy-bell.co.uk/a-modern-css-reset/)

After that, you should remove the code that you will not be using. For example, there is no list element in this project, so you should remove the following code:

```css
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
```

This way, the users don't have to download unnecessary code. Less code, better performance.

After that, remove all the default `margin` and `padding`.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Then, you can start setting up some custom properties or variables.

```css
:root {
  --black: hsl(0, 0%, 7%);
  --white: hsl(0, 0%, 100%);
  --red: hsl(0, 100%, 46%);
  --card-background-color: var(--white);
  --card-box-shadow: 0 3.125rem 3.125rem -1.5625rem rgba(75, 92, 154, 0.24);
  --invalid-color: var(--red);
}
```

I recommend writing the variable names with hyphenated naming conventions. CSS properties are based on hyphenated things such as `background-color` and `font-size` properties. So, to keep everything consistent, you should follow the language naming convention.

### Placing the content in the middle of the page

This is how you would do it with CSS Grid:

```css
body {
  display: grid;
  place-items: center;
}
```

Another way is to use CSS Flexbox:

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

You should not absolute positioning. Use flexbox or grid to place the card in the center of the page. These modern techniques are more robust than absolute positioning and have less code to write.

### Little CSS to control block spacing

The block spacing means vertical space.

```css
form > * + * {
  margin-top: 1.2em;
}
```

{% note %}
The <code>* + *</code> selector is called "Lobotomized Owl Selector". Learn more about it — <a href="https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/">Axiomatic CSS and Lobotomized Owls</a>
{% endnote  %}

If you are going to use it in different places, you should make it a utility class instead.

```css
.flow > * + * {
  margin-top: var(--space, 1em);
}
```

Also, you can add a custom property to allow you to have a different value of block spacing for different layouts.

The benefit of doing this is to make it easier to control the vertical space between elements. So, instead of selecting each element and then adding `margin-top`, you can just use `.flow` class and `--space` property to control the spacing.

### Creating a focus indicator for all interactive elements

Users can use the keyboard to navigate through interactive elements. The focus indicator lets your users know where they are on the page.

```css
:focus {
  outline-color: var(--black);
  outline-style: dashed;
  outline-width: 0.2em;
  outline-offset: 0.1em;
}
```

Doing this is ensuring that the website is compliant with—one of the rules of Web Content Accessibility Guidelines (WCAG)—the AA 2.4.7 Focus Visible.

Learn more — [Understanding Success Criterion 2.4.7: Focus Visible | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible)

### Styling other elements

I challenge you to write your own CSS.

Now, I am going to tell you that you don't need to use the class selector to style any elements. You should use other types of selectors such as attribute and type selectors.

You should use type—or element—selectors for creating general styling. For example, the `<button>` and `<input>` should inherit the font styling of the `<body>` element—by default, they don't inherit the `<body>`'s font styling.

```css
input,
button {
  font: inherit;
}
```

Then, you should use attribute selectors for specific elements. For example, using `p[aria-live]` selector to style the error messages. You don't need to add a class to each error message to style the error message.

I recommend reading the following article that will explain why you should do that instead of using classes — [Semantic CSS With Intelligent Selectors](https://www.smashingmagazine.com/2013/08/semantic-css-with-intelligent-selectors/)

### Make sure your CSS is valid

Don't forget to validate your CSS!

I recommend using the following tool — [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).

## Create custom validation

First, you should plan the structure of your JavaScript. This way, you know exactly what you will be doing.

### Plan the JavaScript code

I planned my JavaScript with plain text.

```txt
FUNCTION clearAllAlerts () {
  "make the form to initial state"
}

FUNCTION checkAllInputs () {
  "check all the inputs"
  THEN
  "if the input is not valid then show the alert message"
}

FUNCTION validateForm () {
  "clear all the alert messages"
  "check all the input elements"
  IF "the form is not valid" {
    prevent form submission
  }
}

form.addEventListener("submit", validateForm)
```

### Selecting DOM elements

You should use `querySelector`. That method allows you to use any CSS selector to grab the DOM elements.

Again, you don't need to use `.js-` classes to create a hook for JavaScript. The reason is to ensure that what you select is the correct element. For example, `form` selector will make sure that you grab a `<form>` element. Also, you will instantly know that you are grabbing a `<form>` element without even looking at the HTML.

It is basically "what you see is what you select". For example, you see a `form` selector which means you select a `<form>` element.

```javascript
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input[aria-describedby]");
const alerts = form.querySelectorAll("p[aria-live]");
```

For the input elements, you should only need to grab the `<input>` elements that are required. Since the required inputs must have an error message, you should use `input[aria-describedby]` selector.

I don't recommend using `input[required]` selector. It is because `input[required]` is only ensuring that you are grabbing an `<input required>`. There is no proof that the `input` has an associated error message. So, by selecting `input[aria-describedby]` you will make sure that the `<input>` has an associated error message.

For the alert elements, you should use `p[aria-live]` selector to make sure that the alert is a live region. This way, you can make sure that you are grabbing live region elements instead of normal paragraphs.

### Little progressive enhancement

You should disable the native HTML form validation by adding `novalidate` attribute to the `<form>` element.

You can put the `novalidate` in HTML markup. But, the problem is if the JavaScript fails to load, then the users can accidentally submit an empty form.

Instead, you should add the `novalidate` attribute through JavaScript. By doing this, you make sure that the native validation is only turned off when the JavaScript arrives.

```javascript
const preventNativeFormValidation = () => {
  form.setAttribute("novalidate", "");
};

document.addEventListener("DOMContentLoaded", preventNativeFormValidation);
```

### Writing custom form validation

I write this section in the order of the function calls. For example, I start by explaining the first that gets called which is `validateForm()`. Then, that function calls the other two functions `clearAllAlerts()` and `checkAllInputs()`. After that, I explain them. Then, the pattern keeps repeating.

First, make the `form` listen to the `submit` event.

```javascript
form.addEventListener("submit", validateForm);
```

Then, once the users submit the form, it will run the `validateForm()`.

```javascript
const validateForm = (event) => {
  clearAllAlerts();
  const isFormValid = checkAllInputs();
  if (!isFormValid) {
    event.preventDefault();
  }
};
```

The `clearAllAlerts()` function will select all the inputs. Then, remove the invalid styling.

```javascript
const clearAllAlerts = () => {
  alerts.forEach((alert) => (alert.textContent = ""));
  inputs.forEach((input) => input.removeAttribute("aria-invalid"));
};
```

For the `checkAllInputs()` function, use `forEach` to select each `input`. Then, use `switch` to run necessary validation for different types of input.

```javascript
const checkAllInputs = () => {
  let isNameFilled = false;
  let isEmailFilled = false;
  let isEmailValid = false;

  inputs.forEach((input) => {
    const name = input.name;
    const value = input.value;
    switch (name) {
      case "name":
        isNameFilled = isInputFilled(input, value);
        break;
      case "email":
        isEmailFilled = isInputFilled(input, value);
        if (isEmailFilled) {
          isEmailValid = validateEmail(input, value);
        }
        break;
      default:
        console.error(`${name} input doesn't exist`);
    }
  });

  const areAllInputsValid = isNameFilled && isEmailFilled && isEmailValid;
  return areAllInputsValid;
};
```

Then, create another function called `isInputFilled()`. It has two parameters. The first one is the `<input>` element that should be checked. The second one is the value of the input.

`isInputFilled()` is used to check whether the `<input>` is empty or filled.

```javascript
const isInputFilled = (input, value) => {
  const isFilled = Boolean(value);
  if (isFilled === false) {
    handleAlert(input, `This ${input.name} input is required`);
  }
  return isFilled;
};
```

I use `Boolean()` to check whether the value is a falsy or a truthy value. It means if it is an empty string, `Boolean(value)` will return a `false` value—an empty string is a falsy value.

If it is an empty input, then it will call another function which is `handleAlert()`.

```javascript
const handleAlert = (input, message) => {
  alerts.forEach((alert) => {
    const inputAlertID = input.getAttribute("aria-describedby");
    const alertID = alert.id;
    if (inputAlertID === alertID) {
      showAlertMessage({ input, alert, message });
    }
  });
};
```

The purpose of `handleAlert()` function is to get the associated alert element of the input element. Then, it calls `showAlertMessage()` function.

```javascript
const showAlertMessage = ({ input, alert, message }) => {
  alert.textContent = message;
  input.setAttribute("aria-invalid", "true");
};
```

The function takes an `Object`. Then, destructure it directly. After that, it shows the alert message to the users.

I add an `aria-invalid="true"` to show the `<input>` is in an invalid state. I don't need to add `aria-invalid="false"` at the `<input>` initially since it is already the default state—by default, the input should be in a "neutral" state, not valid but not invalid.

Now, for the email input, I need to check the email format. So, if the input is filled in but the email address is not valid, then I need to show a different message.

```javascript
const validateEmail = (input, email) => {
  const emailValidation =
    /^(?:[a-z0-9.]){2,30}@(?:[a-z0-9-]){2,30}\.(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;
  const isValid = emailValidation.test(email);
  if (!isValid) {
    handleAlert(input, "Please provide a valid email address");
  }
  return isValid;
};
```

Example of valid email addresses with that Regular Expression (RegEx).

- john@company.com
- jane@home-now.com
- howard@office.co.uk
- sam@room.xyz
- jane.doe@some-company.com

I recommend copy-pasting the RegEx to [RegExr](https://regexr.com/). Then, play around with it by yourself to understand it.

## Conclusion

Let's do a quick recap of what we have learned.

- HTML is important so make sure you get it right
- ARIA attributes can help to improve the experience of the users of assistive technology and you should use them with reasons
- Interactive elements need clear focus styling
- CSS class selector is not always needed, prefer using type and attribute selectors
- Add `novalidate` through JavaScript to allow native form validation if the JavaScript fails to load
- Create custom form validation
- Vanza Setia is not a designer

If you have any feedback or suggestions for improvements, please do let me know. You can write your suggestions in the comment section.

## Further learning

[A beginner's complete guide to form accessibility: the 5 things accessible forms need and how to fix common errors](https://blog.pope.tech/2022/10/03/a-beginners-complete-guide-to-form-accessibility-the-5-things-accessible-forms-needs-and-how-to-fix-common-errors/)

[Avoid Default Field Validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html)
