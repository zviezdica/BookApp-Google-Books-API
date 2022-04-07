import { useState } from "react";
import favorites_ from "../../images/icons/favorites.png";
import readingNow_ from "../../images/icons/reading-now.png";
import toRead_ from "../../images/icons/to-read.png";
import haveRead_ from "../../images/icons/have-read.png";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useContext } from "react";
import { UserContext } from "../authenticate/UserContext";

const BookshelfList = () => {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
  const [favorites, setFavorites] = useState("");
  const [readingNow, setReadingNow] = useState("");
  const [toRead, setToRead] = useState("");
  const [haveRead, setHaveRead] = useState("");
  console.log(bookshelfBooks);

  const { user } = useContext(UserContext);

  const handleBookshelf = (bookshelf) => {
    handleGetFromBookshelf(bookshelf);
  };

  const handleGetFromBookshelf = async (bookshelf) => {
    const books = [];
    const bookRef = collection(db, "books", user.uid, bookshelf);
    try {
      const results = await getDocs(bookRef);
      results.forEach((doc) => {
        books.push(doc.data());
      });
    } catch (error) {
      console.log(error.message);
    }
    setBookshelfBooks(books);
  };

  return (
    <section className="pr-20">
      <div
        className="flex items-center pb-20"
        onClick={() => handleBookshelf("favorites")}
      >
        <div
          style={{ backgroundImage: `url(${favorites_})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">Favorites</h4>
      </div>

      <div
        className="flex items-center pb-20"
        onClick={() => handleBookshelf("readnow")}
      >
        <div
          style={{ backgroundImage: `url(${readingNow_})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">Reading now</h4>
      </div>

      <div
        className="flex items-center pb-20"
        onClick={() => handleBookshelf("toread")}
      >
        <div
          style={{ backgroundImage: `url(${toRead_})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">To read</h4>
      </div>

      <div
        className="flex items-center pb-20"
        onClick={() => handleBookshelf("haveread")}
      >
        <div
          style={{ backgroundImage: `url(${haveRead_})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">Have read</h4>
      </div>
    </section>
  );
};

export default BookshelfList;
