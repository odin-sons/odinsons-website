import type { Template } from 'tinacms'
import { item } from './item'

export const introBlock: Template = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text: 'Phasellus scelerisque',
    },
  },
  fields: item
}