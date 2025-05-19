import type { Collection } from 'tinacms'

export const authorsCollection: Collection = {
  name: "authors",
  label: "Авторы",
  path: "content/authors",
  match: {
    include: '*',
  },
  format: 'md',
  fields: [
    {
      type: 'string',
      name: 'wide',
      label: 'Wide',
    }
  ]
}