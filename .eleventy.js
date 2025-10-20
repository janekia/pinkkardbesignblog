// eleventy.config.js (ESM)
export default function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Add current year as global data
  eleventyConfig.addGlobalData("build", { year: new Date().getFullYear() });

  // Nunjucks filter
  eleventyConfig.addNunjucksFilter("fmtDate", (dateObj) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(dateObj);
    } catch {
      return dateObj;
    }
  });

  // Return directory and template settings
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
