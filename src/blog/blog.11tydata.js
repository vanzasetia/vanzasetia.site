module.exports = {
  tags: ["blog"],
  layout: "layouts/content.njk",
  blog: true,
  permalink: "/blog/{{ title | slugify }}/index.html",
  tableOfContents: true
};
