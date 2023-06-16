import { Book } from '@muze/model/Book';
import { TVSeries } from '@muze/model/TVSeries';
import { createClient } from 'next-sanity';

export default async function Home() {
  const tvSeries: TVSeries[] = await getTVSeries();
  const books: Book[] = await getBooks();

  return (
    <>
      <div className='absolute top-0 bottom-0 left-0 right-0 p-4 bg-neutral-900 text-neutral-400'>
      <div className='flex flex-row'>
          {tvSeries?.map((tvs) => (
            <div key={tvs._id}>
              <div className='inline-block text-neutral-500 hover:text-neutral-400'>
                <div className='m-3 rounded-xl w-fit shadow-nh-md cursor-pointer'>
                  <div className='h-full w-full rounded-xl shadow-ns-md overflow-hidden border-2 border-neutral-900'>
                    <img
                      src={tvs.primaryImage ? `${tvs.primaryImage}?h=200` : ''}
                      alt={`${tvs.short_title} Cover Image`}
                    />
                  </div>
                </div>
                <div className='flex'>
                  <label className='grow w-0 mx-3 text-sm'>
                    {tvs.short_title} ({tvs._id})
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-row'>
          {books?.map((b) => (
            <div key={b._id}>
              <div className='inline-block text-neutral-500 hover:text-neutral-400'>
                <div className='m-3 rounded-xl w-fit shadow-nh-md cursor-pointer'>
                  <div className='h-full w-full rounded-xl shadow-ns-md overflow-hidden border-2 border-neutral-900'>
                    <img
                      src={b.coverImageUrl ? `${b.coverImageUrl}?h=200` : ''}
                      alt={`${b.short_title} Cover Image`}
                    />
                  </div>
                </div>
                <div className='flex'>
                  <label className='grow w-0 mx-3 text-sm'>
                    {b.short_title} ({b._id})
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
  const tvSeries = await client.fetch(`*[_type == "tvSeries"]{
    _id,
    short_title,
    "primaryImage": image_primary.asset->url
  }`);

  return tvSeries;
}

async function getBooks() {
  const books = await client.fetch(`*[_type == "book"]{
    _id,
    short_title,
    "coverImageUrl": cover_image.asset->url
  }`);
  console.log(books);
  // console.log(books[0].cover_image.asset);
  return books;
}
