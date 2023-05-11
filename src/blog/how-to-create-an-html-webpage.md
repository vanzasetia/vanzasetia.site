---
title: How to Create an HTML Webpage
date: 2023-05-11
copyDescription: false
tableOfContents: false
---

First, you create a file with an ending of **.html**.

For the homepage, you should create an **index.html**.

You can have a **home.html** instead. But, people will have to type the domain name with the **home.html** to visit your homepage. For example, if you have **karix.website** as your domain, then they will have to type **karix.website/home.html**.

If you have an **index.html** file for the homepage then people will just need to type the domain name. Going back to the example, that means they only need to type **karix.website**.

Then, you can start having a simple homepage.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Karix</title>
    <meta name="color-scheme" content="dark light" />
  </head>
  <body>
    <main>
      <h1>Hi, I am Karix!</h1>
      <p>This is my first website.</p>
    </main>
  </body>
</html>
```

Next, if you open this website on any browser, it will be responsive. If the browser supports the `<meta name="color-scheme" />`, the website will have the color scheme based on the users' preferred theme.
