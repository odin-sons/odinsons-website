import type { Collection } from 'tinacms'
import * as sections from "../sections";
import { page } from '../fields/page';

export const pagesCollection: Collection = {
  name: "pages",
  label: "Страницы из секций и блоков",
  path: "content/pages",
  match: {
    include: '*',
  },
  format: 'md',
  fields: [
    ...page,
    {
      type: 'object',
      list: true,
      name: 'sections',
      label: 'Секции',
      templates: [
        sections.wide,
        sections.slider,
        sections.grid,
        sections.accordeon
      ],
    },
  ],
}