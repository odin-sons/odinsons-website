import { EleventyRenderPlugin } from "@11ty/eleventy";

export default async function(eleventyConfig) {
  const plugins = [
    { packageName: '@11ty/eleventy-plugin-directory-output' },
    { packageName: '@11ty/eleventy-navigation' },
  ]
  const assetsToCopy = [
    { 'assets/fonts': 'fonts' },
    { 'assets/img': 'img' },
    { 'assets/site.webmanifest': 'site.webmanifest' },
  ]
  const importModule = async (name) => {
    const { default: module } = await import(name)
    return module
  }

	eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.amendLibrary("md", async (mdLib) => {
    mdLib.use(await importModule("markdown-it-bracketed-spans"))
    mdLib.use(await importModule("markdown-it-attrs"))
  });


  for (const { packageName, options = {} } of plugins) {
    eleventyConfig.addPlugin(await importModule(packageName), options)
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