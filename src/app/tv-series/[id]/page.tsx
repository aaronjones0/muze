import ImageTile from '@muze/components/ImageTile/ImageTile';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { sanity } from '@muze/lib/sanity-client';
import { TVSeries } from '@muze/model/TVSeries';

export default async function Page({ params }: { params: { id: string } }) {
  const tvSeriesId = params.id;
  const results: TVSeries[] = await getTVSeries(tvSeriesId);
  const tvSeries = results[0];

  return (
    <div className='h-full flex flex-row text-neutral-500'>
      <div className='grow flex flex-col'>
        <h1 className='mt-4 text-4xl text-neutral-300 font-black tracking-wider'>
          {tvSeries.full_title}
        </h1>
        <h2 className='mb-8 text-2xl text-neutral-400 font-black tracking-wider'>
          {tvSeries.tag_line}
        </h2>
        <ul>
          <li>{tvSeries._id}</li>
        </ul>
        <div className='mt-12 flex flex-row gap-8'>
          <LinkButton label='Back' href='/tv-series' hotkey='b' />
          <LinkButton label='Home' href='/' hotkey='h' />
        </div>
      </div>
      <div className='basis-2/5'>
        <ImageTile
          src={`${tvSeries.image_primary_url}`}
          alt={`${tvSeries.short_title} primary image`}
        />
      </div>
    </div>
  );
}

async function getTVSeries(tvSeriesId: string) {
  const tvSeries =
    sanity.fetch(`*[_type == "tvSeries" && _id == "${tvSeriesId}"]{
    _id,
    full_title,
    short_title,
    tag_line,
    "image_primary_url":image_primary.asset->url
  }`);

  return tvSeries;
}
