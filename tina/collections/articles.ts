import type { Collection } from 'tinacms'
import { defaultPage, page } from '../fields/page';

export const articlesCollection: Collection = {
  name: "articles",
  label: "Статьи",
  path: "content/articles",
  fields: [
    ...page,
    {
      type: 'string',
      name: 'wide',
      label: 'Wide',
    }
  ],
  ui: {
    defaultItem: () => defaultPage,
    itemProps: (item) => {
      return { label: item?.title }
    },
  }
}