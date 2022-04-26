import { useContext } from "react";
import { UserContext } from "../authenticate/UserContext";
import { db } from "../../firebase-config";


import { collection, getDocs } from "firebase/firestore";

const BookOptionsFilter = ({bookshelf, url, text, passBooks}) => {
    const { user } = useContext(UserContext);

    const handleBookshelf = async (bookshelf) => {
        const books = [];
        const bookRef = collection(db, "books", user.uid, bookshelf);
        try {
          const results = await getDocs(bookRef);
          console.log(results)
          results && results.forEach((doc) => {
            if (doc.data()) {
              books.push(doc.data());
              console.log(doc.data())
            } else{
                console.log('niente')
                return;
            } 
          });
          console.log(books)
        } catch (error) {
          console.log(error.message);
        }
        passBooks(books);
      };

    return(
        <div
        className="flex items-center pb-20"
        onClick={() => handleBookshelf(bookshelf)}
      >
        <div
          style={{ backgroundImage: `url(${url})` }}
          className="h-25 w-25 bg-cover bg-center"
        ></div>
        <h4 className="px-15">{text}</h4>
      </div>
    )
}

export default BookOptionsFilter;