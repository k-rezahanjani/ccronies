import createImageUrlBuilder from '@sanity/image-url'

const imageBuilder = createImageUrlBuilder({
  projectId: '9v87dqs2',
  dataset: 'production',
})

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}
