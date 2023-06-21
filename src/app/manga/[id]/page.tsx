import { CheckBadgeIcon, MinusIcon } from '@heroicons/react/24/outline';
import ImageTile from '@muze/components/ImageTile/ImageTile';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import Switch from '@muze/components/Switch/Switch';
import { sanity } from '@muze/lib/sanity-client';
import { Manga } from '@muze/model/Manga';

export default async function Page({ params }: { params: { id: string } }) {
  const mangaId: string = params.id;
  const results: Manga[] = await getMangaDetails(mangaId);
  const manga: Manga = results[0];

  return (
    <div className='h-full flex flex-col lg:flex-row gap-8 text-neutral-500'>
      <div className='lg:grow flex flex-col gap-8'>
        <div className='flex flex-col gap-6'>
          <div className='mt-4'>
            <h1 className='text-4xl text-neutral-300 font-black'>
              {manga.title_english}
            </h1>
            <h2 className='text-3xl text-neutral-300 font-extralight'>
              {manga.title_japanese}
            </h2>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <h3 className='text-xl text-neutral-300 font-black'>
              Volume {manga.volume} of {manga.total_volumes}
            </h3>
            <div
              className={[
                manga.owned
                  ? 'bg-amber-500 text-neutral-900'
                  : 'bg-neutral-900 border-2 border-neutral-700 text-neutral-700',
                'rounded-full w-min px-2 py-0.5 flex flex-row gap-1.5 items-center font-medium',
              ].join(' ')}
            >
              {manga.owned ? 'Owned' : 'Unowned'}{' '}
              {manga.owned ? <CheckBadgeIcon className='h-6 w-6' /> : null}
            </div>
          </div>
          <div className='grid grid-rows-3 grid-flow-col auto-cols-min gap-x-3'>
            <p className='font-light'>Mangaka:</p>
            <p className='font-light'>Author:</p>
            <p className='font-light'>Publisher:</p>
            <p className='whitespace-nowrap font-medium'>{manga.mangaka?.full_name}</p>
            <p className='whitespace-nowrap font-medium'>{manga.author?.full_name}</p>
            <p className='whitespace-nowrap font-medium'>{manga.publisher?.name}</p>
          </div>
          <div className='mt-4 flex flex-row gap-8'>
            <LinkButton label='Back' href='/manga' hotkey='b' />
            <LinkButton label='Home' href='/' hotkey='h' />
          </div>
        </div>
      </div>
      <div className='max-lg:grow max-lg:max-h-screen min-h-[200px] w-full lg:basis-2/5'>
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
    mangaka->,
    author->,
    publisher->
  }`);

  return manga;
}
