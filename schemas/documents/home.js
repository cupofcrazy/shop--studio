import Tabs from 'sanity-plugin-tabs'
import { FcHome } from 'react-icons/fc'

export default {
  name: 'home',
  type: 'document',
  icon: FcHome,
  fields: [
    {
      name: 'content',
      type: 'object',
      inputComponent: Tabs,
      fieldsets: [
        { name: 'main', title: 'Main', options: { sortOrder: 10 } },
        { name: 'details', title: 'Details', options: { sortOrder: 20 } },
      ],
      fields: [
        { name: 'seo', type: 'seo', fieldset: 'main', description: 'Set the homepage title and description', options: { collapsible: true } },
        { name: 'heroSection', type: 'hero', fieldset: 'details', description: 'Adjust the homepage hero title, subtitle, and main image', options: { collapsible: true } },
      ],
      options: {
        layout: "object"
      },
    },
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}