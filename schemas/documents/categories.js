import preview from "part:sanity-plugin-icon-picker/preview";
import { FcDatabase } from 'react-icons/fc'

export default {
  title: 'Categories',
  name: 'category',
  type: 'document',
  icon: FcDatabase,
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Category name (Eg. Wine, Beer etc)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'id',
      title: 'id',
      description: 'Category ID (click "Generate" to create id based on category name)',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      description: 'Select icon for category',
      type: 'iconPicker'
    },
  ],
  preview: {
    select: {
      title: 'name',
      id: 'id.current',
      icon: 'icon'
    },
    prepare: ({ title, id, icon }) => ({
      title,
      subtitle: `id: ${id}`,
      media: preview(icon)

    })
  }
}