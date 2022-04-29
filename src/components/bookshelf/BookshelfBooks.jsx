import { useState, useEffect } from "react";
import { BookInBookDrawer } from ".";
import { Loader } from "../parts";

const axios = require("axios");

const BookshelfBooks = ({ books, selectedBookshelf }) => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState("");
  console.log(selectedBookshelf)

  useEffect(() => {
    let booksArr = [];
    let apiRoot = "https://www.googleapis.com/books/v1/volumes/";
    if (books.length > 0) {
      setLoading(true);
      books.forEach((book) => {
        axios
          .get(apiRoot + book.bookId)
          .then((response) => {
            booksArr = [...booksArr, response];
            setBooksData(booksArr);
            setLoading(false);
          })
          .catch((error) => console.log(error));
      });
    } else {
      setBooksData("");
    }
  }, [books]);

  // useEffect(() => {
  //   console.log(loading);
  // });

  return (
    <section className="xs:pl-20 container container--books-in-drawer flex flex-wrap">
      {booksData &&
        !loading &&
        booksData.map((book) => {
          return <BookInBookDrawer book={book} key={`bsh${book.data.id}`} />;
        })}
      {loading && <Loader />}
      {!booksData && !loading && <h1>No books in {selectedBookshelf==='favorites'? 'Favorites' : selectedBookshelf==='readnow' ? 'Read now' : selectedBookshelf==='toread' ? 'To read' : 'Have read' }</h1>}
    </section>
  );
};

export default BookshelfBooks;
