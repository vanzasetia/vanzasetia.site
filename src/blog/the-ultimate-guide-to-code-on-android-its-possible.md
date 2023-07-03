---
title: "The Ultimate Guide To Code On Android: It's Possible!"
description:
  "You don't need a computer to start your coding journey. With an Android device
  and internet connection, you can start learning to code today! In this
  article, I'm going to tell you everything you need to know to code on your
  Android device."
date: 2022-01-13
dateModified: 2023-07-03
---

## Introduction

[(Back to top)](#table-of-contents)

Hi! I'm Vanza. I had coded on my Android device for about six months, and now I'm going to share the tools that I used to code on my Android.

Here are three of the projects that I did with my Android device:

- [vanzasetia/clipboard-landing-page](https://github.com/vanzasetia/clipboard-landing-page)
- [vanzasetia/huddle-landing-page-with-alternating-feature-blocks](https://github.com/vanzasetia/huddle-landing-page-with-alternating-feature-blocks)
- [vanzasetia/fylo-dark-theme-landing-page](https://github.com/vanzasetia/fylo-dark-theme-landing-page)

This is a long article. Let's get started!

## Disclaimer

[(Back to top)](#table-of-contents)

This guideline focuses on front-end web development. But, you can use some guidelines to get started with some other things, such as executing Python.

This guideline is going to cover the basics of using certain tools. For further learning, I have provided the links to help you learn about the specific tool.

Also, keep in mind that coding on Android is only an alternative way to code.

First, let's discuss what code editor you should use.

## Code editor

[(Back to top)](#table-of-contents)

The first thing that you need to have is a code editor. This is the place where you can write or edit your code.

I have two recommendations. Both are free and amazing code editors. I have tried both code editors and each has pros and cons.

Let's get into the first code editor.

### Acode

[Acode](https://play.google.com/store/apps/details?id=com.foxdebug.acodefree) is a freemium and open source code editor developed by foxdebug (a.k.a. [Ajit Kumar - deadlyjack](https://github.com/deadlyjack) on GitHub).

It has a good rating on Google Play Store, which is 4.4 stars for the free version and 4.5 stars for the paid version.

It has many features as described in the app description. But, I want to mention some of my favorite features:

- [Emmet](https://www.emmet.io/), write HTML & CSS quickly,
- Two font families (the default and [fira code](https://github.com/tonsky/FiraCode)),
- Customizable, and
- Open multiple tabs and projects at once.

The things that I don't like are:

- The autocomplete for JavaScript is not smart (It doesn't like VS Code IntelliSense),
- You can't change the app color theme unless you buy the pro version, and
- Ads on the setting interface (checked on v1.6.0).

I recommend [installing Acode from the F-Droid](https://f-droid.org/packages/com.foxdebug.acode/). It is the pro version of the Acode, but free. If you install it from F-Droid, you can get all the premium features without ads.

### Spck Editor

[Spck Editor](https://play.google.com/store/apps/details?id=io.spck) is a free and powerful code editor for HTML, CSS, and JavaScript.

It has a good rating on Google Play Store, which is 4.3 stars.

The features of this code editor that I like are:

- Emmet, write HTML & CSS quickly,
- Git client integration (basic commands only),
- Customizable (dark & light themes, custom fonts, etc),
- It has smart IntelliSense like VS Code for JavaScript auto-completion, and
- Great built-in console ([eruda](https://github.com/liriliri/eruda))

But, it also has some limitations:

- You can't have multiple tabs opened, and
- Your local projects will disappear if you uninstall the app

For the second point of the limitations, if your phone is Android 10 or lower, you can prevent it by copying the `io.spck` folder to somewhere safe before uninstalling the app. But for Android 11, you can't do anything about it.

> **Access to files**
> You can no longer use the `ACTION_OPEN_DOCUMENT_TREE` or the `ACTION_OPEN_DOCUMENT` intent action to request that the user select individual files from the following directories:
>
> - The `Android/data/` directory and all subdirectories.
> - The `Android/obb/` directory and all subdirectories.
>

— [Android Developers page about _"Storage updates in Android 11"_](https://developer.android.com/about/versions/11/privacy/storage#file-access)

Meaning that you can't access the `Android/data/io.spck`.

The only way to save all your projects is to upload each project to a GitHub repository.

In my opinion, Spck Editor offers a lot of awesome features, but at the same time, it has some limitations that I don't like.

### Which one should I use?

I would recommend trying both of them and picking the one that makes you comfortable writing the code.

## Terminal

[(Back to top)](#table-of-contents)

Terminal or command line is a tool that allows you to do many tasks. You can create, modify, and delete file(s), and much more!

For terminal, [Termux](https://termux.com/) is the absolute best choice for me.

Now, let's dive into Termux!

### Termux

What is Termux?

> Termux is an Android terminal emulator and Linux environment application that works directly with no rooting or setup required.

— [Termux Wiki main page](https://wiki.termux.com/wiki/Main_Page)

Termux is the best terminal for Android. Here are the reasons:

- Free and Open Source Software (FOSS)
- Easy to use, it gives you extra keys like arrow keys
- Install and update packages easily

Now, If you want to install Termux, [install it from the F-Droid](https://f-droid.org/packages/com.termux/). Do not install it from Google Play Store, since it doesn't receive any updates anymore.

Next, I'm going to tell you how to set up Termux for web development.

### Set up Termux

I would recommend reading the [Getting started - Termux Wiki page](https://wiki.termux.com/wiki/Getting_started) to get some basic knowledge about Termux.

After that, open your Termux and follow the steps below.

First, copy-paste or type the command below

```bash
termux-setup-storage
```

Second, Termux will be asking for storage permission, and you should grant the permission.

Third, you must update the packages that already exist on Termux. So, copy-paste or type the command below:

```bash
pkg upgrade
```

During the upgrade process, you might get asked two times or more, and answer it with `Y`

```bash
*** motd (Y/I/N/O/D/Z) [default=N] ? Y
```

After that, you should see a message that says, _"All packages are up to date ."_ on the Termux output.

Now, I recommend installing all the official packages from Termux. To do that, copy-paste or type the below command.

```bash
pkg install game-repo && pkg install science-repo && pkg install root-repo && pkg install x11-repo
```

Then, Termux will ask you a question. You can answer it with `Y`.

That's it! Now, your Termux is ready to use.

{% note %}
The list of the official Termux packages is coming from the <a href="https://wiki.termux.com/wiki/Package_Management">Termux Wiki page</a>
{% endnote  %}

### Basic commands

I am going to tell you four commands.

First, `cd` : change directory/folder

```bash
~ $ cd storage/shared
~/storage/shared $
```

Second `mkdir` : make directory/folder(s)

```bash
~/storage/shared $ mkdir test
~/storage/shared $
```

Third `ls` : list all the files and folders **except** the files or folders that start with `.` (hidden files or folders). To list all the files and folders, execute `ls -a`.

```bash
~/storage/shared $ ls
Android    DCIM
test       notes.txt
```

{% warning %}
Yours might be different, but you should see the <code>test</code> folder if you follow along.
{% endwarning  %}

Fourth, `touch` : create file(s)

```bash
~/storage/shared $ cd test
~/.../shared/test $ touch index.html style.css
~/.../shared/test $ ls
index.html    style.css
~/.../shared/test $
```

To learn more commands, you can visit the [Linux Journey website](https://linuxjourney.com/lesson/the-shell).

### Install Git

Git is free and open-source version control that is used to track the project's history. It's used by every developer to work with a project safely. Developers can undo what they did using Git if they made a mistake.

Now to install Git, follow the instructions.

First, type `git` in your Termux and execute it.

Then, Termux should tell you that Git is not installed. After that, it is going to tell what command you should execute to install Git.

```bash
The program git is not installed. Install it by executing:
  pkg install git
```

The above step is useful if you want to install new packages but don't know what command you should type.

That's it! After executing the `pkg install git`, you should have Git now.

To check that Git has been installed, you can type `git --version`. If it has been installed, Termux should tell what version your git is.

To set up your Git, you can watch this Youtube video.

Keep in mind, that you are using Termux which means you are typically a Linux user (not Mac or Windows user).

### Install Vim

Vim is a free and open-source text editor that can run on Termux.

**You need Vim**. Vim allows you to access some files, like git config file and `.bashrc`. Those files are located above the `shared/` folder which can't be accessed by your code editor.

Also if you are using Git there's a chance that Git wants to open a text editor, like solving merge conflicts, doing rebase, and other stuff that required you to decide what Git should do.

So, to install Vim execute the command below:

```bash
pkg install vim
```

After that, you can use it by executing this command:

```bash
~/.../shared/test $ vim index.html
```

Luckily, Termux version 0.117 already provides you with the arrow keys. Otherwise, you have to use `h`, `j`, `k`, and `l` to navigate in Vim.

To learn more about Vim key bindings, visit [Vim Cheat Sheet](https://vim.rtorr.com/)

I am going to show you all the things that commonly you will use on Vim:

- `i` to get into insert mode (edit file)
- `Esc` to go back to the initial mode
- The below command will only work if you are in initial mode:
  - Type `:q` to exit (only work if you don't edit the file)
  - Type `:q!` to exit without saving the file
  - Type `:wq` to save and exit

**Pro tip**: Only use Vim for Git stuff. Once, you are comfortable with Termux and Vim, you can start using them to edit the `.bashrc` file to set up aliases.

### Install Node.js

To install Node.js all you have to do is to execute the command below and type `Y` to proceed with the installation.

```bash
pkg install nodejs
```

#### Install `npm` packages

Installing any `npm` packages on Termux are the same as installing them on Mac or Windows. But, on Termux, or I should say on Android, **you can only install `npm` packages globally** since Android doesn't allow you to install the packages locally. So, keep that in mind.

There's one `npm` package which is [chalk](https://www.npmjs.com/package/chalk) that I know can be installed locally.

To install chalk, execute the commands below in your project folder:

```bash
npm init -y && npm install chalk
```

Now, I'm going to show you how to install [Sass](https://www.npmjs.com/package/sass) (CSS Pre-processor) and [live server](https://www.npmjs.com/package/live-server) (automatically reload your website after any changes that you made).

Now, let's install both packages.

Execute the command below:

```bash
npm install sass live-server --global
```

The above command will install Sass and live-server globally, which means that you can execute the Sass and live server command from any directory.

To learn [how to use Sass](https://sass-lang.com/guide) and/or live-server, you can see the documentation for each package. For Sass, you can type `sass` and Termux should give you a useful output.

```bash
~/.../shared/test $ sass
Compile Sass to CSS.

Usage: sass <input.scss> [output.css]
       sass <input.scss>:<output.css> <input/>:<output/> <dir/>

# more information
```

#### Uninstall `npm` packages

Let's say, that you don't use Sass and live-server packages, you can uninstall them by executing the below command:

```bash
npm uninstall sass live-server --global
```

### Pro tips

Here are some tips to make sure you are safe when using Termux:

- Don't watch any YouTube tutorials about _"Hacking using Termux"_
- Update installed packages regularly
- Always read the Termux output
- Don't execute the command that you don't understand
- Learn about [`alias`](https://linuxjourney.com/lesson/alias-command) command
- Read the [Termux Wiki FAQ](https://wiki.termux.com/wiki/FAQ)
- Read the [`README` on Termux's official GitHub repo](https://github.com/termux/termux-app)
- Install `man` package. `man` is going to provide documentation about commands.

```bash
~ $ pkg install man
# some output
~ $ man cd
# It will show the manual page of the "cd" command
```

## Browser

[(Back to top)](#table-of-contents)

Browser is the place where you will see what your code is doing (how your website looks like). Choosing the correct browser would be an important step.

I have three options. Each browser has different use cases based on my preference.

### Google Chrome

[Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome&hl=en_US&gl=US) is without a doubt the most popular browser. It is free and cross-platform. So, it is a good practice to make sure that your website looks great on Google Chrome.

Now, I am going to give you one suggestion to use Google Chrome for web development.

Make the **Text scaling** to **50%**. To find the setting, you can follow these steps:

- Tap the three dots
- Scroll until you find **Accessibility** and tap it
- Now, adjust the **Text scaling** down to **50%**

The reason for doing that is that you want to make sure that the mobile view on your Android is the same as the mobile view on the desktop (using responsive mode on a desktop browser).

Unfortunately, if you are using the default value which is **100%**, making `1rem` is no longer `16px`. It is around `17px to 18px`. Also, it feels like your website gets to zoom in.

### Firefox

The second browser is [Firefox](https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en_US&gl=US). It is also free and cross-platform.

My recommendation is to use Firefox to see the mobile and the desktop view at the same time. The desktop view that I'm talking about is the **built-in desktop view** and **text scaling** on the accessibility menu.

To find the text scaling setting on Firefox, follow the step above.

After you find the **Font Size** (**text scaling** in Firefox), you should disable the **Automatic font sizing** setting and make the **Font Size** to 100%.

Now, any website that you open should have the same size as you see in Google Chrome.

Here's the trick to see your website on different resolutions in Firefox:

- Try to play around with the **Font Size**
- Next, try to enable and disable the **Desktop site** option
- Try to make your phone on landscape mode

If you try to open [this website](https://vanzasetiacommunity.netlify.app/) on Firefox with **Font Size 50%**, see it on landscape mode, and make sure the **Desktop site** is disabled. Then, you will see that the layout is changing from one column to two columns. The two columns layout is the desktop layout.

Keep in mind that it is not working if the developer, or you, use the `px` unit for the `@media` query.

```css
/* ❎ This will not have any effect */
@media screen and (min-width: 950px) {
  /* ...some code */
}

/* ✅ This will take effect */
@media screen and (min-width: 59.375em) {
  /* ...some code */
}
```

### Brave

The last browser is [Brave](https://play.google.com/store/apps/details?id=com.brave.browser&hl=en_US&gl=US). It is used to see a website when there's an Ad blocker (making sure that it still looks good without ads).

You can also use it to see how your website looks without JavaScript. It is much easier to do that using Brave than other browsers, since it only requires toggling the **Block Scripts** option.

## Dev tool

[(Back to top)](#table-of-contents)

Developer tool is a tool that can help you debug your code in your browser. A developer tool in front-end web development is used to inspect the element's styling or debug the JavaScript code.

The best Android dev tool is Eruda. Let's discuss it!

### Eruda

Eruda is a free and open-source developer tool for mobile browsers.

You can try it yourself by visiting [https://eruda.liriliri.io/](https://eruda.liriliri.io/). Try to inspect any elements, try all the **Snippets**, etc.

After you try it, it is powerful, isn't it?

Now to use it on your project, you can put these lines of code inside the `<head>` tag.

```html
<head>
  <script src="//cdn.jsdelivr.net/npm/eruda"></script>
  <script>
    eruda.init();
  </script>
</head>
```

If you want to inspect another website, you need to create a bookmark. You can bookmark a blank page. After that, you can set "Dev tool" as the name of the bookmark. After that, change the URL with this line of code:

```javascript
javascript: (function () {
  var script = document.createElement("script");
  script.src = "//cdn.jsdelivr.net/npm/eruda";
  document.body.appendChild(script);
  script.onload = function () {
    eruda.init();
  };
})();
```

Now, if you want to inspect the website that you're currently at, you can tap the search bar, then remove the URL, and type "Dev tool". After that, you may need to wait for a couple of seconds for the gear icon to show up on the bottom right of your screen (default position).

Keep in mind, that unfortunately on some websites you can't use the Eruda developer tool.

## Desktop view

[(Back to top)](#table-of-contents)

Viewing your website using a built-in **Desktop site** does not show you the exact view of how your website looks on a real desktop. But, there's a tool that can help you to see your website in different screen sizes easily.

### Responsive Testing Tool

The way you view your website on a desktop or any screen size is the following:

- Visit [Website Responsive Testing Tool](http://responsivetesttool.com/),
- Copy and paste this URL as an example: [https://vanzasetia.github.io/qr-code-component/index.html](https://vanzasetia.github.io/qr-code-component/index.html),
- Now, you should see a text : **1024 x 600 [ Desktop ]**, which is showing how your website looks like on **1024px x 600px**,
- To see your website on a specific screen size, let's say on **1440px x 1080px**, you should click the icon next to the television icon,
- Then, it should show the input text that contains **1024** (right input: width) and **600** (left input: height),
- Next, you can change **1024** with **1440** and **600** with **1080**, and
- You can tap the **GO** button.

Now, you can put your localhost URL and try to see your website on different screen sizes.

Keep in mind, that the URL should always end with `.html` or else it will say that it is invalid.

## Resources

[(Back to top)](#table-of-contents)

All the resources are in the GitHub repo, which you can check to keep up to date with the latest tools to code on Android.

## Too long; didn’t read

[(Back to top)](#table-of-contents)

- **Code Editor**
  - Use [Acode](https://f-droid.org/en/packages/com.foxdebug.acode/) or [Spck Editor](https://play.google.com/store/apps/details?id=io.spck&hl=en_US&gl=US) or **both**
- **Terminal**
  - [Termux](https://f-droid.org/en/packages/com.termux/) for the terminal. Learn how to use it from the [official Termux Wiki](https://wiki.termux.com/wiki/Main_Page)
- **Browsers**
  - [Chrome](https://play.google.com/store/apps/details?id=com.android.chrome&hl=en_US&gl=US): makes sure your website looks good on it since it's the most popular browser
  - [Firefox](https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en_US&gl=US): makes sure your website also looks good on it
  - [Brave](https://play.google.com/store/apps/details?id=com.brave.browser&hl=en_US&gl=US): makes you easier to see your website without JavaScript
- **Dev Tool**
  - [Eruda](https://eruda.liriliri.io/): learn how to use it by reading [the `README` on the GitHub repo](https://github.com/liriliri/eruda)
- **Desktop View**
  - [Responsive site tool website](http://responsivetesttool.com/): make sure the URL always ends with `.html` or else it will say that the URL is invalid (both localhost and hosted website)
- **Resources**
  - [vanzasetia/the-ultimate-resources-to-code-on-android: Contains all the tools that you need to code on Android device.](https://github.com/vanzasetia/the-ultimate-resources-to-code-on-android)

## Have fun

That's it! Hopefully, this is helpful!
