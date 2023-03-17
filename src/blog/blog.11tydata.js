module.exports = {
  tags: ["blog"],
  layout: "layouts/blog.njk",
  blog: true,
  permalink: "/blog/{{ title | slugify }}/index.html",
  tableOfContents: true
};
