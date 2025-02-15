import type { TinaField } from 'tinacms'

export const item: TinaField[] = [
  {
    type: 'string',
    label: 'Title',
    name: 'title',
  },
  {
    type: 'string',
    label: 'Text',
    name: 'text',
    ui: {
      component: 'textarea',
    },
  },
  {
    type: 'image',
    label: 'Image',
    name: 'image',
  }
]