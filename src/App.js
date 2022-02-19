import { useEffect } from 'react';
import './App.css';
import IMAGES from './images/index';
import logoTransparent from './images/logo/logo-books-transparent.png'
function App() {

  useEffect(()=>{
    let logoText = document.querySelector(".logo-text");
    logoText.classList.remove("tracking-tighter")
    logoText.classList.add("tracking-widest")
    logoText.classList.remove("opacity-0")
    logoText.classList.add("opacity-100")
    console.log(logoText)
    setTimeout(()=>{
      let introCover = document.querySelector(".intro-cover");
      introCover.classList.add("opacity-0")
    }, 2000)
  },)


  return (
    <div className="App">
      <div className=' relative'>
            <div style={{backgroundImage:`url(${IMAGES.logos.logoFull})`}}>
            
            </div>
            <div className='intro-cover h-screen w-screen bg-dark-blue absolute top-0 transition-all duration-1000'>
              <div style={{backgroundImage:`url(${logoTransparent})`}} className='h-700 w-700 bg-center bg-cover absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '></div>
              <h1 className='logo-text uppercase text-45 text-white transition-all duration-2000 absolute  top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter opacity-0'>libar</h1>
            </div>
        </div>
      </div>
    
  );
}

export default App;
