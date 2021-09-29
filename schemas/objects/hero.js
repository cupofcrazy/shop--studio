export default {
  name: 'hero',
  title: "Hero Section",
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'subtitle',
      type: 'string',
      
    },
    {
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true
      },
    }
  ]
}