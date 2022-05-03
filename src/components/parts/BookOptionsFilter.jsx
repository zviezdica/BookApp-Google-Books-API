import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
// PREUZET BOOKSINBOOKSHELF I FILTRIRAT
const BookOptionsFilter = ({
  bookshelf,
  url,
  text,
  passBooks,
  selectedBookshelf,
}) => {
  const { booksInBookshelf } = useContext(BooksContext);

  const handleBookshelf = (bookshelf) => {
    let filteredBooks = booksInBookshelf[bookshelf];
    passBooks(filteredBooks, bookshelf);
  };

  return (
    <div
      className={
        "flex items-center pb-20 cursor-pointer hover:text-peacock-blue " +
        (selectedBookshelf == bookshelf
          ? "text-cerulean-blue"
          : " text-dark-blue")
      }
      onClick={() => handleBookshelf(bookshelf)}
    >
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-25 w-25 bg-cover bg-center"
      ></div>
      <h4 className="px-15">{text}</h4>
    </div>
  );
};

export default BookOptionsFilter;
