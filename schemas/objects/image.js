export default {
  name: 'a11yImage',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      description: 'Descriptive alt text for image. Required for SEO purposes',
      validation: Rule => Rule.required()
    }
  ],
}