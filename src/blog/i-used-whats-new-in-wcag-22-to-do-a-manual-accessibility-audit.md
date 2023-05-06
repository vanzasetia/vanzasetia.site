---
title: I Used "What's New in WCAG 2.2" to Do a Manual Accessibility Audit
description:
  I want to learn about the future of Web Content Accessibility Guidelines (WCAG). So, I am going to do a manual accessibility audit on this website (VanzaSetia.site).
date: 2023-05-06
tocMaxLevel3: true
---

## When WCAG 2.2 will come?

WCAG version 2.2 will be finished in 2023 third quarter (July, August, or September).

<blockquote class="flow">

WCAG 2.2 is scheduled to be completed and published in 2023 Q3 (July, August, September)

From: [What's New in WCAG 2.2 Draft | Web Accessibility Initiative (WAI) | W3C](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)

</blockquote>

It will be coming this year. This website should be prepared.

## How am I going to do the audit?

I had done a manual audit using WCAG version 2.1 so I am not going to read all the criteria in the newer version. I am going to only check the new and the changed criteria.

[I Used WCAG 2.1 Quick Reference to Do a Manual Accessibility Audit](/blog/i-used-wcag-2-1-quick-reference-to-do-a-manual-accessibility-audit/)

Now, start the audit.

## Disclaimer

The understanding links that I share may not exist. Also, the criteria may have been changed or removed.

## 2.4.7 Focus Visible — Level A

In WCAG version 2.1, this criterion has a Level AA conformance. It gets a lower level of conformance in the upcoming version. But, this is good because the lower the level, the higher the priority.

Most websites aim for full conformance at Level AA. So, if a criterion is level AAA, it is considered to be an enhancement (optional). But, if the criterion is level AA or level A, then developers will try their best to meet the criterion.

Anyway, this criterion tells that this website should have a focus indicator. Then, the focus indicator should be visible and not time limited.

The focus indicator on this website is not time limited and visible. 

This criterion leads to another criterion, 2.4.11 Focus Appearance (Minimum).

[Understanding Success Criterion 2.4.7: Focus Visible | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)

## 2.4.11: Focus Appearance — Level AA

This criterion explains more about how focus indicators should be made.

<blockquote class="flow">

When the keyboard focus indicator is visible, one or both of the following are true:

<ol>
  <li>
    The entire focus indicator meets all the following:
    <ul>
      <li>encloses the user interface component or sub-component that is focused, and</li>
      <li>has a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states, and</li>
      <li>has a contrast ratio of at least 3:1 against adjacent non-focus-indicator colors.</li>
    </ul>
  </li>
  <li>
    An area of the focus indicator meets all the following:
    <ul>
      <li>is at least as large as the area of a 1 CSS pixel thick perimeter of the unfocused component or sub-component, or is at least as large as a 4 CSS pixel thick line along the shortest side of the minimum bounding box of the unfocused component or sub-component, and</li>
      <li>has a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states, and</li>
      <li>has a contrast ratio of at least 3:1 against adjacent non-focus-indicator colors, or is no thinner than 2 CSS pixels.</li>
    </ul>
  </li>
</ol>

Exceptions:

- The focus indicator is determined by the user agent and cannot be adjusted by the author, or
- The focus indicator and the indicator's background color are not modified by the author.

From: [Understanding Success Criterion 2.4.11: Focus Appearance | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)

</blockquote>

I do not understand it. I read the "Understanding Success Criterion 2.4.11: Focus Appearance" and still do not understand it.

After reading a blog post about focus indicators by Sara Soueidan, I think I understand this criterion a little bit.

[A guide to designing accessible, WCAG-compliant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/)

Let me break down the criteria of focus indicators need to meet.

[Understanding Success Criterion 2.4.11: Focus Appearance (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-minimum)

### Encloses the user interface component or sub-component that is focused

The focus indicator is surrounding the component. The focus indicator on this website surrounds the focused element.

### Has a contrast ratio of at least 3:1 between the same pixels in the focused and unfocused states

The same position as where the outline is shown and the outline color should have a contrast ratio of at least 3:1.

The area where the outline is shown in my case is the body's background color. So, the contrast ratio will be **11.71:1**.

As a side note, I use "WebAIM: Contrast Checker" and the result is the text has a contrast ratio of **11.71:1**. Also, this website has only two colors—`#ddd` and `#222`.

Link for the test result — [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/?fcolor=DDDDDD&bcolor=222222)

### Has a contrast ratio of at least 3:1 against adjacent non-focus-indicator colors, or is no thinner than 2 CSS pixels

The outline color should have a contrast ratio of at least 3:1 against the other elements in a non-focus state. If I can not meet that criterion, I should make sure that the outline width is at least 2 CSS pixels.

The `outline-width` for the focus indicator on this website is **4 CSS pixels**.

### Is at least as large as the area of a 1 CSS pixel thick perimeter of the unfocused component or sub-component

<blockquote class="flow">

Now let’s assume, for demonstration purposes, that we’re designing focus styles for a 150px by 75px button. The perimeter of this button is: 150px + 150px + 75px + 75px - 4px = 446px.

An example from Sara Soueidan — [A guide to designing accessible, WCAG-compliant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/)

</blockquote>

I understand how to calculate the perimeter of the element. For example, if a button has a width of 200px and a height of 50px, the perimeter of this button is: 200px + 200px + 50px + 50px - 4px = 496px.

I do not understand how to calculate the perimeter of the focus indicator. The focus indicator of this website is the following:

```css
:focus {
  outline: 0.3rem solid;
  outline-offset: 0.2em;
}
```

`outline-offset: 0.2em` is at least 3 CSS pixels. `outline-width: 0.3rem` is 4 CSS pixels.

I do not know. Luckily, I do not need to understand it now. It might be removed once WCAG version 2.2 is finalized.

### This criterion is hard to understand

I think it will not be a problem if the criterion is removed when WCAG version 2.2 is published.

Hidde also thinks this is complex — [2.4.11 Focus Appearance adds more complexity to WCAG than we should want | hidde.blog](https://hidde.blog/focus-appearance-too-complex/)

Even the WCAG put this criterion in a "Items at Risk" section — [Web Content Accessibility Guidelines (WCAG) 2.2 #items-at-risk](https://www.w3.org/TR/WCAG22/#items-at-risk)

## 2.4.12: Focus Not Obscured — Level AA

The focused element is not entirely hidden. In other words, it is okay that some part of the focused element is hidden.

All elements on this website on focus state are visible including the "skip to main content" link.

[Understanding Success Criterion 2.4.12: Focus Not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured.html)

## 2.4.13 Focus Not Obscured (Enhanced) — Level AAA

The focused element must be visible. No hidden part.

All elements on this website on focus state are visible.

[Web Content Accessibility Guidelines (WCAG) 2.2 #focus-not-obscured-enhanced](https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced)

[Understanding Success Criterion 2.4.13: Focus Not Obscured (Enhanced) | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced)

## 2.5.7 Dragging Movements — Level AA

I should provide alternative ways for dragging movements.

This website does not implement any dragging movements to do anything.

[Understanding Success Criterion 2.5.7: Dragging Movements | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements)

## 2.5.8 Target Size (Minimum) — Level AA

The target size of interactive elements must be at least 24 by 24 CSS pixels (`px`).

In WCAG version 2.1, no minimum target size criterion — [Understanding Success Criterion 2.5.5: Target Size | WAI | W3C](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)

This website has interactive elements but they are all inline links *except* the "skip to main content" link. It has at least 187 by 58 CSS pixels.

[Understanding Success Criterion 2.5.8: Target Size (Minimum) | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## 3.2.6 Consistent Help — Level A

The help mechanisms on a website must be consistent.

<blockquote class="flow">

Typical help mechanisms include:

- Human contact details such as a phone number, email address, hours of operation.
- Human contact mechanism such as a messaging system, chat client, contact form, social media channel.
- Self-help option such as an up-to-date Frequently Asked Questions, How Do I page, Support page.
- A fully automated contact mechanism such as a chatbot.

</blockquote>

This website does not have help mechanisms.

[Understanding Success Criterion 3.2.6: Consistent Help | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help)

## 3.3.7 Redundant Entry Level — A

If users are required to input the same information many times, the input elements should have auto-populate or autofill functionality. Another way is to allow users to select the previous information. This way, users do not have to keep typing the same information over and over again.

This website does not have input elements or anything for users to input something.

[Understanding Success Criterion 3.3.7: Redundant Entry | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry)

## 3.3.8 Accessible Authentication (Minimum) Level — AA

Users should be able to authenticate without remembering passwords or solving puzzles. This can be done by allowing different ways to authenticate without a password. For example, users can input their email and they will get a link from their email to authenticate themselves—[G218: Email link authentication | WAI | W3C](https://www.w3.org/WAI/WCAG22/Techniques/general/G218).

Another way is to allow users to paste the password to the password input. Users that use password manager will do that. I use a password manager and always paste the password to authenticate myself. So, please developers always allow users to paste passwords.

This website does not have any authentication.

The understanding page for this criterion is giving me a 404 page — [Error 404 - Not found (Understanding Success Criterion 3.3.8: Accessible Authentication (Minimum) | WAI | W3C)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum)

## 3.3.9 Accessible Authentication (Enhanced) Level — AAA

This enhanced version of the 3.3.8 Accessible Authentication criterion removes the two authentication processes, **object recognition** and **personal content**. I think it is because users still have to "think" to solve them.

The purpose of accessible authentication is to eliminate the need for users to perform a task that requires them to use their cognitive abilities.

<blockquote class="flow">

**Object Recognition**: The cognitive function test is to recognize objects.

**Personal Content**: The cognitive function test is to identify non-text content the user provided to the website.

From: [What's New in WCAG 2.2 Draft | Web Accessibility Initiative (WAI) | W3C #338-accessible-authentication-minimum-aa](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/#338-accessible-authentication-minimum-aa)

</blockquote>

This website does not have any authentication.

[Understanding Success Criterion 3.3.9: Accessible Authentication (Enhanced) | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced)

## Finish

The WCAG version 2.2 currently has nine new success criteria.

1. **2.4.11 Focus Appearance (Level AA) – at risk**
1. **2.4.12 Focus Not Obscured (Level AA)**
1. **2.4.13 Focus Not Obscured (Enhanced) (Level AAA)**
1. **2.5.7 Dragging Movements (Level AA)**
1. **2.5.8 Target Size (Minimum) (Level AA)**
1. **3.2.6 Consistent Help (Level A)**
1. **3.3.7 Redundant Entry (Level A)**
1. **3.3.8 Accessible Authentication (Minimum) (Level AA)**
1. **3.3.9 Accessible Authentication (Enhanced) (Level AAA)**

I hope the WCAG team will remove the **2.4.11 Focus Appearance** criterion. Less is more. Otherwise, they should make it less complex.

## Related resources

[A guide to designing accessible, WCAG-compliant focus indicators](https://www.sarasoueidan.com/blog/focus-indicators/) — This article helps me to understand **2.4.11: Focus Appearance** criterion.

[New Success Criteria in WCAG 2.2 - TPGi](https://www.tpgi.com/new-success-criteria-in-wcag22/)

[Are we there yet? WCAG 2.2 is at the Candidate Recommendation stage again.](https://www.deque.com/blog/wcag-2-2-is-at-the-candidate-recommendation-stage/)

[Understanding WCAG 2.2 | WAI | W3C](https://www.w3.org/WAI/WCAG22/Understanding/)

[What's New in WCAG 2.2?](https://knowbility.org/blog/2022/whats-new-in-wcag-2-2)
