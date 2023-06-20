import LinkButton from '@muze/components/LinkButton/LinkButton';
import { sanity } from '@muze/lib/sanity-client';
import { Book } from '@muze/model/Book';

export default async function Page() {
  const books: Book[] = await getBooks();

  return (
    <>
      <LinkButton label='Home' href='/' hotkey='h' />
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.short_title}</li>
        ))}
      </ul>
    </>
  );
}

async function getBooks() {
  const books = sanity.fetch(`*[_type == "book"]{
    _id,
    short_title
  }`);
  return books;
}
