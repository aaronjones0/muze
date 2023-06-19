'use client'

import SomeComp from '@muze/components/some-comp/somecomp';
import { createClient } from 'next-sanity';
import { useRouter } from 'next/navigation';

export default async function Home() {
  // const tvSeries: TVSeries[] = await getTVSeries();
  // const books: Book[] = await getBooks();
  // const manga: Manga[] = await getManga();

  const router = useRouter();

  return (
    <>
      <div className='h-full'>
        <SomeComp onAddEntry={() => router.push('/add-entry')} />
        {/* <Image src='/MuzeLogo.svg' height={80} width={80} alt='Muze Logo' /> */}
        {/* <AppHeader command={command} onCommandChanged={(cmd) => setCommand(cmd)} /> */}
        {/* <div className='flex flex-row'>
          {tvSeries?.map((tvs) => (
            <Link href={`/tv-series/${tvs._id}`} key={tvs._id}>
              <div>
                <div className='inline-block hover:text-neutral-400'>
                  <div className='m-3 rounded-xl w-fit shadow-nh-md cursor-pointer'>
                    <div className='h-full w-full rounded-xl shadow-ns-md overflow-hidden border-2 border-neutral-900'>
                      <img
                        src={
                          tvs.primaryImage ? `${tvs.primaryImage}?h=200` : ''
                        }
                        alt={`${tvs.short_title} Cover Image`}
                      />
                    </div>
                  </div>
                  <div className='flex'>
                    <label className='grow w-0 mx-3 pl-1 text-sm'>
                      {tvs.short_title}
                    </label>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex flex-row'>
          {books?.map((b) => (
            <Link href={`/book/${b._id}`} key={b._id}>
              <div key={b._id}>
                <div className='inline-block hover:text-neutral-400'>
                  <div className='m-3 rounded-xl w-fit shadow-nh-md cursor-pointer'>
                    <div className='h-full w-full rounded-xl shadow-ns-md overflow-hidden border-2 border-neutral-900'>
                      <img
                        src={b.cover_url ? `${b.cover_url}?h=200` : ''}
                        alt={`${b.short_title} Cover Image`}
                      />
                    </div>
                  </div>
                  <div className='flex'>
                    <label className='grow w-0 mx-3 pl-1 text-sm'>
                      {b.short_title}
                    </label>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <h1 className='ml-3 font-black text-4xl mt-6 mb-2 text-zinc-700'>
          Manga
        </h1>
        <div className='flex flex-row'>
          {manga.map((m: Manga) => (
            <Link href={`/manga/${m._id}`} key={m._id}>
              <div
              // onClick={() => router.push(`/manga/${m._id}`)}
              // key={m._id}
              >
                <div className='inline-block hover:text-neutral-400'>
                  <div className='m-3 rounded-xl w-fit shadow-nh-md cursor-pointer'>
                    <div className='h-full w-full rounded-xl shadow-ns-md overflow-hidden border-2 border-neutral-900'>
                      <img
                        src={
                          m.front_cover_english_url
                            ? `${m.front_cover_english_url}?h=200`
                            : ''
                        }
                        alt={`${m.title_english} Cover Image`}
                      />
                    </div>
                  </div>
                  <div className='flex'>
                    <label className='grow w-0 mx-3 pl-1 text-sm'>
                      {m.title_english}
                    </label>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div> */}
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
    "cover_url": cover_image.asset->url
  }`);
  console.log(books);
  // console.log(books[0].cover_image.asset);
  return books;
}

async function getManga() {
  const manga = await client.fetch(`*[_type == "manga"]{
    _id,
    title_english,
    "front_cover_english_url": front_cover_english.asset->url
  }`);
  // const manga = await fetch(`/api/manga`).then((res) => res.json());

  return manga;
}
