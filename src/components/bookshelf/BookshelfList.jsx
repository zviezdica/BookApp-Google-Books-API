import { useState } from "react";
import favorites_ from "../../images/icons/favorites.png";
import readingNow_ from "../../images/icons/reading-now.png";
import toRead_ from "../../images/icons/to-read.png";
import haveRead_ from "../../images/icons/have-read.png";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useContext } from "react";
import { UserContext } from "../authenticate/UserContext";
import axios from "axios";
import { async } from "@firebase/util";

const BookshelfList = ({ passBooks }) => {
  const { user, accessToken } = useContext(UserContext);

  // const proba = () => {
  //   console.log(typeof accessToken);
  //   axios
  //     .get(
  //       "https://www.googleapis.com/books/v1/mylibrary/bookshelves/6/volumes?key=",
  //       {
  //         headers: {
  //           Authorization: accessToken,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const handleBookshelf = async (bookshelf) => {
    const books = [];
    const bookRef = collection(db, "books", user.uid, bookshelf);
    try {
      const results = await getDocs(bookRef);
      results.forEach((doc) => {
        if (doc.data()) {
          books.push(doc.data());
        } else return;
      });
    } catch (error) {
      console.log(error.message);
    }
    passBooks(books);
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
