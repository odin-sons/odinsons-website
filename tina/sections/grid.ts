import type { Template } from 'tinacms'
import { defaultItem, item } from '../fields/item'
import { defaultSection, section } from '../fields/section'

export const gridBlock: Template = {
  name: 'grid',
  label: 'Сетка',
  fields: section([
    {
      type: 'string',
      name: 'columns_wide',
      label: 'Колонок на огромных экранах',
      description: 'После какого количества блоков блоки должны переноситься на следующую строку сетки на огромных экранах',
      options: [ "12", "9", "6", "4", "3", "2" ],
      ui: {
        component: 'radio-group',
        direction: 'horizontal',
      },
    },
    {
      type: 'string',
      name: 'columns_desktop',
      label: 'Колонок на крупных экранах',
      description: 'После какого количества блоков блоки должны переноситься на следующую строку сетки на крупных экранах',
      options: [ "9", "6", "4", "3", "2" ],
      ui: {
        component: 'radio-group',
        direction: 'horizontal',
      },
    },
    {
      type: 'string',
      name: 'columns_tablet',
      label: 'Колонок на планшетах',
      description: 'После какого количества блоков блоки должны переноситься на следующую строку сетки на экранах планшетов',
      options: [ "6", "4", "3", "2" ],
      ui: {
        component: 'radio-group',
        direction: 'horizontal',
      },
    },
    {
      type: 'object',
      label: 'Ячейки',
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
    defaultItem: defaultSection({
      title: 'Сетка',
      columns_wide: '12',
      columns_desktop: '9',
      columns_tablet: '6',
    }),
    itemProps: (item) => {
      return { label: item?.title }
    },
  }
}