import ImageCard from '@muze/components/ImageCard/ImageCard';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { Manga } from '@muze/model/Manga';
import Link from 'next/link';

export default async function Page() {
  const manga: Manga[] = [];

  return (
    <>
      <h1 className='text-3xl font-black'>Manga</h1>
      <LinkButton label='Home' href='/' hotkey='h' />
      <div className='flex flex-row flex-wrap gap-4 justify-evenly justify-items-center h-80'>
        {manga.map((manga: Manga) => (
          <Link key={manga._id} href={`/manga/${manga._id}`}>
            <div className='group inline-block'>
              {/* flex flex-col gap-2 */}
              <div>
                <ImageCard
                  src={`${manga.front_cover_english_url}?h=280`}
                  alt={`${manga.title_english} cover image`}
                />
              </div>
              <div className='flex'>
                <p className='group-hover:text-neutral-500 font-medium ml-3 text-ellipsis transition-colors pointer-events-none grow w-0'>
                  {manga.title_english}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
