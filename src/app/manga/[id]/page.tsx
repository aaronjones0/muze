'use client';

import ImageTile from '@muze/components/ImageTile/ImageTile';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { sanity } from '@muze/lib/sanity-client';
import { Manga } from '@muze/model/Manga';

export default async function Page({ params }: { params: { id: string } }) {
  const mangaId: string = params.id;
  const results: Manga[] = await getMangaDetails(mangaId);
  const manga: Manga = results[0];

  return (
    <div className='h-full flex flex-row text-neutral-500'>
      <div className='grow flex flex-col'>
        <h1 className='mt-4 text-4xl text-neutral-300 font-black tracking-wider'>
          {manga.title_english}
        </h1>
        <h2 className='mb-8 text-2xl text-neutral-400 font-black tracking-wider'>
          {manga.title_japanese}
        </h2>
        <ol>
          <li>{manga._id}</li>
          {/* <li>
            <ImageTile
              src={`${manga.front_cover_japanese_url}?h=200`}
              alt='japanese front cover'
            />
          </li> */}
          <li>Owned: {manga.owned ? 'Yes' : 'No'}</li>
          <li>
            Volume {manga.volume} of {manga.total_volumes}
          </li>
        </ol>
        <LinkButton label='Home' href='/' />
      </div>
      <div className='basis-2/5'>
        <ImageTile
          src={`${manga.front_cover_english_url}`}
          alt={`${manga.title_english} primary image`}
        />
      </div>
    </div>
  );
}

async function getMangaDetails(id: string) {
  const manga = sanity.fetch(`*[_type == "manga" && _id == "${id}"]{
    _id,
    title_english,
    title_japanese,
    "front_cover_english_url": front_cover_english.asset->url,
    "back_cover_english_url": back_cover_english.asset->url,
    "front_cover_japanese_url": front_cover_japanese.asset->url,
    "back_cover_japanese_url": back_cover_japanese.asset->url,
    owned,
    volume,
    total_volumes,
    is_omnibus,
    have_read,
  }`);

  return manga;
}
