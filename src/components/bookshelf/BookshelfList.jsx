import { favorites, readingNow, toRead, haveRead } from "../../images/icons";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useContext } from "react";
import { UserContext } from "../authenticate/UserContext";

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
          style={{ backgroundImage: `url(${favorites})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">Favorites</h4>
      </div>

      <div
        className="flex items-center pb-20"
        onClick={() => handleBookshelf("readnow")}
      >
        <div
          style={{ backgroundImage: `url(${readingNow})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">Reading now</h4>
      </div>

      <div
        className="flex items-center pb-20"
        onClick={() => handleBookshelf("toread")}
      >
        <div
          style={{ backgroundImage: `url(${toRead})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">To read</h4>
      </div>

      <div
        className="flex items-center pb-20"
        onClick={() => handleBookshelf("haveread")}
      >
        <div
          style={{ backgroundImage: `url(${haveRead})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">Have read</h4>
      </div>
    </section>
  );
};

export default BookshelfList;
