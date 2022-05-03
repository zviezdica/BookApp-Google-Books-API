import { favorites, readingNow, toRead, haveRead } from "../../images/icons";
import { BookOptionsFilter } from "../parts";

const BookshelfList = ({ passBooks, selectedBookshelf }) => {
  return (
    <section className="pr-120">
      <BookOptionsFilter
        bookshelf="favorites"
        url={favorites}
        text="Favorites"
        passBooks={passBooks}
        selectedBookshelf={selectedBookshelf}
      />
      <BookOptionsFilter
        bookshelf="readnow"
        url={readingNow}
        text="Read now"
        passBooks={passBooks}
        selectedBookshelf={selectedBookshelf}
      />
      <BookOptionsFilter
        bookshelf="toread"
        url={toRead}
        text="To read"
        passBooks={passBooks}
        selectedBookshelf={selectedBookshelf}
      />
      <BookOptionsFilter
        bookshelf="haveread"
        url={haveRead}
        text="Have read"
        passBooks={passBooks}
        selectedBookshelf={selectedBookshelf}
      />
    </section>
  );
};

export default BookshelfList;
