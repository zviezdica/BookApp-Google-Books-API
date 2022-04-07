import { UserContext } from "../authenticate/UserContext";
import { useContext, useState } from "react";
import { db } from "../../firebase-config";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";

import BookshelfList from "./BookshelfList";
import BookshelfBooks from "./BookshelfBooks";

const MyBookshelf = () => {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
  const handleSelectedBookshelf = (books) => {
    setBookshelfBooks(books);
    console.log(books);
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
