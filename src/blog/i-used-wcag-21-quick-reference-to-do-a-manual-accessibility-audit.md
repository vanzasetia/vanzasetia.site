---
title: I Used WCAG 2.1 Quick Reference to Do a Manual Accessibility Audit
description:
  I want to learn about Web Content Accessibility Guidelines (WCAG). So, I did a manual accessibility audit of this website (vanzasetia.site).
date: 2023-04-08
tocMaxLevel3: true
---

## Four Principles

First, I need to understand the four principles of creating an accessible website.

The meaning of each of those principles is based on the WCAG Quick Reference page:

- **Perceivable**: Information and user interface components must be available to users in ways they can understand.
- **Operable**: User interface components and navigation must be operable.
- **Understandable**: Information and the operation of the user interface must be understandable.
- **Robust**: Content must be robust enough that it can be interpreted by a wide variety of user agents, including assistive technologies.

Based on my understanding, users should be able to understand and use this website. It should also be robust to meet all the WCAG criteria. In my opinion, an accessible website is hard to build.

Start the audit.

[How to Meet WCAG (Quickref Reference)](https://www.w3.org/WAI/WCAG21/quickref/)

## Guideline 1.1 – Text Alternatives

I must provide an alternative text to the important non-text content.

### 1.1.1 Non-text Content — Level A

This website does not have any decorative images. I have seven images in total by the time I am doing this audit; my photo on the home page and six images inside blog posts. All of them have alternative text.

[Understanding Success Criterion 1.1.1: Non-text Content | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)

## Guideline 1.2 – Time-based Media

This website does not have any time-based media—video and audio.

I skip this section.

## Guideline 1.3 – Adaptable

The content of a website can be shown in different ways. This means that it must rely on HTML. The styling should only be making it look better.

The content of this website should adapt. For example, if users view this website on a text-only browser, then my content will still make sense. Another example, they can use a browser extension to have a different experience. Or they can use a reader mode to read my blog posts. So, to make sure that the content of this website adapts, it should rely on HTML.

[Text-based web browser - Wikipedia](https://en.wikipedia.org/wiki/Text-based_web_browser)

### 1.3.1 Info and Relationships — Level A

The content of a website should be programmatically specified or presented in text form.

Based on my understanding, this website should use semantic HTML markup.

It uses landmark elements and heading tags in logical order. I make sure that heading tags are used to programmatically tell the users that they are titles—not to make text bigger and bold. In short, this website uses a proper HTML element to programmatically specify the meaning of the content.

[Understanding Success Criterion 1.3.1: Info and Relationships | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)

### 1.3.2 Meaningful Sequence — Level A

The reading order of the content must make sense.

I ensure the layout of this website is as simple as possible. The content starts from the top to the bottom. The header is a two-column layout if there is enough space. The reading order is from left to right. Nothing fancy.

Also, the tabbing order makes sense. For example, there are 42 links on the home page. The tabbing order starts at the top with the "Skip to main content" link, then goes left to right, and top to bottom.

[Understanding Success Criterion 1.3.2: Meaningful Sequence | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html)

### 1.3.3 Sensory Characteristics — Level A

The content of this website can be understood and used without knowing the style of the element, such as color and shape. It should also not depend on the location of the element.

All links on this website can be used without having to know their exact location. For example, there is no instruction such as, "To return to the home page, you need to click a link that is on the top left-hand corner of this website". Users can return to the home page in different ways such as using the standard browser behavior—pressing a back button.

[Understanding Success Criterion 1.3.3: Sensory Characteristics | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html)

### 1.3.4 Orientation — Level AA

The users must be able to view the content with different orientations. This website should not restrict them from changing their device orientation.

I do not see any benefit in restricting my users from changing their device orientation to view my content. In other words, this website allows users to view the content in different orientations.

[Understanding Success Criterion 1.3.4: Orientation | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)

### 1.3.5 Identify Input Purpose — Level AA

Input elements should have clear instructions about what information users should fill in.

This website does not have `<input>` elements or any form. I skip this section.

### 1.3.6 Identify Purpose — Level AAA

The purpose of the page content can be understood by users. This can be achieved by using landmark elements such as using the `<main>` landmark to identify the main content of the page. Another way is to have clear text content for the links so that users know where they are going.

I think this is similar to the [1.3.1 Info and Relationships](#131-info-and-relationships--level-a). Both say that the content should be programmatically specified. But, in this case, the **purpose of the content** is the topic instead of the **relationship between the contents**.

This website uses proper HTML markup so the purpose of the content is programmatically specified.

[Understanding Success Criterion 1.3.6: Identify Purpose | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html)

## Guideline 1.4 – Distinguishable

I need to make sure that users can distinguish between different elements on this website. For example, users can distinguish between text and links.

### 1.4.1 Use of Color — Level A

Colors should not be the only way to convey information.

I do not use colors to tell the users anything. Colors are used to make the content readable.

[Understanding Success Criterion 1.4.1: Use of Color | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)

### 1.4.2 Audio Control — Level A

Users should be able to control the audio such as stopping or playing the audio.

This website does not have audio. I skip this section.

### 1.4.3 Contrast (Minimum) — Level AA

Text and images of text must have a contrast ratio of at least 4.5:1. For large text, it should have a contrast ratio of at least 3:1.

Large text means that the text is 120 percent or 150 percent of the default size for body text. For this website, this means that all headings are large text.

This website uses only two colors. So, all text will have the same contrast ratio.

I use "WebAIM: Contrast Checker" and the result is **the text has a contrast ratio of 11.71:1**.

Link for the test result — [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/?fcolor=DDDDDD&bcolor=222222)

I discover another tool, "WebAIM: Link Contrast Checker". It is used to check the contrast ratio of a link when it is together with the body text. This website fails this test.

[WebAIM: Link Contrast Checker](https://webaim.org/resources/linkcontrastchecker/?fcolor=DDDDDD&bcolor=222222&lcolor=DDDDDD)

**The link contrast does not matter** in my case. It only matters for websites that use color to differentiate the link from the body text.

I keep the underline on the link element. This means that the link is not conveyed by color. So, this website does not need to pass the link contrast test.

> This requirement refers to places where body text and link text appear together and where color alone is used to identify links (meaning the underline has been removed).

From: [WebAIM: Contrast and Color Accessibility - Understanding WCAG 2 Contrast and Color Requirements #only](https://webaim.org/articles/contrast/#only)

[Understanding Success Criterion 1.4.3: Contrast (Minimum) | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

### 1.4.4 Resize text — Level AA

Text must be resizable. Users should be able to scale up to 200 percent, or twice the width and height. Even if users' browser does not provide scaling, but does provide the ability to change the font size, the text should be able to scale.

In addition, the website should be usable when the users zoom in. This means, no truncated sentences or loss of information when scaling up to 200 percent.

I do not use the pixel unit (`px`). This means that the layout and size of the text will adjust when the users make changes.

In my case, the screen resolution of the desktop that I use is 1280 × 800. Meaning, scaled up 200 percent makes it 640 × 400. The result is the text scales and the content does not overflow.

[Understanding Success Criterion 1.4.4: Resize Text | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)

### 1.4.5 Images of Text — Level AA

Text is preferred over images of text.

Most of the content on this website is text. There are images, but they are not used to replace the text content.

[Understanding Success Criterion 1.4.5: Images of Text | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html)

### 1.4.6 Contrast (Enhanced) — Level AAA

Text and images of text must have a contrast ratio of at least 7:1. Large text should have a contrast ratio of at least 4.5:1.

I said earlier in the [1.4.3 Contrast (Minimum) — Level AA](#143-contrast-minimum--level-aa), **the text has a contrast ratio of 11.71:1**.

[Understanding Success Criterion 1.4.6: Contrast (Enhanced) | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)

### 1.4.7 Low or No Background Audio — Level AAA

Background sound must be low enough to allow users to distinguish the background sound from the foreground sound. For example, if there is background music with a person speaking, then the background music should be low enough so that users can focus on listening to the person.

Even better, no background sound. This allows users to focus on the content.

This website has no background sound. I skip this section.

### 1.4.8 Visual Presentation — Level AAA

I break down the five rules for this criterion.

> Foreground and background colors can be selected by the user.

First, I use the `prefers-color-scheme` media query to allow this website to follow the user's preferred theme. But does it mean that? Or users can change the color and background color as they like (?). I do not know.

> Width is no more than 80 characters or glyphs (40 if CJK).

Second, I use the character unit (`ch`) for the maximum width of the landmark elements. I set the `max-width` to `60ch`. This means that there is no way the text can be more than 80 characters wide.

> Text is not justified (aligned to both the left and the right margins).

Third, I do not set `text-align: justify`. All text is aligned left.

> Line spacing (leading) is at least space-and-a-half within paragraphs, and paragraph spacing is at least 1.5 times larger than the line spacing.

Fourth, the body text of this website has a `1.6` value for `line-height`.

> Text can be resized without assistive technology up to 200 percent in a way that does not require the user to scroll horizontally to read a line of text on a full-screen window.

Fifth, I can scale up to 200 percent and there is no horizontal scrollbar.

[Understanding Success Criterion 1.4.8: Visual Presentation | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html)

### 1.4.9 Images of Text (No Exception) — Level AAA

Text must be preferred over images of text.

Again, most of the content on this website is text. There are images, but they are not used to replace the text content.

[Understanding Success Criterion 1.4.9: Images of Text (No Exception) | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html)

### 1.4.10 Reflow — Level AA

The website should not lose information and functionality when the screen width of the user is 320 pixels. It should not have horizontal scrolling too.

My screen resolution is 1280 pixels wide. When I scale up to 400 percent, I can see this website at 320 pixels wide. The result is no horizontal scrollbar.

[Understanding Success Criterion 1.4.10: Reflow | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html)

### 1.4.11 Non-text Contrast — Level AA

All other non-text elements, such as links, buttons, and checkboxes, should have a contrast ratio of at least 3:1.

In my case, I need to consider the contrast of the links and the focus indicator.

The links and the focus indicator—outline color—are the same as the body text. **They have a contrast ratio of 11.71:1.**

[Understanding Success Criterion 1.4.11: Non-text Contrast | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)

### 1.4.12 Text Spacing — Level AA

If I change the following properties:

- Set `line-height: 1.5`
- Set `.flow > * + * { margin-top: 2em }`
- Set `letter-spacing: 0.12em`
- Set `word-spacing: 0.16em`

The result is no loss of content without changing the other CSS or style properties.

[Understanding Success Criterion 1.4.12: Text Spacing | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)

### 1.4.13 Content on Hover or Focus — Level AA

Additional content must appear when it is in a hover or focus state. It should also be able to:

- Dismiss or cancel
- Move the pointer without the content disappearing
- Visible until the focus is moved

This applies to the "Skip to main content" link. It can be dismissed by moving the focus to another element. If users move the pointer while focusing on it, the content is not going to disappear. It remains visible until they move the focus to another element.

[Understanding Success Criterion 1.4.13: Content on Hover or Focus | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)

## Guideline 2.1 – Keyboard Accessible

All interactive elements such as links and buttons should be accessible from a keyboard.

### 2.1.1 Keyboard — Level A

All functionality of the content is available using the keyboard.

This website only has links for the interactive elements. I do not test all links on this website. I think users can interact with them using a keyboard.

[Understanding Success Criterion 2.1.1: Keyboard | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)

### 2.1.2 No Keyboard Trap — Level A

Keyboard focus should not be trapped or locked in one place. The user can navigate through all the interactive elements with only a keyboard.

I test it on the home page and some of my blog posts contain a table of contents, the focus is not trapped.

[Understanding Success Criterion 2.1.2: No Keyboard Trap | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html)

### 2.1.3 Keyboard (No Exception) — Level AAA

All page functionality must be available using the keyboard.

This website has many links. I think they are accessible with only the keyboard—I do not test all of them, so I am not sure how accessible they are.

[Understanding Success Criterion 2.1.3: Keyboard (No Exception) | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html)

### 2.1.4 Character Key Shortcuts — Level A

If the keyboard shortcut uses only printable characters key (letters (including uppercase and lowercase), punctuation, numbers, or symbols) then it should be activated when focused. Otherwise, I have to change the shortcut by combining it with the non-printable key (such as <kbd>Ctrl</kbd>, <kbd>Shift</kbd>, and <kbd>Alt</kbd>).

This website does not have a keyboard shortcut. I skip this section.

## Guideline 2.2 – Enough Time

I should provide users enough time to read and use the content.

This website does not have timing. Users can spend as much time as they want on this website.

I skip this section.

## Guideline 2.3 – Seizures and Physical Reactions

I should not design content in a way that is known to cause seizures or physical reactions. This involves animations and transitions.

This website does not have animations or transitions. I skip this section.

## Guideline 2.4 – Navigable

I should provide ways to help users navigate, find content, and determine where they are.

### 2.4.1 Bypass Blocks — Level A

Users should be able to skip repeated content across web pages. In my case, the `<header>` and the `<footer>` are repeated content.

This website provides a link to skip the `<header>` and jump to the `<main>` landmark. In the `<footer>`, I provide a "Back to top" link to allow users to jump back to the `<header>`.

On large blog posts, I provide a "Table of contents" to allow users to jump to headings.

[Understanding Success Criterion 2.4.1: Bypass Blocks | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)

### 2.4.2 Page Titled — Level A

Web pages have titles that describe the topic or purpose.

All pages on this website have titles that are descriptive. For example, the blog posts have the title of the blog posts. Another example is that the resources page has the title "Resources — Vanza Setia". This is to tell the users that this is a page containing a collection of resources on the Vanza Setia website.

[Understanding Success Criterion 2.4.2: Page Titled | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)

### 2.4.3 Focus Order — Level A

The focus order should be in logical order.

The focus order of this website starts from the top to the bottom. If there are interactive elements on a horizontal axis, it starts from the left to the right.

Also, I do not use `tabindex` attribute with a value that is greater than 0. This should prevent unexpected focus orders.

[Understanding Success Criterion 2.4.3: Focus Order | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)

### 2.4.4 Link Purpose (In Context) — Level A

The purpose of the link should be clear with the text alone.

This website does not use terms like "click here" or "read more". Most of the links use the title of the web pages by the time I am visiting them. This should make links on this website have a clear purpose.

[Understanding Success Criterion 2.4.4: Link Purpose (In Context) | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)

### 2.4.5 Multiple Ways — Level AA

Multiple ways to find other web pages should be provided.

This website provides my users with all the blog posts on the archive page. Five of the latest blog posts are available on the home page and the archive page. Also, a blog post can promote other blog posts if they are related—providing more ways.

The navigation links on the `<header>` and `<footer>` are available on every web page.

[Understanding Success Criterion 2.4.5: Multiple Ways | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html)

### 2.4.6 Headings and Labels — Level AA

Headings and labels must be descriptive.

This website has headings, but no labels. Every heading is unique—has different text content. Headings have same text content, but it should be fine if each of them is on a different page.

[Understanding Success Criterion 2.4.6: Headings and Labels | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)

### 2.4.7 Focus Visible — Level AA

Focus indicator must be clear.

I can see all of the focus indicators of all links. But, that is only for me. I do not how about other people.

[Understanding Success Criterion 2.4.7: Focus Visible | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

### 2.4.8 Location — Level AAA

Users should be able to know the current page location.

I do not provide this functionality.

[Understanding Success Criterion 2.4.8: Location | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/location.html)

### 2.4.9 Link Purpose (Link Only) — Level AAA

All links should have different text or labels for different purposes.

This website has links and they have different labels for different purposes.

[ARIA8: Using aria-label for link purpose | WAI | W3C](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8.html)

[Understanding Success Criterion 2.4.9: Link Purpose (Link Only) | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html)

### 2.4.10 Section Headings — Level AAA

Headings are used to organizing content.

Most of the web pages on this website use headings to organize content. But, not all blog posts need headings. A short blog post does not have a `<h2>` element.

I am not sure about this.

> This provision is included at Level AAA because it cannot be applied to all types of content and it may not always be possible to insert headings.

From: [Understanding Success Criterion 2.4.10: Section Headings | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html)

## Guideline 2.5 – Input Modalities

Make it easier for users to operate functionality through various inputs beyond the keyboard.

### 2.5.1 Pointer Gestures — Level A

Functionality that requires a path-based gesture has another alternative way to operate the functionality such as providing a button.

This website does not have a path-based gesture to operate any functionality. I skip this section.

### 2.5.2 Pointer Cancellation — Level A

Functionality that requires to use of a pointer should be able to cancel.

This website does not listen to any `MouseEvent`. Meaning there is no functionality that requires the users to use the pointer.

[MouseEvent - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)

I skip this section.

### 2.5.3 Label in Name — Level A

The visible label of a component must have the same value as the programmatically accessible name. Doing this benefits text-to-speech users because what they hear is also what they see.

> It is important to note that the specification allows authors to override the name calculated through native semantics. Both `aria-label` and `aria-labelledby` take precedence in the name calculation, overriding the visible text as the accessible name even when the visible text label is programmatically associated with the control. For this reason, when a visible label already exists, `aria-label` should be avoided or used carefully, and `aria-labelledby` should be used as a supplement with care.

I was using the `aria-labelledby` attribute for the source code links to showcase my top projects. The idea is the following:

- The visible text is "View the source code"
- The actual accessible name is "[PROJECT_NAME] - view the source code"

This will cause an issue where the text-to-speech users hear the accessible name while the visible text is different. I am aware that it is a little bit different. But, I think it will be better if both visible text and accessible name are the same.

I refactor my code and now, the links to the source code will have the following format: "Source code - [PROJECT_NAME]". For example, if the project is called "Designo", then the label for a link to the source code will be "Source code - Designo".

Other than that, both the accessible name and the visible text are the same for other links.

[Understanding Success Criterion 2.5.3: Label in Name | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)

### 2.5.4 Motion Actuation — Level A

Functionality that requires the users to move the device—such as shaking the device—should also be operated using the user interface—such as using the button element. The purpose is to prevent the users from destroying their devices while performing the action.

This website does not require moving the device to operate any functionality. I skip this section.

### 2.5.5 Target Size — Level AAA

The target size of an interactive element must be at least 44 by 44 CSS pixels (`px`).

This website does not have buttons or input elements. It has links.

Based on my understanding, links do not get counted. In other words, links do not need to be 44 by 44 CSS pixels.

I skip this section.

### 2.5.6 Concurrent Input Mechanisms — Level AAA

The content can be accessed in different ways such as using a keyboard, mouse, and combination of both.

This website does not restrict users to access it in many ways.

[Understanding Success Criterion 2.5.6: Concurrent Input Mechanisms | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html)

## Guideline 3.1 – Readable

I need to make text content readable and understandable.

### 3.1.1 Language of Page — Level A

Specify the human language of the page.

This website is using English and uses `en` as the value for the `lang` attribute.

[Understanding Success Criterion 3.1.1: Language of Page | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

### 3.1.2 Language of Parts — Level AA

The language of page content that is in a different language is identified using the `lang` attribute.

All the page content on this website is written in English.

I skip this section.

### 3.1.3 Unusual Words — Level AAA

Provide a glossary for unusual words.

This website does not provide any glossary.

[Understanding Success Criterion 3.1.3: Unusual Words | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html)

### 3.1.4 Abbreviations — Level AAA

Provide a way for users to know the meaning of abbreviations.

I try to make sure that when I use abbreviations, I give the expansion. But, I might forget to provide the expansion.

[Understanding Success Criterion 3.1.4: Abbreviations | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html)

### 3.1.5 Reading Level — Level AAA

The page content can be understood by humans that have zero to nine years of primary education. If it requires a higher education level, then it can be hard for the majority of people to understand the content.

I think it is hard to test the reading level for all pages. I try my best to not use complicated or unfamiliar words.

By the way, English is my secondary language.

[Understanding Success Criterion 3.1.5: Reading Level | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html)

### 3.1.6 Pronunciation — Level AAA

The pronunciation of the words needs to be known to identify their meaning of them.

I think I do not use words that require specific pronunciation to know their meaning. I can not guarantee this for the current and future content.

[Understanding Success Criterion 3.1.6: Pronunciation | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html)

## Guideline 3.2 – Predictable

I should make web pages appear and operate in predictable ways.

### 3.2.1 On Focus — Level A

When a page element is in a focus state, it should not change the context. For example, if a link is in a focus state, it does not do anything.

I make sure that all links that receive focus do not trigger anything.

[Understanding Success Criterion 3.2.1: On Focus | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html)

### 3.2.2 On Input — Level A

When users input something into an input field, nothing should change unless they have been notified.

This website does not contain an input field. I skip this section

### 3.2.3 Consistent Navigation — Level AA

Navigation links that are repeated on web pages should always be in the same order unless the users make the changes.

Links on the `<header>` and the `<footer>` are consistent across web pages.

[Understanding Success Criterion 3.2.3: Consistent Navigation | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html)

### 3.2.4 Consistent Identification — Level AA

A page element should always have the same label or accessible name across web pages. For example, a save button with "Save" as the label should be consistent across web pages.

This website has a "note" and a "warning" component. It also has a "Table of contents" in some blog posts. All of them have a consistent label or accessible name.

[Understanding Success Criterion 3.2.4: Consistent Identification | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html)

### 3.2.5 Change on Request — Level AAA

Changes on the web page should only happen on user request.

This website does not have automatic behavior.

[Understanding Success Criterion 3.2.5: Change on Request | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html)

## Guideline 3.3 – Input Assistance

I should help users avoid and correct mistakes when filling in a form or doing a task.

This website does not have a form or anything like that. I skip this section.

## Guideline 4.1 – Compatible

I should try my best to maximize compatibility with current and future user agents, including assistive technologies.

### 4.1.1 Parsing — Level A

The HTML markup must:

- Have complete start and end tags,
- Nested according to their specifications,
- Do not contain duplicate attributes, and
- IDs are unique.

I use an NPM package called `html-validate`—[html-validate - npm](https://www.npmjs.com/package/html-validate) to validate my HTML. It validates all four criteria.

I use [Caninclude](https://caninclude.glitch.me/) to check whether an element can be nested inside another element.

By the way, Adrian Roselli writes an article about this criteria—[The 411 on 4.1.1](https://adrianroselli.com/2022/12/the-411-on-4-1-1.html). In short, this may not be useful since modern browsers can fix invalid HTML.

[Understanding Success Criterion 4.1.1: Parsing | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)

### 4.1.2 Name, Role, Value — Level A

All web elements such as links, buttons, landmarks, and inputs must have the name and the role programmatically specified. Also, users should be notified the elements change their name or role.

This website uses semantic HTML markup.

I use Accessible Rich Internet Applications (ARIA) attributes to enhance the accessibility of this website. For example, I label all `<nav>` landmark elements with `aria-labelledby` to allow users to distinguish them.

[Understanding Success Criterion 4.1.2: Name, Role, Value | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)

### 4.1.3 Status Messages — Level AA

Status messages must be programmatically specified through ARIA roles so that assistive technologies can read them to the users without having to focus on them.

This website does not have status messages or live regions. I skip this section.

## Done

I have checked through all the guidelines that apply to this website. Hurray!

## Disclaimer

I do not know how accessible this website is. I do not know how this website interacts with different combinations of screen readers and browsers.

Also, some information may not be relevant to the current situation of this website as time goes by.

Another thing to keep in mind is following WCAG and getting most of them checked does not guarantee that a website is accessible.

<blockquote class="flow">
  <p>As ridiculous as this is, this isn't even a WCAG failure. And this is an example proof of why WCAG conformance does not guarantee usability.</p>
  <p>WCAG is the bare minimum for accessibility, but your job does not end with ticking items off a list.</p>
  <p>Perform usability tests when u can.</p>
</blockquote>

Source: [01 March 2023, Sara Soueidan on Twitter](https://twitter.com/SaraSoueidan/status/1630816690115166210)

More people say the same thing too.

[What is WCAG conformance? And why 100% conformance is not the only goal on your digital accessibility journey. | Perkins Access](https://perkinsaccess.org/what-is-conformance-and-why-100-conformance-is-not-the-only-goal-on-your-digital-accessibility-journey/)

[WCAG compliance alone does not guarantee accessibility](https://cerovac.com/a11y/2020/11/wcag-compliance-alone-does-not-guarantee-accessibility/)

**As a developer of this website, I will continue to improve its accessibility. I see it as a journey, not a one-and-done thing.**

## Feedback

I am open to any feedback and discussions. You can [send me an email](mailto:venusbumi2@gmail.com) or [raise a GitHub issue](https://github.com/vanzasetia/vanzasetia.site/issues/new).

## Useful Resources

[WebAIM: WebAIM's WCAG 2 Checklist](https://webaim.org/standards/wcag/checklist)

[Doing a basic accessibility check if you cannot do a detailed one - GOV.UK](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one)

[WCAG 2.1 Is the Current Standard, Not WCAG 2.0 — and WCAG 2.2 Is Coming](https://adrianroselli.com/2020/09/wcag-2-1-is-the-current-standard-not-wcag-2-0-and-wcag-2-2-is-coming.html)

[Progress Over Perfection: A Better Way to Accessibility](https://meryl.net/accessibility-progress-over-perfection/)

[Accessibility: Go for Progress Over Perfection – Meryl Evans meryl.net](https://meryl.net/accessibility-progress-not-perfection/)

[Your Accessibility Claims Are Wrong, Unless…](https://adrianroselli.com/2022/11/your-accessibility-claims-are-wrong-unless.html)
