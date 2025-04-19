import type { TinaField } from 'tinacms'
import { button, defaultButton } from './button'

export const section = (fields: TinaField[]): TinaField[] => [
  {
    type: 'boolean',
    name: 'published',
    label: 'Отображение секции',
    description: 'Переключи вправо, чтоб показывать. Влево, чтобы скрыть.'
  },
  {
    type: 'string',
    label: 'Заголовок секции',
    name: 'title',
    description: 'Оставь пустым, чтобы скрыть'
  },
  {
    type: 'string',
    label: 'Подзаголовок секции',
    name: 'subtitle',
    description: 'Оставь пустым, чтобы скрыть'
  },
  {
    type: 'string',
    label: 'Ширина секции',
    name: 'width',
    options: [
      { label: 'как у страницы', value: 'inherited' },
      { label: 'узкая', value: 'narrow' },
      { label: 'широкая', value: 'wide' },
      { label: 'на всю страницу', value: 'full' },
    ],
    ui: {
      component: 'radio-group',
      direction: 'horizontal',
    },
  },
  ...fields,
  {
    type: 'object',
    label: 'Кнопки в конце секции',
    name: 'buttons',
    list: true,
    fields: button,
    ui: {
      defaultItem: () => defaultButton,
      itemProps: (item) => {
        return { label: item?.text }
      },
    },
  },
]

export const defaultSection = (fields = {}) => {
  return {
    published: false,
    title: 'Секция',
    subtitle: '',
    width: 'inherited',
    ...fields,
    buttons: [],
  }
}