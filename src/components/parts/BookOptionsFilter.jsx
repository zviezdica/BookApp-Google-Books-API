import { useContext } from "react";
import { UserContext } from "../authenticate/UserContext";
import { db } from "../../firebase-config";


import { collection, getDocs } from "firebase/firestore";

const BookOptionsFilter = ({bookshelf, url, text, passBooks, selectedBookshelf}) => {
    const { user } = useContext(UserContext);
    console.log(bookshelf==selectedBookshelf)

    const handleBookshelf = async (bookshelf) => {
        let books = [];
        const bookRef = collection(db, "books", user.uid, bookshelf);
        try {
          const results = await getDocs(bookRef);
          results && results.forEach((doc) => {
            if (doc.data()) {
              books.push(doc.data());
              console.log(doc.data())
            } else{
                console.log('niente')
                return;
            } 
          });
        } catch (error) {
          console.log(error.message);
        }
        passBooks(books, bookshelf);
      };

    return(
        <div
        className={"flex items-center pb-20 cursor-pointer hover:text-peacock-blue " + (selectedBookshelf==bookshelf? 'text-cerulean-blue' : ' text-dark-blue')}
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