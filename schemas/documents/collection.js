import preview from "part:sanity-plugin-icon-picker/preview";
import { FcPlus } from 'react-icons/fc'

export default {
  name: 'collection',
  title: 'Collections',
  type: 'document',
  icon: FcPlus,
  fields: [
    {
      name: 'name',
      title: 'Collection name',
      description: 'The name of the collection eg. New Arrivals, Premium',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'id',
      title: 'Collection ID',
      description: 'The id of the collection (Source from name)',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'products',
      title: 'Products',
      description: 'A list of products to add to the collection eg. wine, alcohol weight',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: Rule => Rule.required().unique(),
      
    },
    {
      name: 'icon',
      title: 'Icon',
      description: 'Select icon for collection',
      type: 'iconPicker'
    },
  ],
  preview: {
    select: {
      title: 'name',
      icon: 'icon'
    },
    prepare: ({ title, icon }) => ({
      title,
      media: preview(icon)

    })
  }
}