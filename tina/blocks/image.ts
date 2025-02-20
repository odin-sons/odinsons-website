import type { TinaField } from 'tinacms'

export const image: TinaField = {
  type: 'object',
  label: 'Image',
  name: 'image',
  fields: [
    {
      type: 'image',
      label: 'Image',
      name: 'source',
    },
    {
      type: 'string',
      label: 'position',
      name: 'Position',
    },
    {
      type: 'string',
      label: 'fit',
      name: 'Fit',
      options: [ "none", "fill", "contain", "cover", "scale-down" ],
    }
  ],
}