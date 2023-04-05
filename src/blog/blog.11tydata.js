module.exports = {
  tags: ["blog"],
  layout: "layouts/blog.njk",
  blog: true,
  description: "A blog post from vanzasetia.site blog",
  copyDescription: true,
  permalink: "/blog/{{ title | slugify }}/index.html",
  tableOfContents: true,
  generatedByAI: false
};
