export default {
  name: 'imageWithCaption',
  type: 'object',
  description: 'A single image with a caption.',
  fields: [
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'alt',
      type: 'string',
    },
    {
      name: 'hasCaption',
      type: 'boolean',
    },
    {
      name: 'caption',
      type: 'text',
    },
  ],
};
