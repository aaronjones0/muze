'use client';

import ImageTile from '@muze/components/ImageTile/ImageTile';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { sanity } from '@muze/lib/sanity-client';
import { Book } from '@muze/model/Book';

export default async function Page({ params }: { params: { id: string } }) {
  const bookId: string = params.id;
  // const bookId = '99964120-3de7-4308-a16c-b614bbaa22d9';
  const results: Book[] = await getBookDetails(bookId);
  const book: Book = results[0];

  return (
    <div className='h-full flex flex-row text-neutral-500'>
      <div className='grow flex flex-col'>
        <h1 className='mt-4 text-4xl text-neutral-300 font-black tracking-wider'>
          {book.full_title}
        </h1>
        <h2 className='mb-8 text-2xl text-neutral-400 font-black tracking-wider'>
          {book.subtitle}
        </h2>
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
        {/* <div className='shadow-nh-md w-fit rounded-full mt-12'>
          <Link
            href='/'
            className='shadow-ns-md border-t-2 border-neutral-800 px-3 py-2 rounded-full text-neutral-400 hover:text-neutral-300 bg-neutral-900 hover:bg-neutral-800 w-fit'
          >
            Home
          </Link>
        </div> */}
        <div className='mt-12 flex flex-row gap-8'>
          <LinkButton label='Back' href='/books' hotkey='b' />
          <LinkButton label='Home' href='/' hotkey='h' />
        </div>
      </div>
      <div className='h-full basis-2/5'>
        <ImageTile
          src={`${book.cover_image_url}`}
          // src={`${book.cover_url}?blur=500`}
          alt={`${book.short_title} cover image`}
        />
      </div>
    </div>
  );
}

async function getBookDetails(bookId: string) {
  const book = sanity.fetch(`*[_type == "book" && _id == "${bookId}"]{
    _id,
    short_title,
    full_title,
    subtitle,
    volume,
    edition,
    isbn,
    publisher,
    notes,
    "cover_image_url": cover_image.asset->url,
    owned,
  }`);

  return book;
}
