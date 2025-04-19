import type { TinaField } from 'tinacms'

export const button: TinaField[] = [
  {
    type: 'string',
    label: 'Текст кнопки',
    name: 'text',
  },
  {
    type: 'string',
    label: 'Ссылка кнопки',
    name: 'link',
  },
  {
    type: 'string',
    label: 'Приоритет кнопки',
    name: 'type',
    options: [
      { label: 'основная', value: 'primary' },
      { label: 'второстепенная', value: 'secondary' },
      { label: 'ссылка', value: 'tertiary' },
    ],
    ui: {
      component: 'radio-group',
      direction: 'horizontal',
    },
  },
  {
    type: 'string',
    label: 'Размер кнопки',
    name: 'size',
    options: [
      { label: 'мелкая', value: 'small' },
      { label: 'средняя', value: 'medium' },
      { label: 'большая', value: 'large' },
    ],
    ui: {
      component: 'radio-group',
      direction: 'horizontal',
    },
  }
]

export const defaultButton = {
  link: '',
  text: 'Кнопка',
  type: 'primary',
  size: 'medium'
}