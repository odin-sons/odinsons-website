import type { Template } from 'tinacms'
import { defaultItem, item } from '../fields/item'
import { defaultSection, section } from '../fields/section'

export const sliderBlock: Template = {
  name: 'slider',
  label: 'Слайдер',
  fields: section([
    {
      type: 'object',
      label: 'Слайды',
      name: 'items',
      list: true,
      fields: item,
      ui: {
        defaultItem: () => defaultItem,
        itemProps: (item) => {
          return { label: item?.title }
        },
      },
    },
  ]),
  ui: {
    defaultItem: defaultSection({ title: 'Слайдер' }),
    itemProps: (item) => {
      return { label: item?.title }
    },
  }
}