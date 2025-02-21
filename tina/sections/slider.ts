import type { Template } from 'tinacms'
import { item } from '../blocks/item'

export const sliderBlock: Template = {
  name: 'slider',
  label: 'Slider',
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