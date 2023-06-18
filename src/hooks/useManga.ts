import { useQuery } from '@tanstack/react-query';

export const useManga = (id: string) => {
  return useQuery({
    queryKey: ['manga', id] as const,
    queryFn: ({ queryKey }) =>
      fetch(`/api/${queryKey[0]}/${queryKey[1]}`).then((res) => res.json()),
  });
};
