import Tabs from 'sanity-plugin-tabs'
import { FcBriefcase } from "react-icons/fc";

export default {
  name: 'product',
  title: 'Product',
  description: 'Create a new product',
  type: 'document',
  icon: FcBriefcase,
  preview: {
    select: {
      name: 'content.name',
      category: 'content.category.name',
      media: 'content.mainImage',
    },
    prepare({ name, category, media }) {
      console.log({ name, category, media })
      return {
        title: name,
        subtitle: category && `Type: ${category}`,
        media
      }
    }
  },
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'main', title: 'Main', options: { sortOrder: 10 } },
        { name: 'aside', title: 'Details', options: { sortOrder: 20 } },
        { name: 'meta', title: 'Meta', options: { sortOrder: 30 } }
      ],
      options: {
        layout: "object"
      },
      
      fields: [
        {
          name: "name",
          title: "Product Name",
          type: "string",
          fieldset: "main",
        },
        {
          name: "id",
          title: "Product ID",
          type: "slug",
          description: 'A short id for the product (Click "Generate" to create id from product name)',
          fieldset: "main",
          validation: Rule => Rule.required(),
          options: {
            source: (doc, options) => doc.content.name
          }
        },
        {
          name: 'description',
          type: 'text',
          description: 'A short description of the product (also for SE0)',
          fieldset: 'aside',
          validation: Rule => Rule.required(),
        },
        {
          name: 'tags',
          title: 'Product Tags',
          description: 'A list of tags associated with the product eg. wine, alcohol weight',
          type: 'array',
          of: [{ type: 'string' }],
          validation: Rule => [
            Rule.required()
              .min(1)
              .max(10)
              .error('Required field with at least 1 unique tag and at most 10 entries'),
            Rule.unique()
          ]
        },
        {
          name: 'price',
          type: 'number',
          description: 'The price of the product (preferably in Nigeria NGN)',
          fieldset: 'main',
          validation: Rule => Rule.required(),
        },
        {
          name: 'sku',
          type: 'string',
          description: 'Barcode (ISBN, UPC, GTIN, etc.)',
          fieldset: 'aside',
        },
        {
          name: 'quantity',
          type: 'number',
          description: 'Available quantity',
          fieldset: 'aside',
        },
        {
          name: 'weight',
          type: 'number',
          description: 'Weight of the product',
          fieldset: 'aside',
        },
        {
          name: 'vendor',
          type: 'string',
          description: 'Product original vendor',
          fieldset: 'aside',
        },
        {
          name: "mainImage",
          title: "Product Main Image",
          description: 'Main image of the product',
          type: "image",
          fieldset: "main",
        },
        {
          name: 'category',
          type: 'reference',
          fieldset: 'aside',
          description: 'The category of the product',
          to: [{ type: 'category' }],
          validation: Rule => Rule.required()
        },
        {
          name: 'images',
          title: 'Product Images',
          description: 'Other images for the product',
          type: 'array',
          of: [
            { type: 'image' }
          ],
          fieldset: 'aside'
        }
      ]
    }
  ]
}