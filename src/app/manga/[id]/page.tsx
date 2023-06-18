'use client';

import ImageTile from '@muze/components/ImageTile/ImageTile';
import { sanity } from '@muze/lib/sanity-client';
import { Manga } from '@muze/model/Manga';

export default async function Page({ params }: { params: { id: string } }) {
  const mangaId: string = params.id;
  const results: Manga[] = await getMangaDetails(mangaId);
  const manga: Manga = results[0];

  return (
    <div className='bg-neutral-900 text-neutral-700'>
      <ol>
        <li>{manga._id}</li>
        <li>{manga.title_english}</li>
        <li>{manga.title_japanese}</li>
        <li>
          {/* <img src={manga.front_cover_english_url} alt='english front cover' /> */}
          <ImageTile
            src={`${manga.front_cover_english_url}?h=200`}
            alt='english front cover'
          />
        </li>
        <li>
          {/* <img src={manga.back_cover_english_url} alt='english back cover' /> */}
          <ImageTile
            src={`${manga.back_cover_english_url}?h=200`}
            alt='english back cover'
          />
        </li>
        <li>
          {/* <img
            src={manga.front_cover_japanese_url}
            alt='japanese front cover'
          /> */}
          <ImageTile
            src={`${manga.front_cover_japanese_url}?h=200`}
            alt='japanese front cover'
          />
        </li>
        <li>
          {/* <img src={manga.back_cover_japanese_url} alt='japanese back cover' /> */}
          <ImageTile
            src={`${manga.back_cover_japanese_url}?h=200`}
            alt='japanese back cover'
          />
        </li>
        <li>Owned: {manga.owned}</li>
        <li>
          Volume {manga.volume} of {manga.total_volumes}
        </li>
      </ol>
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
