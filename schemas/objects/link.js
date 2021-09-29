import React from "react";
import { FcShare } from 'react-icons/fc'

export default {
  name: 'link',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'href',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media: <FcShare />
      }
    }

  }
};