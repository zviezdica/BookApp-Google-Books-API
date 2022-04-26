import favorites_ from "../../images/icons/favorites.png";
import readingNow_ from "../../images/icons/reading-now.png";
import toRead_ from "../../images/icons/to-read.png";
import haveRead_ from "../../images/icons/have-read.png";
import { useContext } from "react";
import { UserContext } from "../authenticate/UserContext";
import BookOptionsFilter from "../parts/BookOptionsFilter";

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

  return (
    <section className="pr-20">
      <BookOptionsFilter bookshelf="favorites" url={favorites_} text='Favorites' passBooks={passBooks} />
      <BookOptionsFilter bookshelf="readnow" url={readingNow_} text='Read now' passBooks={passBooks} />
      <BookOptionsFilter bookshelf="toread" url={toRead_} text='To read' passBooks={passBooks} />
      <BookOptionsFilter bookshelf="haveread" url={haveRead_} text='Have read' passBooks={passBooks} />
    </section>
  );
};

export default BookshelfList;
