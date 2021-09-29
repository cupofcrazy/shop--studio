import { FcInfo } from "react-icons/fc";

export default {
  name: 'about',
  type: 'document',
  icon: FcInfo,
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'The title of the page',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'short_description',
      description: 'Short description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'color',
      type: 'color',
      description: 'The color of the page',
    },
    {
      name: 'cover',
      type: 'a11yImage',
    },
  ]
}