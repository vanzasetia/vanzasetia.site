# Personal Website of Vanza Setia

I write blog posts on my website. Before, I used to write in CodeNewbie.

My CodeNewbie profile — [Vanza Setia - CodeNewbie Community 🌱](https://community.codenewbie.org/vanzasetia)

You can find all my blog posts on the archive page—[Archive — Vanza Setia](https://vanzasetia.site/archive/).

All the links that I found useful to build this website is on [`./docs/README.md`](./docs/README.md).

## Technology

My website is using the following technology:

- [Eleventy](https://www.11ty.dev/)
- HTML
- CSS
- SVG
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Node.js](https://nodejs.org/en/)
- Node.js
- WAI-ARIA

## Usage

You can use the source code and modify it to create your own personal website.

## Getting started

I use Node `v18` at the time I am writing this section—02 April 2023. I do not know what might happen if you run this project on the Node that is below `v18`. To be safe, make sure you use Node `v18` or higher.

You should install all the `devDependencies` by executing:

```bash
npm install
```

After that, you can view the project on your localhost with:

```bash
npm run start
```

Then, you can build the project with:

```bash
npm run build
```

You can view the website at [http://localhost:8080/](http://localhost:8080/)

## Configuration

You can configure everything. In this section, I tell you some of the things that you can configure.

### Environment variables

You should create a `.env` file, then have one variable.

```txt
DEVELOPMENT=true
```

`DEVELOPMENT` is set to `true` to prevent the minification while you are developing the website. This can help you to see the output and do validation.

### Commands

You can configure the `start` and `build` commands by looking at the Eleventy documentation—[Command Line Usage — Eleventy](https://www.11ty.dev/docs/usage/).

The `clean` command is used to remove the `_site` folder. This can be useful if you have a duplication issue or you want to get a new and fresh build version. You can change the command by adding or removing more folders to delete. The full documentation is available on GitHub—[isaacs/rimraf: A `rm -rf` util for nodejs](https://github.com/isaacs/rimraf).

The `check-links` command is used to check internal navigation links such as the links inside the table of contents. You must run the `start` or the `build` command first before running this command—to generate the `_site` folder. The documentation—[Check HTML links | Rocket](https://rocket.modern-web.dev/tools/check-html-links/overview/).

The `validate-html` command is used to validate all HTML files inside the `_site` folder. I have configured the HTML validation with the [`.htmlvalidate.json`](./.htmlvalidate.json). You can configure the HTML validation by taking a look at the documentation—[HTML-validate - Getting started](https://html-validate.org/usage/index.html).

### Metadata

You can change the metadata of the website by changing the [`./src/_data/metadata.js`](./src/_data/metadata.js) file.

The complete source code of the `<head>` tag is inside the [`./src/_includes/layouts/base.njk`](./src/_includes/layouts/base.njk).

## Deployment

I recommend using Netlify—I use this platform to host my website. There is already a `netlify.toml` file that will configure the build process.

## Acknowledgments

I created this website using Eleventy. Before I knew about it, I thought it would be very hard to maintain a static website with a lot of pages. Now, I manage to create my website and write blog posts. Thank you, Eleventy team!

This `README` is inspired by the following article—[How To README · Matthias Ott – User Experience Designer](https://matthiasott.com/notes/how-to-readme).

Icons are coming from [Atlas Icons](https://atlasicons.vectopus.com/) with 45px in size and bold stroke settings.

## License

[Unlicense](./LICENSE)

> Why Use the Unlicense?
>
> Because you have more important things to do than enriching lawyers or imposing petty restrictions on users of your code.
>
> From [Unlicense.org » Unlicense Yourself: Set Your Code Free](https://unlicense.org/)
