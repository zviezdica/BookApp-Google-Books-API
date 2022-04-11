import { useState, useEffect } from "react";
import BookInBookDrawer from "./BookInBookDrawer";

const axios = require("axios");

const BookshelfBooks = ({ books }) => {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let booksArr = [];
    let apiRoot = "https://www.googleapis.com/books/v1/volumes/";
    if (books.length > 0) {
      setLoading(true);
      console.log(books);
      books.forEach((book) => {
        axios
          .get(apiRoot + book.bookId)
          .then((response) => {
            booksArr = [...booksArr, response];
            setBooksData(booksArr);
            console.log(booksArr);
            setLoading(false);
          })
          .catch((error) => console.log(error));
      });
    } else setBooksData(undefined);
    console.log(booksData);
    console.log(typeof booksData);
  }, [books]);

  return (
    <section className="xs:pl-20 container container--books-in-drawer flex flex-wrap">
      {booksData &&
        !loading &&
        booksData.map((book) => {
          // console.log(book);
          return <BookInBookDrawer book={book} key={`bsh${book.data.id}`} />;
        })}
      {booksData && loading && <Loader />}
    </section>
  );
};

export default BookshelfBooks;
