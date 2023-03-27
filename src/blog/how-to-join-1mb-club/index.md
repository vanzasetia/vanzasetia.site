---
title: "Practical Guide: How to Join 1MB Club?"
date: 2023-03-27
copyDescription: false
tableOfContents: false
---

My website has been accepted. Thank you, [Bradley Taunt](https://bt.ht/)!

## Background of creating this guide

I found the [1MB Club: How to Submit](https://1mb.club/submit) is not clear enough. So, I created this guide to make it easy for people to join the club.

The most important thing, this guide **provides you all the commands that you need to execute**. So, you do not need to guess or do more research.

In this guide, I will use **Gmail** as the email service and **Windows** as the machine.

You can use this as a helper for the [Learn to use email with git!](https://git-send-email.io/).

## Clone the repository

It is the same as cloning a GitHub—or any other Git providers—repository.

Here is the link to the repository: [~bt/1mb.club - A growing collection of performance-focused web pages weighing less than 1 megabyte. - sourcehut git](https://git.sr.ht/~bt/1mb.club)

Open Git Bash, and execute the below command to clone the repository.

```bash
git clone git@git.sr.ht:~bt/1mb.club
```

## Add your website

You should add your website to the `_site_listings/` folder.

You need to create a Markdown file with the following format `yourdomain.com.md`.

In my case, it would be `vanzasetia.site.md`.

Then, write or type the following things. Adjust it based on your domain.

```md
---
pageurl: yourdomain.com
size: 8.2
---
```

The `pageurl` should only be your domain. For example, `vanzasetia.site`.

The `size` is in kilobyte (KB). I wrote the uncompressed size. For example, `42.3`.

{% note %}
If you want to know the size of your website—both the compressed and the uncompressed size—I recommend doing a GTmetrix scan. <a href="https://gtmetrix.com/">GTmetrix | Website Performance Testing and Monitoring</a>
{% endnote %}

## Save the local changes

After that, you should add the file to the staging stage.

```bash
git add .
```

Then, write the commit message.

```bash
git commit -m "Add yourdomain.com"
```

## Git for Windows

Make sure you are installing Git from the official website.

Official website of Git to download Git for Windows — [Git - Downloading Package](https://git-scm.com/download/windows)

## Set up the Git

Now, open the global Git configuration. Executing the below command will open your default code editor for Git.

```bash
git config --global --edit
```

Then, copy-paste the following code to the global config.

```txt
[sendemail]
  smtpserver = smtp.gmail.com
  smtpuser = you@gmail.com
  smtpencryption = tls
  smtpserverport = 587
```

After that, change the value of the `smtpuser` with your email. You do not need to change the other things.

## Get the password

You must activate two-factor authentication for your Gmail account.

Visit the following page to activate two-factor authentication — [2-Step Verification](https://myaccount.google.com/signinoptions/two-step-verification)

After that, visit the "App Password" page — [App passwords](https://myaccount.google.com/apppasswords).

You should see the following things:

{% image "./screenshot-app-password-page.png", "Screenshot of the app password page" %}

After that, click "Select app" and it will show you 5 options. You should choose "Other (Custom name)".

{% image "./screenshot-displaying-options.png", "Screenshot of the options of the select app menu" %}

Then, you will be asked to input a name. You can input whatever name you like. I used "Git" for the name.

{% image "./screenshot-showing-generate-password.png", "Screenshot of giving name \"Git\" to the input with active \"Generate\" button" %}

Then, click the "Generate" button.

Now, you should see a modal and be able to see your password.

{% image "./screenshot-showing-modal-and-password.png", "Screenshot of modal that gives the password" %}

After that, execute the following command to set up your password—so you only need to enter it once.

```bash
git config --global sendemail.smtpPass 'your password'
```

## Send an email through Git

Execute the following command.

```bash
git send-email --to="~bt/1mb.club@lists.sr.ht" HEAD^
```

After that, you will get a question, _"Send this email?"_ Answer it with letter `y`.

```bash
Send this email? ([y]es|[n]o|[e]dit|[q]uit|[a]ll): y
```

{% warning %}
You must use Git Bash to send the email. This will ensure that everything works without any problems.
{% endwarning%}

## Done

Now, you should see `OK` on the Git Bash.

```bash
OK. Log says:
# Showing data such as
# Server, MAIL FROM, and other data
```
