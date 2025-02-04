export default async function(eleventyConfig) {
  const plugins = [
    { packageName: '@11ty/eleventy-plugin-directory-output' },
    { packageName: '@11ty/eleventy-navigation' }
  ]
  const assetsToCopy = [
    { 'assets/fonts': 'fonts' },
  ]

  for (const { packageName, options = {} } of plugins) {
    const { default: importedPlugin } = await import(packageName)

    eleventyConfig.addPlugin(importedPlugin, options)
  }

  const filters = await import("./_11ty/filters.js")

  for (let filter in filters) {
    eleventyConfig.addFilter(filter, filters[filter])
  }

  for (const asset of assetsToCopy) {
    eleventyConfig.addPassthroughCopy(asset)
  }

  eleventyConfig.addWatchTarget('assets/css/**/*.css');
}

export const config = {
  htmlTemplateEngine: "njk",
}