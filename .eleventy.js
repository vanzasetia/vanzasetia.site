const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const tocExtract = require("toc-extract/plugins/eleventy.js");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const recentChanges = require("eleventy-plugin-recent-changes");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./assets/fonts": "/fonts",
    "./assets/images": "/images",
    "./assets/favicons": "/favicons",
    "./assets/favicons/favicon.ico": "/favicon.ico",
    "./src/manifest.json": "/manifest.json",
    "./src/robots.txt": "/robots.txt"
  });

  eleventyConfig.addWatchTarget("./assets/css/*.css");

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

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    }
  };
};
