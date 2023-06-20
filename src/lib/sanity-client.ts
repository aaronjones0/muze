import { createClient } from 'next-sanity';

export const sanity = createClient({
  projectId: 'ay6fcqh0',
  dataset: 'production',
  apiVersion: '2023-06-16',
  useCdn: false,
});
