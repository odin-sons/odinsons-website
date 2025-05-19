import type { Template, TinaField } from 'tinacms'
import { image } from './image'
import { button } from './button'

export const item: TinaField[] = [
  {
    type: 'boolean',
    name: 'published',
    label: 'Отображение блока',
    description: 'Можно скрыть на случай, если блок не нужен сейчас, но потребуется вскоре',
    toggleLabels: {
      true: 'Виден',
      false: 'Скрыт',
    },
  },
  {
    type: 'string',
    label: 'Заголовок блока',
    placeholder: 'Например, FAQ',
    name: 'title',
    description: 'Оставь пустым, чтобы скрыть'
  },
  {
    type: 'string',
    label: 'Подзаголовок блока',
    name: 'subtitle',
    description: 'Оставь пустым, чтобы скрыть'
  },
  {
    type: 'string',
    label: 'Текст блока',
    name: 'text',
    description: 'Оставь пустым, чтобы скрыть',
    ui: {
      component: 'textarea',
    },
  },
  {
    type: 'object',
    label: 'Кнопки',
    name: 'buttons',
    list: true,
    fields: button,
    ui: {
      itemProps: (item) => {
        return { label: item?.text }
      },
    },
  },
  {
    type: 'object',
    label: 'Медиа в контенте',
    name: 'media',
    description: 'Используй, если медиа - значимая часть контента. Оно будет вписано в сетку, доступно в режиме чтения и озвучки сайта',
    list: true,
    templates: [
      image as Template,
      // TO DO: Embed
    ],
  },
  {
    type: 'boolean',
    name: 'reverse',
    label: 'Отзеркалить',
    description: 'Поменять местами блок и медиа',
  },
  {
    type: 'object',
    label: 'Медиа на фоне',
    name: 'background',
    description: 'Используй, если медиа служит для оформления. Оно будет подложкой под блоком, недоступно в режиме чтения и озвучки сайта',
    list: true,
    templates: [
      image as Template,
      // TO DO: Embed
    ],
  },
]

export const defaultItem = {
  published: true,
  title: 'Блок',
  subtitle: '',
  text: '',
  buttons: [],
  media: [],
  background: [],
  reverse: false,
}