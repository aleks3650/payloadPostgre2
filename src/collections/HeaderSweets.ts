import { CollectionConfig } from 'payload'

export const HeaderSweets: CollectionConfig = {
  slug: 'header-sweets',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
