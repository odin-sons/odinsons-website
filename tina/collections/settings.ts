import type { Collection } from 'tinacms'

export const settingsCollection: Collection = {
  label: 'Настройки сайта',
  name: 'settings',
  path: 'content/settings',
  fields: [
    {
      type: 'string',
      label: 'Site Title',
      name: 'title',
    },
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
}