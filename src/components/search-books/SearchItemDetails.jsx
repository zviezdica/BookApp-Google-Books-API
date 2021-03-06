import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { close, favorites, toRead, haveRead } from "../../images/icons";
import { BookshelfContext } from "../../contexts/BookshelfContext";
import { BooksContext } from "../../contexts/BooksContext";
import { ContentBtn, BookOption } from "../parts";

const SearchItemDetails = ({ data, closeDetails, selectBookToRead }) => {
  const [isInfavorites, setisInfavorites] = useState(false);
  const [isInreadnow, setIsInreadnow] = useState(false);
  const [isIntoread, setIsIntoread] = useState(false);
  const [isInhaveread, setIsInhaveread] = useState(false);
  const { id, accessInfo, volumeInfo } = data;
  const {
    authors,
    categories,
    description,
    imageLinks,
    industryIdentifiers,
    language,
    pageCount,
    previewLink,
    publishedDate,
    publisher,
    subtitle,
    title,
  } = volumeInfo;
  const { embeddable, viewability } = accessInfo;
  const {
    handleAddToBookshelf,
    handleRemoveFromBookshelf,
    bookshelfFlag,
    setBookshelfFlag,
  } = useContext(BookshelfContext);
  const { booksInBookshelf } = useContext(BooksContext);

  const handleReadNow = (industryIdentifiers, readNow) => {
    if (!industryIdentifiers) {
      return;
    }
    let isbn = industryIdentifiers.filter(
      (identifier) => identifier.type === "ISBN_10"
    );

    let isbnNum = isbn[0].identifier;
    selectBookToRead({
      bookIsbn: isbnNum,
      pagesNum: pageCount,
      viewability,
      id,
      title,
    });
    if (booksInBookshelf.readnow.length > 0) {
      console.log("ima");
      console.log(booksInBookshelf.readnow);
      const bookAlreadyExists = booksInBookshelf.readnow.filter(
        (book) => book.bookId == id
      );
      if (bookAlreadyExists.length > 0) {
        console.log("isti su");
        return;
      } else {
        console.log("idem dodat knjigu");
        handleAddToBookshelf(readNow, id, title);
      }
    } else {
      handleAddToBookshelf(readNow, id, title);
      console.log("idem svakako dodat knjigu");
    }
    // Object.keys(booksInBookshelf).filter((key) => {
    //   console.log(key);
    //   if (key == "readnow") {
    //     booksInBookshelf[key].forEach((book) => {
    //       console.log(book.bookId, id);
    //       if (book.bookId == id) {
    //         return;
    //       } else {
    //         console.log("idem dodat knjigu");
    //         handleAddToBookshelf(readNow, id, title);
    //       }
    //     });
    //   } else handleAddToBookshelf(readNow, id, title);
    // });
  };

  useEffect(() => {
    setisInfavorites(false);
    setIsInreadnow(false);
    setIsIntoread(false);
    setIsInhaveread(false);
    Object.keys(booksInBookshelf).forEach((key) => {
      booksInBookshelf[key].forEach((book) => {
        if (book.bookId == id) {
          key == "favorites"
            ? setisInfavorites(true)
            : key == "readnow"
            ? setIsInreadnow(true)
            : key == "toread"
            ? setIsIntoread(true)
            : setIsInhaveread(true);
        }
      });
    });
  });

  return (
    <div className="details-card shadow-card flex flex-col container max-h-70vh bg-white fixed overflow-y-auto top-100 xs:top-130 lg:top-180 left-1/2 -translate-x-1/2 p-10">
      <div>
        <div
          style={{ backgroundImage: `url(${close})` }}
          className="h-40 w-40 bg-center bg-cover bg-no-repeat opacity-50 hover:opacity-100 transition-opacity mr-0 ml-auto cursor-pointer"
          onClick={closeDetails}
        ></div>

        {imageLinks && (
          <img
            className="rounded-sm w-100 sm:w-200 my-10 mx-20 float-left"
            src={imageLinks.thumbnail}
          ></img>
        )}

        {title && <h1 className="text-21 pb-10">{title}</h1>}

        {subtitle && <h3 className="text-17  pb-5">{subtitle}</h3>}

        {authors && (
          <h4 className="text-15  pb-5">
            {authors.toString().replace(",", ", ")},{" "}
            {publishedDate && publishedDate.slice(0, 4)}
          </h4>
        )}

        {categories && (
          <h4 className="text-15 pb-5 float-none italic">
            {categories.toString().replace(",", ", ")}
          </h4>
        )}

        {description && (
          <p className="text-14 text-justify py-20">{description}</p>
        )}

        <div className="flex flex-col sm:flex-row sm:w-full md:w-2/3 my-10">
          {industryIdentifiers &&
            embeddable &&
            (!isInreadnow ? (
              <div
                onClick={() => handleReadNow(industryIdentifiers, "readnow")}
              >
                <Link to="/readNow">
                  <ContentBtn text="read now" />
                </Link>
              </div>
            ) : (
              <div>
                <div>
                  <div
                    onClick={() =>
                      handleReadNow(industryIdentifiers, "readnow")
                    }
                  >
                    <Link to="/readNow">
                      <ContentBtn text="continue reading" />
                    </Link>
                  </div>
                </div>
                <div onClick={() => handleRemoveFromBookshelf("readnow", id)}>
                  <ContentBtn text="Remove from read now" />
                </div>
              </div>
            ))}
          <div className="relative ">
            {bookshelfFlag && (
              <div className="flex flex-col justify-center items-center bg-white divide-y-1 divide-greyish border-1 rounded-md border-solid border-dark-blue uppercase text-12 px-5 text-center children:p-3 absolute -top-90 left-1/2 -translate-x-1/2 w-max children:cursor-pointer">
                <BookOption
                  type="toread"
                  book={{ id, title }}
                  url={toRead}
                  text="Add to read"
                  textDel="Remove from to read"
                  isInShelf={isIntoread}
                />
                <BookOption
                  type="favorites"
                  book={{ id, title }}
                  url={favorites}
                  text="Add to favorites"
                  textDel="Remove from favorites"
                  isInShelf={isInfavorites}
                />
                <BookOption
                  type="haveread"
                  book={{ id, title }}
                  url={haveRead}
                  text="Add to have read"
                  textDel="Remove from have read"
                  isInShelf={isInhaveread}
                />
              </div>
            )}
            <div onClick={() => setBookshelfFlag(!bookshelfFlag)}>
              <ContentBtn text="add to my bookshelf" />
            </div>
          </div>
          {previewLink && (
            <a href={previewLink} target="_blank">
              <ContentBtn text="visit on google books" />
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-wrap children:px-10 divide-x-1 divide-greyish">
        {industryIdentifiers &&
          industryIdentifiers.map((iIdentifier) => {
            const { type, identifier } = iIdentifier;
            return (
              <h4 className="text-13 uppercase" key={`is${identifier}`}>
                {type}: {identifier}
              </h4>
            );
          })}

        {language && (
          <h4 className="text-13 uppercase">language: {language}</h4>
        )}

        {pageCount && <h4 className="text-13 uppercase">pages: {pageCount}</h4>}

        {publisher && (
          <h4 className="text-13 uppercase">publisher: {publisher}</h4>
        )}
      </div>
    </div>
  );
};

export default SearchItemDetails;
