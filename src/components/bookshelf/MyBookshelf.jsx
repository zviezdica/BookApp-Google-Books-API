import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { BookshelfList, BookshelfBooks } from ".";
import { db } from "../../firebase-config";
import { UserContext } from "../authenticate/UserContext";

const MyBookshelf = () => {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
  const { user } = useContext(UserContext);

  const handleSelectedBookshelf = (books) => {
    setBookshelfBooks(books);
  };
  console.log(bookshelfBooks);

  // useEffect(()=> {
  //   const shelves = ["favorites", "readnow", "toread", "haveread"];
  //   const books = [];
  //   do {
  //     shelves.forEach((shelf) => {
  //       const handle=async () => {
  //         const bookRef = collection(db, "books", user.uid, shelf);
  //         try {
  //           const results = await getDocs(bookRef);
  //           results && results.forEach((doc) => {
  //             if (doc.data()) {
  //               books.push(doc.data());
  //             } else{
  //                 return;
  //             }
  //           });
  //           console.log(books)
  //         } catch (error) {
  //           console.log(error.message);
  //         }
  //         handle()
  //         setBookshelfBooks(books)
  //       }
  //     })

  //     console.log(bookshelfBooks)
  //   }while(books.length == 0)
  // },[])

  useEffect(() => {
    const shelves = ["favorites", "readnow", "toread", "haveread"];
    // let books = [];
    let i = 0;
    const handleBookshelf = async (bookshelf) => {
      let books = [];
      console.log(bookshelf + "bookshelf");
      // const books = [];
      const bookRef = collection(db, "books", user.uid, bookshelf);
      try {
        const results = await getDocs(bookRef);
        results &&
          results.forEach((doc) => {
            if (doc.data()) {
              books.push(doc.data());
              console.log(books.length);
            } else {
              console.log("niente");
              return;
            }
          });
        console.log(books);
        if (books.length > 0) {
          console.log(books);
          setBookshelfBooks(books);
          return;
        } else {
          while (i < shelves.length - 1 && books.length < 1) {
            console.log(books.length);
            console.log("i:");
            console.log(i);
            handleBookshelf(shelves[i + 1]);
            i++;
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    handleBookshelf(shelves[i]);

    // shelves.forEach((shelf) => {
    //   console.log(books.length);
    //   console.log(books);
    //   handleBookshelf(shelf);
    // });
    // while(books.length==0 ){
    //   handleBookshelf(shelves[i]);
    //   i++
    // }
  }, []);

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
