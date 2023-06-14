import { TVSeries } from '@muze/model/TVSeries';
import { createClient } from 'next-sanity';

export default async function Home() {
  const tvSeries: TVSeries[] = await getTVSeries();

  return (
    <>
      <ul>
        {tvSeries?.map((tvs) => (
          <li key={tvs._id}>{tvs.short_title} ({tvs._id})</li>
        ))}
      </ul>
    </>
  );
}

const client = createClient({
  projectId: 'ay6fcqh0',
  dataset: 'production',
  apiVersion: '2023-06-14',
  useCdn: false,
});

async function getTVSeries() {
  const tvSeries = await client.fetch(`*[_type == "tvSeries"]`);

  return tvSeries;
}
