import type { Template, TinaField } from 'tinacms'
import { image } from './image'

export const item: TinaField[] = [
  {
    type: 'boolean',
    name: 'published',
    label: 'Published',
    description: 'Toggle to show block, untoggle to hide block'
  },
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
    type: 'object',
    label: 'Media',
    name: 'media',
    list: true,
    templates: [
      image as Template,
      // TO DO: Embed
    ],
  },
  {
    type: 'boolean',
    name: 'reverse',
    label: 'Reverse'
  },
  {
    type: 'image',
    label: 'Background',
    name: 'background',
  },
]