
import markdownit from 'markdown-it'

const md = markdownit({
  html: true,
  breaks: true,
  typographer: true,
  linkify: true,
});

export async function markdown (content) {
  return md.render(content);
}