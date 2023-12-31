import { createClient } from 'next-sanity'

export const client = createClient({
  apiVersion: '2023-12-22',
  dataset: 'production',
  projectId: '9v87dqs2',
  useCdn: false,
})