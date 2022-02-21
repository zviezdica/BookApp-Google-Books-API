import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css';
import IMAGES from './images/index';
import logoTransparent from './images/logo/logo-books-transparent.png'
import NavBigScreen from './components/navigation/nav-big-screeen/NavBigScreen';
import NavSmallScreen from './components/navigation/nav-small-screen/NavSmallScreen';
import Home from './components/main/Home';
import SearchBooks from './components/search-books/SearchBooks';
import MyBookshelf from './components/bookshelf/MyBookshelf';

function App() {
  const bigScreen = useMediaQuery({query:"(min-width: 768px)" })
  const [isIntroActive, setIsIntroActive]= useState(true)

  useEffect(()=>{
    let logoText = document.querySelector(".logo-text");
    if (logoText) {
      logoText.classList.remove("tracking-tighter")
      logoText.classList.add("tracking-widest")
      logoText.classList.remove("opacity-0")
      logoText.classList.add("opacity-100")
      setTimeout(()=>{
        let introCover = document.querySelector(".intro-cover");
        introCover.classList.add("opacity-0")
      }, 2000)
      setTimeout(()=>{
        setIsIntroActive(false)
      }, 3000)
    }
  },[])

  return (
    <Router>
      <div className="App relative min-h-100vh ">
        {isIntroActive && <div className='intro-cover h-full w-full bg-dark-blue absolute top-0 left-0 bottom-0 transition-all duration-1000 z-2'>
                <div style={{backgroundImage:`url(${logoTransparent})`}} className='h-1/2 w-1/2 bg-center bg-cover absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
                <h1 className='logo-text uppercase text-35 sm:text-45 text-white transition-all duration-2000 absolute top-3/5 sm:top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter opacity-0'>libar</h1>
              </div>} 
          <header className='w-full xs:fixed top-0 bg-white z-1'>
            <nav className='h-full w-full shadow-bottom'>
              {!bigScreen && <NavSmallScreen />}
              {bigScreen && <NavBigScreen />}
          </nav>
          </header>
          <main >
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/search" element={<SearchBooks />}/>
              <Route path="/bookshelf" element={<MyBookshelf />}/>
            </Routes>
          </main>
                      
        </div>
      </Router>
    
  );
}

export default App;
