export default {
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'uploadLogo',
      title: 'Upload Logo',
      type: 'image',
        options: {
          hotspot: true,
        }
    }
  ],
};