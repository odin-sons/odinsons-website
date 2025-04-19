import type { Template } from 'tinacms'
import { defaultItem, item } from '../fields/item'
import { defaultSection, section } from '../fields/section'

export const wideBlock: Template = {
  name: 'wide',
  label: 'На всю ширину',
  fields: section([
    {
      type: 'object',
      label: 'Блоки',
      name: 'items',
      list: true,
      ui: {
        defaultItem: () => defaultItem,
        itemProps: (item) => {
          return { label: item?.title }
        },
      },
      fields: item,
    },
  ]),
  ui: {
    defaultItem: defaultSection({ title: 'На всю ширину' }),
    itemProps: (item) => {
      return { label: item?.title }
    },
  }
}