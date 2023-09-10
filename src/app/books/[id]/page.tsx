import ImageTile from '@muze/components/ImageTile/ImageTile';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { Book } from '@muze/model/Book';

export default async function Page({ params }: { params: { id: string } }) {
  const bookId: string = params.id;
  const results: Book[] = [];
  const book: Book = results[0];

  return (
    <div className='h-full flex flex-col lg:flex-row gap-8 text-neutral-500'>
      <div className='lg:grow flex flex-col gap-8'>
        <div className='flex flex-col'>
          <h1 className='mt-4 text-4xl text-neutral-300 font-black'>
            {book.full_title}
          </h1>
          <h2 className='text-2xl text-neutral-400 font-extralight'>
            {book.subtitle}
          </h2>
          <div className='mt-4 flex flex-row gap-8'>
            <LinkButton label='Back' href='/books' hotkey='b' />
            <LinkButton label='Home' href='/home' hotkey='h' />
          </div>
        </div>
        <div className='grid grid-rows-6 grid-flow-col w-fit gap-x-3'>
          <div>ISBN:</div>
          <div>Volume:</div>
          <div>Edition:</div>
          <div>Publisher:</div>
          <div>Notes:</div>
          <div>Owned:</div>
          <div>{book.isbn}</div>
          <div>{book.volume}</div>
          <div>{book.edition}</div>
          <div>{book.publisher}</div>
          <div>{book.notes}</div>
          <div>{book.owned ? 'Yes' : 'No'}</div>
        </div>
      </div>
      <div className='max-lg:grow max-lg:max-h-screen min-h-[200px] w-full lg:basis-2/5'>
        <ImageTile
          src={`${book.cover_image_url}`}
          alt={`${book.short_title} cover image`}
        />
      </div>
    </div>
  );
}
