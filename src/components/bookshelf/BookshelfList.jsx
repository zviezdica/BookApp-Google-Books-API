import { favorites, readingNow, toRead, haveRead } from "../../images/icons";
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

  return (
    <section className="pr-20">
      <BookOptionsFilter bookshelf="favorites" url={favorites} text='Favorites' passBooks={passBooks} />
      <BookOptionsFilter bookshelf="readnow" url={readingNow} text='Read now' passBooks={passBooks} />
      <BookOptionsFilter bookshelf="toread" url={toRead} text='To read' passBooks={passBooks} />
      <BookOptionsFilter bookshelf="haveread" url={haveRead} text='Have read' passBooks={passBooks} />
    </section>
  );
};

export default BookshelfList;
