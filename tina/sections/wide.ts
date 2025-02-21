import type { Template } from 'tinacms'
import { item } from '../blocks/item'

export const wideBlock: Template = {
  name: 'wide',
  label: 'Wide',
  fields: [
    {
      type: 'boolean',
      name: 'published',
      label: 'Published'
    },
    {
      type: 'string',
      label: 'Section title',
      name: 'title',
    },
    {
      type: 'object',
      label: 'Items',
      name: 'items',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title }
        },
      },
      fields: item,
    },
    // add buttons
  ],
}