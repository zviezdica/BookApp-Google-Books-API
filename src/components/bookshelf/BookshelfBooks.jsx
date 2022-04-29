import { useState, useEffect } from "react";
import { BookInBookDrawer } from ".";
import { Loader } from "../parts";

const axios = require("axios");

const BookshelfBooks = ({ books, isBooksInShelf }) => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState("");

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
      {!booksData && !loading && <h1>No books in this bookdrawer</h1>}
    </section>
  );
};

export default BookshelfBooks;
