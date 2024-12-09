module.exports = function(eleventyConfig) {
  // Pass through copy for JavaScript files
  eleventyConfig.addPassthroughCopy("src/js");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};