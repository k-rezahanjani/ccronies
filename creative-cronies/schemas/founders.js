import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'founders',
  title: 'Founders',
  type: 'document',
  fields: [
      defineField({
        name: 'image',
        title: 'Images',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
  ]
})
