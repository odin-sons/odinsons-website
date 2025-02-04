export async function cssmin (css) {
  const { minify } = await import("csso");

  return minify(css).css
}