import type { Template } from 'tinacms'
import { item } from '../blocks/item'

export const accordeonBlock: Template = {
  name: 'accordeon',
  label: 'Accordeon',
  fields: [
    {
      type: 'object',
      label: 'Feature Items',
      name: 'items',
      list: true,
      fields: item,
    },
  ],
}