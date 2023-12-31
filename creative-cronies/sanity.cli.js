import { createClient } from 'next-sanity'
import {defineCliConfig} from 'sanity/cli'
// import createImageUrlBuilder from '@sanity/image-url'


export default defineCliConfig({
  api: {
    projectId: '9v87dqs2',
    dataset: 'production'
  }
})