import 'server-only';
import { createClient } from 'next-sanity';

export default function useSanityWriteClient(apiToken: string) {
  const sanityWrite = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    token: apiToken,
    useCdn: false,
  });

  return sanityWrite;
}
