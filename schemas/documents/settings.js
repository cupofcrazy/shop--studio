import { FcSettings } from "react-icons/fc";

export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: FcSettings,
  fields: [
    {
      name: 'title',
      type: 'string',
      description: 'The title of the project',
      validation: Rule => Rule.required(),
    },
  ]
}