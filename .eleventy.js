module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style.css')
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('css')

  return {
    passthroughFileCopy: true
  }
}
