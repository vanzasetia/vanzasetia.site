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
        <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false"><path d="M14 9.5c0-.825.675-1.5 1.5-1.5h1c.825 0 1.5.675 1.5 1.5v1c0 .825-.675 1.5-1.5 1.5h-1c-.825 0-1.5-.675-1.5-1.5v-1zM20 24h-8v-2h2v-6h-2v-2h6v8h2z"/><path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z"/></svg>
        <p>${content}</p>
      </div>
    </aside>`;
  });

  eleventyConfig.addPairedShortcode("warning", (content) => {
    return `<aside aria-label="warning" class="note">
      <div>
        <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false"><path d="m16 2.899 13.409 26.726H2.59L15.999 2.899zM16 0c-.69 0-1.379.465-1.903 1.395L.438 28.617C-.608 30.477.282 32 2.416 32h27.166c2.134 0 3.025-1.522 1.978-3.383L17.901 1.395C17.378.465 16.688 0 15.998 0z"/><path d="M18 26a2 2 0 1 1-3.999.001A2 2 0 0 1 18 26zM16 22a2 2 0 0 1-2-2v-6a2 2 0 1 1 4 0v6a2 2 0 0 1-2 2z"/></svg>
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
