import Card from '@muze/components/Card/Card';
import LinkButton from '@muze/components/LinkButton/LinkButton';

export default function Page() {
  const cards = [
    {
      key: 'artist',
      title: 'Artist',
      desscription: 'Someone who created something in your library.',
      href: '/',
    },
    {
      key: 'book',
      title: 'Book',
      desscription:
        'Any non-graphical written work. Exceptions: Newspaper, magazine issue, cooking recipe.',
      href: '/',
    },
    {
      key: 'genre',
      title: 'Genre',
      desscription: '',
      href: '/',
    },
    {
      key: 'manga',
      title: 'Manga',
      desscription: 'Japanese graphic novels.',
      href: '/',
    },
    {
      key: 'publisher',
      title: 'Publisher',
      desscription: '',
      href: '/',
    },
    {
      key: 'tv-series',
      title: 'TV Series',
      desscription: 'An episodic, visual narrative that aired on television.',
      href: '/',
    },
  ];

  return (
    <div className='flex flex-col'>
      <div className='w-full flex flex-row items-center justify-between'>
        <h1 className='pointer-events-none select-none text-3xl font-black text-neutral-500'>
          What would you like to add?
        </h1>
        <LinkButton label='Cancel' href='/home' hotkey='c' />
      </div>
      <div className='place-content-center flex flex-row flex-wrap gap-4 my-4'>
        {/* <div className='grid grid-flow-col auto-cols-fr gap-4 my-4'> */}
        {cards.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            description={card.desscription}
            href={card.href}
            className='h-36 w-80'
          />
        ))}
      </div>
    </div>
  );
}
