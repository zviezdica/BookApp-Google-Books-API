import { useState, useEffect } from "react";
import BookInBookDrawer from "./BookInBookDrawer";

const axios = require("axios");

const BookshelfBooks = ({ books }) => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    let booksArr = [];
    let apiRoot = "https://www.googleapis.com/books/v1/volumes/";
    books.forEach((book) => {
      axios
        .get(apiRoot + book.bookId)
        .then((response) => {
          booksArr = [...booksArr, response];
          setBooksData(booksArr);
        })
        .catch((error) => console.log(error));
    });
  }, [books]);

  return (
    <section className="xs:pl-20 container container--books-in-drawer flex flex-wrap">
      {booksData.map((book) => {
        return <BookInBookDrawer book={book} />;
      })}
    </section>
  );
};

export default BookshelfBooks;
