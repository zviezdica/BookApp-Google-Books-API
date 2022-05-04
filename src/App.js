import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { auth, db } from "./firebase-config";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "./App.css";
import { logoTransparent } from "./images/logo";
import { NavBigScreen, NavSmallScreen } from "./components/navigation";
import { Home } from "./components/home";
import { SearchBooks } from "./components/search-books";
import { MyBookshelf } from "./components/bookshelf";
import { ReadNowSection } from "./components/read-now-section";
import { AuthenticateSection } from "./components/authenticate";
import { UserContext } from "./contexts/UserContext";
import { BooksContext } from "./contexts/BooksContext";

function App() {
  const bigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [isIntroActive, setIsIntroActive] = useState(true);
  const [bookToRead, setBookToRead] = useState("");
  const [existingUser, setExistingUser] = useState("");
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState({});
  const [isLogOutActive, setIsLogOutActive] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userLoggedOut, setUserLoggedOut] = useState(false);
  const [pLLoaded, setPLLoaded] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [bookshelfFlag, setBookshelfFlag] = useState(false);
  const [booksInBookshelf, setBooksInBookshelf] = useState("");
  const [idBook, setIdBook] = useState(0);

  //authentication
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    // currentUser && handleBookshelf(currentUser.uid);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        newUser.regEmail,
        newUser.regPassword
      );
      handleLoginALert();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleBookshelf = (uid) => {
    let bookshelves = ["favorites", "readnow", "toread", "haveread"];
    let allBooks = {};
    bookshelves.forEach(async (shelf) => {
      try {
        const bookRef = collection(db, "books", uid, shelf);
        const results = await getDocs(bookRef);
        if (results) {
          allBooks[shelf] = [];
          results.forEach((doc) => {
            if (doc.data()) {
              allBooks[shelf].push(doc.data());
            } else return;
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    });
    setBooksInBookshelf(allBooks);
    return;
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        existingUser.email,
        existingUser.password
      );
      handleLoginALert();
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const handleLoginALert = () => {
    setUserLoggedIn(true);

    setTimeout(() => {
      setUserLoggedIn(false);
    }, 1500);
  };

  //user registered
  useEffect(() => {
    if (newUser) {
      register();
    }
  }, [newUser]);

  //user logged in
  useEffect(() => {
    if (existingUser) {
      login();
    }
  }, [existingUser]);

  const handleBookToRead = (book) => {
    setBookToRead(book);
  };

  useEffect(() => {
    if (user) {
      handleBookshelf(user.uid);
    }
  }, [user]);

  const handleAddToBookshelf = async (bookshelfname, id, title) => {
    setBookshelfFlag(false);
    let booksInThisShelf = booksInBookshelf[bookshelfname];
    let book = { bookId: `${id}`, name: `${title}` };
    booksInThisShelf.push(book);
    const bookRef = doc(db, "books", user.uid, bookshelfname, id);
    setDoc(bookRef, { merge: true });
    try {
      await setDoc(bookRef, book);
    } catch (error) {
      console.log(error.message);
    }
    setBooksInBookshelf(
      booksInBookshelf,
      (booksInBookshelf[bookshelfname] = booksInThisShelf)
    );
  };

  const handleRemoveFromBookshelf = async (bookshelfname, id) => {
    setBookshelfFlag(false);
    const bookRef = doc(db, "books", user.uid, bookshelfname, id);
    try {
      await deleteDoc(bookRef);
      let filteredBooks = booksInBookshelf[bookshelfname].filter(
        (book) => book.bookId != id
      );
      let allBooks = booksInBookshelf;
      allBooks[bookshelfname] = filteredBooks;
      setBooksInBookshelf(allBooks);
    } catch (error) {
      console.log(error.message);
    }
  };

  //intro animation
  useEffect(() => {
    let logoText = document.querySelector(".logo-text");
    if (logoText) {
      logoText.classList.remove("tracking-tighter");
      logoText.classList.add("tracking-widest");
      logoText.classList.remove("opacity-0");
      logoText.classList.add("opacity-100");
      setTimeout(() => {
        let introCover = document.querySelector(".intro-cover");
        introCover.classList.add("opacity-0");
      }, 2000);
      setTimeout(() => {
        setIsIntroActive(false);
      }, 3000);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        newUser,
        setNewUser,
        existingUser,
        setExistingUser,
        user,
        logout,
        isLogOutActive,
        setIsLogOutActive,
        userLoggedOut,
        setUserLoggedOut,
        userLoggedIn,
        setUserLoggedIn,
        accessToken,
        setAccessToken,
        handleAddToBookshelf,
        handleRemoveFromBookshelf,
        bookshelfFlag,
        setBookshelfFlag,
      }}
    >
      <Router>
        <div className="App relative min-h-100vh">
          {isIntroActive && (
            <div className="intro-cover h-100vh w-full bg-dark-blue fixed top-0 left-0 bottom-0 transition-all duration-1000 z-5">
              <div
                style={{ backgroundImage: `url(${logoTransparent})` }}
                className="h-1/2 w-1/2 bg-center bg-cover absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>
              <h1 className="logo-text uppercase text-35 sm:text-45 text-white transition-all duration-2000 absolute top-3/5 sm:top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter opacity-0">
                libar
              </h1>
            </div>
          )}
          <header className="w-full xs:fixed top-0 bg-white z-2">
            <nav className="h-full w-full shadow-bottom">
              {bigScreen ? <NavBigScreen /> : <NavSmallScreen />}
            </nav>
          </header>
          <main className="pt-40 xs:pt-150">
            <BooksContext.Provider
              value={{
                booksInBookshelf,
                setBooksInBookshelf,
                idBook,
                setIdBook,
              }}
            >
              <Routes>
                <Route path="/authenticate" element={<AuthenticateSection />} />
                <Route path="/" element={<Home />} />

                <Route
                  path="/search"
                  element={<SearchBooks passBookToRead={handleBookToRead} />}
                />
                <Route path="/bookshelf" element={<MyBookshelf />} />
                <Route
                  path="/readNow"
                  element={<ReadNowSection book={bookToRead} />}
                />
              </Routes>
            </BooksContext.Provider>
          </main>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
