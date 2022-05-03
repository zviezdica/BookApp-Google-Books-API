import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { BookshelfList, BookshelfBooks } from ".";
import { db } from "../../firebase-config";
import { UserContext } from "../../contexts/UserContext";

const MyBookshelf = () => {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
  const [isBooksInShelf, setIsBooksInShelf] = useState(true);
  const [selectedBookshelf, setSelectedBookshelf] = useState("");
  const { user } = useContext(UserContext);

  const handleSelectedBookshelf = (books, bookshelf) => {
    setBookshelfBooks(books);
    setSelectedBookshelf(bookshelf);
  };

  useEffect(() => {
    const shelves = ["favorites", "readnow", "toread", "haveread"];
    let books = [];
    let i = 0;
    const handleBookshelf = async (bookshelf) => {
      books = [];
      const bookRef = collection(db, "books", user.uid, bookshelf);
      try {
        const results = await getDocs(bookRef);
        results &&
          results.forEach((doc) => {
            if (doc.data()) {
              books.push(doc.data());
            } else return;
          });
        if (books.length > 0) {
          setBookshelfBooks(books);
        } else if (books.length == 0 && i < shelves.length - 1) {
          handleBookshelf(shelves[i + 1]);
          i++;
        } else {
          setIsBooksInShelf(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    handleBookshelf(shelves[i]);
  }, []);

  return (
    <section className="container">
      <div className="flex divide-x-1 divide-peacock-blue h-60vh">
        <BookshelfList
          passBooks={handleSelectedBookshelf}
          selectedBookshelf={selectedBookshelf}
        />
        {bookshelfBooks && isBooksInShelf && (
          <BookshelfBooks
            books={bookshelfBooks}
            selectedBookshelf={selectedBookshelf}
          />
        )}
        {!isBooksInShelf && !bookshelfBooks.length && (
          <h2>No books in bookshelf</h2>
        )}
      </div>
    </section>
  );
};

export default MyBookshelf;
