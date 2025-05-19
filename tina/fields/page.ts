import type { TinaField } from 'tinacms'

export const page: TinaField[] = [
  {
    type: 'boolean',
    name: 'published',
    label: 'Отображение страницы',
    description: 'Скрытая страница не будет доступна на сайте, но всё ещё будет доступна для редактирования в админке. Так можно писать статью сколько угодно долго, и отобразить только когда потребуется',
    toggleLabels: {
      true: 'Публична',
      false: 'Черновик',
    },
  },
  {
    type: 'string',
    label: 'Шаблон',
    name: 'layout',
    options: [
      {
        label: 'Секции и блоки',
        value: 'sections',
      }
    ]
  },
  {
    type: 'string',
    label: 'Заголовок страницы',
    description: 'Будет на вкладке браузера, а также в описательном блоке при шаринге в соц. сетях',
    name: 'title',
    isTitle: true,
    required: true,
  },
  {
    type: 'image',
    label: 'Картинка для поисковиков и соц. сетей',
    name: 'source',
  },
]

export const defaultPage = {
  published: true,
  title: 'Страница',
  layout: 'sections'
}