import ImageCard from '@muze/components/ImageCard/ImageCard';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { TVSeries } from '@muze/model/TVSeries';
import Link from 'next/link';

export default async function Page() {
  const tvSeries: TVSeries[] = [];
  return (
    <>
      <h1 className='text-3xl font-black'>TV Series&apos;</h1>
      <div className='flex flex-row gap-4'>
        <LinkButton label='Home' href='/home' hotkey='h' />
        <LinkButton label='Add' href='/tv-series/add' hotkey='a' />
      </div>
      <div className='flex flex-row flex-wrap gap-4 justify-evenly justify-items-center h-80'>
        {tvSeries.map((tvs: TVSeries) => (
          <Link key={tvs._id} href={`/tv-series/${tvs._id}`}>
            <div className='group inline-block'>
              <div>
                <ImageCard
                  src={`${tvs.image_primary_url}?h=280`}
                  alt={`${tvs.short_title} cover image`}
                />
              </div>
              <div className='flex'>
                <p className='group-hover:text-neutral-500 font-medium ml-3 text-ellipsis transition-colors pointer-events-none grow w-0'>
                  {tvs.short_title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
