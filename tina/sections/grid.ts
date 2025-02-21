import type { Template } from 'tinacms'
import { item } from '../blocks/item'

export const gridBlock: Template = {
  name: 'grid',
  label: 'Grid',
  fields: [
    {
      type: 'object',
      label: 'Items',
      name: 'items',
      list: true,
      fields: item,
    },
  ],
}