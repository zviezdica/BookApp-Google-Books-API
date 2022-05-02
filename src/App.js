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
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

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
import { UserContext } from "./components/authenticate/UserContext";

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

  console.log(booksInBookshelf);

  //authentication
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    currentUser && handleBookshelf(currentUser.uid);
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
    console.log(allBooks);
    if (Object.keys(allBooks) != 0) {
      setBooksInBookshelf(allBooks);
    }

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
    // finally {
    //   user.uid && handleBookshelf("favorites", user.uid);
    // }
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

  // useEffect(() => {
  //   const q = query(collection(db, "books"));
  //   const unsub = onSnapshot(q, (querySnapshot) => {
  //     console.log(querySnapshot);
  //     console.log(q);
  //   });
  // }, []);

  const handleAddToBookshelf = async (bookshelfname, id, title) => {
    setBookshelfFlag(false);
    const bookRef = doc(db, "books", user.uid, bookshelfname, id);
    setDoc(bookRef, { merge: true });
    try {
      await setDoc(bookRef, { bookId: `${id}`, name: `${title}` });
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
            <Routes>
              <Route path="/authenticate" element={<AuthenticateSection />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/search"
                element={<SearchBooks passBookToRead={handleBookToRead} />}
              />

              <Route path="/bookshelf" element={<MyBookshelf />}></Route>
              <Route
                path="/readNow"
                element={<ReadNowSection book={bookToRead} />}
              />
            </Routes>
          </main>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
