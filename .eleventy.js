const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const tocExtract = require("toc-extract/plugins/eleventy.js");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const recentChanges = require("eleventy-plugin-recent-changes");
const htmlmin = require("html-minifier");
const imagePlugin = require("./eleventy.config.images.js");
const Webmentions = require("eleventy-plugin-webmentions");
const dotenv = require("dotenv");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./assets/fonts": "/fonts",
    "./assets/favicons": "/favicons",
    "./assets/svg": "/svg",
    "./assets/favicons/favicon.ico": "/favicon.ico",
    "./src/manifest.json": "/manifest.json",
    "./src/robots.txt": "/robots.txt"
  });

  eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpeg}");
  eleventyConfig.addWatchTarget("./assets/css/*.css");

  eleventyConfig.addPlugin(imagePlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginBundle);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(recentChanges);
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true }).use(markdownItAnchor)
  );
  eleventyConfig.addPlugin(tocExtract, {
    listElement: "ul",
    minLevel: 2,
    maxLevel: 2
  });

  eleventyConfig.addPlugin(tocExtract, {
    filterName: "tocMaxLevel3",
    listElement: "ul",
    minLevel: 2,
    maxLevel: 3
  });

  // Exposing the environment variable
  dotenv.config();

  eleventyConfig.addPlugin(Webmentions, {
    domain: "vanzasetia.site",
    token: process.env.TOKEN_API
  });

  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
      format || "dd LLLL yyyy"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addPairedShortcode("note", (content) => {
    return `<aside aria-label="note" class="note">
      <div>
        <svg width="50" height="50" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><style>.cls-62{fill:none;}</style></defs><circle cx="12" cy="12" r="10.5" class="cls-62"/><path d="M12 16.77v-6.68h-1.91m0 6.68h3.82m-2.86-9.54h1.9" class="cls-62"/></svg>
        <p>${content}</p>
      </div>
    </aside>`;
  });

  eleventyConfig.addPairedShortcode("warning", (content) => {
    return `<aside aria-label="warning" class="note">
      <div>
        <svg width="50" height="50" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><style>.cls-63{fill:none;}</style></defs><path d="M12.13 3.41h-.26a1.48 1.48 0 0 0-1.26.7L1.73 18.32a1.48 1.48 0 0 0-.23.79A1.48 1.48 0 0 0 3 20.59h18a1.48 1.48 0 0 0 1.48-1.48 1.48 1.48 0 0 0-.23-.79L13.39 4.11a1.48 1.48 0 0 0-1.26-.7ZM12 8.18v5.73M12 15.82v1.91" class="cls-63"/></svg>
        <p>${content}</p>
      </div>
    </aside>`;
  });

  eleventyConfig.addTransform("htmlmin", function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "./src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
