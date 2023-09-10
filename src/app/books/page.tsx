import ImageCard from '@muze/components/ImageCard/ImageCard';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { Book } from '@muze/model/Book';
import Link from 'next/link';

export default async function Page() {
  const books: Book[] = [];

  return (
    <>
      <h1 className='text-3xl font-black'>Books</h1>
      <LinkButton label='Home' href='/' hotkey='h' />
      <div className='flex flex-row flex-wrap gap-4 justify-evenly justify-items-center h-80'>
        {books.map((book) => (
          <Link key={book._id} href={`/books/${book._id}`}>
            <div className='group inline-block'>
              {/* flex flex-col gap-2 */}
              <div>
                <ImageCard
                  src={`${book.cover_image_url}?h=280`}
                  alt={`${book.short_title} cover image`}
                />
              </div>
              <div className='flex'>
                <p className='group-hover:text-neutral-500 font-medium ml-3 text-ellipsis transition-colors pointer-events-none grow w-0'>
                  {book.short_title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
