---
title: "Frontend Mentor: How to Compare Your Solution with the Design before Submitting?"
date: 2023-04-01
tableOfContents: false
copyDescription: false
---

It is possible to compare your solution without using any browser extensions. All you need is:

- Three HTML files, 
- The screenshot of your site, and 
- The image of the design.

## This approach works for me

I try this approach on my solution for the pricing toggle component and the result is my website looks very close to the design.

Take a look at it — [Frontend Mentor | Pricing Component with Toggle | Progressive Enhancement coding challenge solution](https://www.frontendmentor.io/solutions/pricing-component-with-toggle-progressive-enhancement-PBaxEGerju)

## Get the screenshot of your website

If you are using Google Chrome or any chromium browser such as Brave, you can open the developer tool and toggle the responsive mode.

Then, you should set the width to 1440px. 

**Attention**. For the height, make sure it is less than the height of the page. This way, when you take a full size screenshot, it will be the height of the page. To keep things simple, I recommend setting the height to 200px.

Once you configured the sizes, click the three dots inside the responsive mode window. Next, choose the "Capture full size screenshot" option.

{% image "./capture-full-size-screenshot.png", "Screenshot of a drop down menu with the cursor on the \"Capture full size screenshot\" menu" %}

### Caveats

The size of the screenshot is twice larger than the original size of your site. For example, if the size of the website is 1440px × 800px, the screenshot will result in being 2880px × 1600px.

This is not good. You want the screenshot to be the same size as the design.

There are two ways to solve this problem:

- Resize the screenshot, or
- Resize the design image

If you choose to resize the screenshot, it means that every time you generate a new screenshot you have to resize it.

If you choose to resize the design image, you only need to do a resize once. It is because the screenshot and the design will always have the same dimension.

For me, I choose to resize the design image.

### Resize the image

You can use any tool to resize the image. I use [Image Resizer | Easily Resize Images Online for FREE](https://imageresizer.com/).

## The HTML file to compare your website with the design

Here is the code snippet:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Comparison. The website screenshot is above the design</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }

      img {
        display: block;
      }

      .top {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.8; /* You can adjust this */
        z-index: 2;
      }
    </style>
  </head>
  <body>
    <!-- You can move the "top" class to the design -->
    <img src="[PATH_TO_SCREENSHOT]" alt="" class="top" />
    <img src="[PATH_TO_DESIGN]" alt="" />
  </body>
</html>
```

## The HTML file to see your website

Here is the code snippet:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Preview of the screenshot</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }

      img {
        display: block;
      }
    </style>
  </head>
  <body>
    <img src="[PATH_TO_SCREENSHOT]" alt="" />
  </body>
</html>
```

## The HTML file to see the original design

Here is the code snippet:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Preview of the design</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }

      img {
        display: block;
      }
    </style>
  </head>
  <body>
    <img src="[PATH_TO_DESIGN]" alt="" />
  </body>
</html>
```

## Adjust the zoom level

Now, you can start a local host. After that, open three tabs in your browser to open all the HTML files. Then, you need to zoom out since the images are 2880px width—they may not fit on your screen.

## Start comparing your solution

I recommend trying to navigate through the tabs. I use Windows. So, the shortcut will be <kbd>Ctrl</kbd> + <kbd>Tab</kbd>.

## Closing

Now, you should be able to make adjustments as much as you want until your website looks close enough to the design.

You should keep in mind that the quality of the code is more important than getting your website to match 100% with the design. So, do not sacrifice the code quality for the sake of a pixel-perfect website.

Also, it is impossible to get a pixel-perfect website — [Chasing the Pixel-Perfect Dream](https://www.joshwcomeau.com/css/pixel-perfection/)

As a side note, this is not meant to be a replacement for the slider on the solution page. Frontend Mentor uses the Firefox browser to generate a screenshot of your website. So, for better comparison, you should generate the screenshot of your website from a Firefox browser.

If you have any questions or suggestions, you can [send me an email](mailto:venusbumi2@gmail.com) or [raise a GitHub issue](https://github.com/vanzasetia/vanzasetia.site/issues/new).

I hope this helps.
