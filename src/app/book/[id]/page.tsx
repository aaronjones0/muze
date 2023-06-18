'use client';

import ImageTile from '@muze/components/ImageTile/ImageTile';
import { sanity } from '@muze/lib/sanity-client';
import { Book } from '@muze/model/Book';

export default async function Page() {
//   {
//   params,
// }: {
//   params: { id: string };
// }
  // const bookId: string = params.id;
  const bookId = '99964120-3de7-4308-a16c-b614bbaa22d9';
  const results: Book[] = await getBookDetails(bookId);
  const book: Book = results[0];

  return (
    <ul>
      <li>
        <ImageTile
          src={`${book.cover_url}?h=200`}
          alt={`${book.short_title} cover image`}
        />
      </li>
      <li>{book._id}</li>
      <li>{book.short_title}</li>
      <li>{book.full_title}</li>
      <li>{book.subtitle}</li>
      <li>Volume: {book.volume}</li>
      <li>Edition: {book.edition}</li>
      <li>ISBN: {book.isbn}</li>
      <li>Publisher: {book.publisher}</li>
      <li>Notes: {book.notes}</li>
      <li>Owned: {book.owned ? 'Yes' : 'No'}</li>
    </ul>
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
    "cover_url": cover_image.asset->url,
    owned,
  }`);

  return book;
}
