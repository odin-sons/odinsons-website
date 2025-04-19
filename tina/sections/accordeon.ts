import type { Template } from 'tinacms'
import { defaultItem, item } from '../fields/item'
import { defaultSection, section } from '../fields/section'

export const accordeonBlock: Template = {
  name: 'accordeon',
  label: 'Аккордеон',
  fields: section([
    {
      type: 'string',
      name: 'open',
      label: 'Развёрнутые вопросы',
      description: 'Сколько ответов на вопросы открыты по-умолчанию при открытии страницы',
      options: [
        { label: 'все открыты', value: 'opened' },
        { label: 'все закрыты', value: 'closed' },
        { label: 'открыт только первый', value: 'first-opened' },
      ],
      ui: {
        component: 'radio-group',
        direction: 'horizontal',
      },
    },
    {
      type: 'object',
      label: 'Вопросы',
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
    defaultItem: defaultSection({ title: 'Аккордеон', open: 'opened' }),
    itemProps: (item) => {
      return { label: item?.title }
    },
  }
}