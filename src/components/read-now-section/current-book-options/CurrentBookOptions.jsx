import { useContext, useState, useEffect } from "react";
import { info, favorites, haveRead } from "../../../images/icons";
import { BookOption } from "../../parts";
import { BooksContext } from "../../../contexts/BooksContext";

const CurrentBookOptions = ({ book, passPageNum }) => {
  const [isInfavorites, setisInfavorites] = useState(false);
  const [isInhaveread, setIsInhaveread] = useState(false);
  const [rangeValue, setRangeValue] = useState(1);
  const [infoViewabilityActive, setInfoViewabilityActive] = useState(false);
  const { booksInBookshelf } = useContext(BooksContext);

  const handleRangeValue = (e) => {
    setRangeValue(e.target.value);
    passPageNum(e.target.value);
  };

  const handleClickChange = (bookPresence, bookshelf) => {
    bookshelf == "favorites"
      ? setisInfavorites(bookPresence)
      : setIsInhaveread(bookPresence);
  };

  useEffect(() => {
    setisInfavorites(false);
    setIsInhaveread(false);
    Object.keys(booksInBookshelf).forEach((key) => {
      booksInBookshelf[key].forEach((bookInShelf) => {
        if (bookInShelf.bookId == book.id) {
          if (key == "favorites") {
            setisInfavorites(true);
          }
          if (key == "haveread") {
            setIsInhaveread(true);
          } else return;
        }
      });
    });
  }, []);

  return (
    <section className="mb-30 md:pl-25 md:absolute md:left-4/5 xl:left-7/10 md:top-30 children:py-10  w-max">
      {book.viewability == "PARTIAL" && (
        <div>
          <div
            className="flex items-center cursor-default"
            onMouseEnter={() => setInfoViewabilityActive(true)}
            onMouseLeave={() => setInfoViewabilityActive(false)}
          >
            <div
              style={{ backgroundImage: `url(${info})` }}
              className="h-30 w-30 bg-center bg-cover"
            ></div>
            <h3 className="text-light-dark pl-5">Only partial viewability</h3>
          </div>
          {infoViewabilityActive && (
            <div className="absolute w-200 top-50 bg-white z-1 shadow-card p-10">
              <p>
                This books has only partial viewability. If you don't see
                selected page, it means that page is not available.
              </p>
            </div>
          )}
        </div>
      )}
      <div className="flex items-center">
        <input
          type="range"
          min={1}
          max={book.pagesNum}
          value={rangeValue}
          onChange={handleRangeValue}
          className="bg-light-grey h-5 opacity-50 w-130 lg:w-180 hover:opacity-90 appearance-none"
          id="ranger"
        />
        <h3 className="pl-15">Page: {rangeValue}</h3>
      </div>
      <BookOption
        type="favorites"
        book={book}
        url={favorites}
        text="Add to favorites"
        textDel="Remove from favorites"
        isInShelf={isInfavorites}
        passClickChange={handleClickChange}
      />
      <BookOption
        type="haveread"
        book={book}
        url={haveRead}
        text="Mark as have read"
        textDel="Remove from have read"
        isInShelf={isInhaveread}
        passClickChange={handleClickChange}
      />
    </section>
  );
};

export default CurrentBookOptions;
