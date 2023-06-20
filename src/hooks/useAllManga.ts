import { useQuery } from '@tanstack/react-query';

export const useAllManga = () => {
  return useQuery({
    queryKey: ['manga'] as const,
    queryFn: async ({ queryKey }) => await fetch(`/api/manga`).then((res) => res.json()),
    // queryFn: ({ queryKey }) =>
    //   fetch(`/api/${queryKey[0]}`).then((response) => {
    //     if (response.status === 404) {
    //       throw new Error(
    //         `Unable to load data from your API. Please let your IT department know that CityLaw could not access this API endpoint: ${response.url}`
    //       );
    //     } else if (response.status >= 400) {
    //       throw new Error(`HTTP Status ${response.status}.`);
    //     }

    //     return response.json();
    //   }),
  });
};
