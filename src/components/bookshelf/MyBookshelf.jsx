import { useState } from "react";
import { BookshelfList, BookshelfBooks } from ".";

const MyBookshelf = () => {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
  const handleSelectedBookshelf = (books) => {
    setBookshelfBooks(books);
  };

  return (
    <section className="container">
      <div className="flex divide-x-1 divide-peacock-blue h-60vh">
        <BookshelfList passBooks={handleSelectedBookshelf} />
        <BookshelfBooks books={bookshelfBooks} />
      </div>
    </section>
  );
};

export default MyBookshelf;
