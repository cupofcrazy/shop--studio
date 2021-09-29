fields: [
  {
    name: 'name',
    type: 'string',
    description: 'The name of the product',
    validation: Rule => Rule.required(),
  },
  {
    name: 'slug',
    type: 'slug',
    description: 'The slug / unique id of the product (from product name)',
    options: {
      source: 'name'
    },
    validation: Rule => Rule.required(),
  },
  {
    name: 'description',
    type: 'text',
    description: 'A short description of the project (also for SE0)',
    validation: Rule => Rule.required(),
  },
  {
    name: 'category',
    type: 'reference',
    description: 'The category of the product',
    to: [{ type: 'category' }],
    validation: Rule => Rule.required()
  },
  {
    name: 'quantity',
    type: 'number',
    description: 'The quantity of the product',
    validation: Rule => Rule.required(),
  },
  {
    name: 'available',
    type: 'boolean',
    description: 'Is the product available?',
    validation: Rule => Rule.required(),
  },
  {
    name: 'price',
    type: 'number',
    description: 'The price of the product',
    validation: Rule => Rule.required(),
  },
  {
    name: 'boxPrice',
    type: 'number',
    description: 'The price of the product in a box / pack',
    // validation: Rule => Rule.required(),
  },
  {
    name: 'currency',
    type: 'string',
    description: 'The currency of the product',
    validation: Rule => Rule.required(),
  },
  {
    name: 'cover',
    type: 'image',
    description: 'The cover image of the product',
    options: {
      hotspot: true
    }
  },
  {
    name: 'images',
    type: 'array',
    description: 'Images for the project',
    of: [
      {
        type: 'image'
      }
    ],
    validation: Rule => Rule.required(),
  },
],
preview: {
  select: {
    title: 'name',
    subtitle: 'price',
    media: 'cover',
    quantity: 'quantity',
    isAvailable: 'available',
  },
  prepare(selection) {
    console.log({ selection });
    const { title, subtitle, media, quantity, isAvailable } = selection;
    return {
      title,
      subtitle: `Price: N${subtitle} ● Quantity: ${quantity} ● ${isAvailable ? 'Available' : 'Not Available'}`,
      media
    };
  },
}