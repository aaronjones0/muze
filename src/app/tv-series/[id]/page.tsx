import ImageTile from '@muze/components/ImageTile/ImageTile';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { TVSeries } from '@muze/model/TVSeries';

export default async function Page({ params }: { params: { id: string } }) {
  const tvSeriesId = params.id;
  const results: TVSeries[] = [];
  const tvSeries = results[0];

  return (
    <div className='h-full flex flex-col lg:flex-row gap-8 text-neutral-500'>
      <div className='lg:grow flex flex-col gap-8'>
        <div className='flex flex-col'>
          <h1 className='mt-4 text-4xl text-neutral-300 font-black'>
            {tvSeries.full_title}
          </h1>
          <h2 className='text-2xl text-neutral-400 font-extralight'>
            {tvSeries.tag_line}
          </h2>
          <div className='flex flex-row gap-8 mt-4'>
            <LinkButton label='Back' href='/tv-series' hotkey='b' />
            <LinkButton label='Home' href='/home' hotkey='h' />
          </div>
        </div>
        <ul>
          <li>{tvSeries._id}</li>
        </ul>
      </div>
      <div className='max-lg:grow max-lg:max-h-screen min-h-[200px] w-full lg:basis-2/5'>
        <ImageTile
          src={`${tvSeries.image_primary_url}`}
          alt={`${tvSeries.short_title} primary image`}
        />
      </div>
    </div>
  );
}
