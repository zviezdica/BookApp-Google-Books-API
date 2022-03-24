import { useEffect, useRef, useState } from "react";
import EmbeddedViewer from "./EmbeddedViewer";
const ReadNowSection = ({book}) =>{
    const canvasRef = useRef();
    const [loaded, setLoaded] = useState(false);

    const alertNotFound = () =>{
        alert('could not embed the book!');
    }

    //add google books script
    useEffect(()=>{
        const scriptTag = document.createElement('script');
        scriptTag.src='https://www.google.com/books/jsapi.js';
        scriptTag.addEventListener('load', ()=> setLoaded(true));
        scriptTag.id = 'google-script';
        document.body.appendChild(scriptTag);
        
        
    },[]);

    //when script is loaded
    useEffect(()=>{
        if(!loaded) return;
        else{
            
            if(window.viewer){
                let viewer = new window.google.books.DefaultViewer(canvasRef.current);
                viewer.load(`ISBN:${book}`, alertNotFound)
                console.log(viewer)
            }
            else{
                window.google.books.load()

                window.google.books.setOnLoadCallback(()=>{
                    let viewer = new window.google.books.DefaultViewer(canvasRef.current);
                    window.viewer = viewer;
                    viewer.load(`ISBN:${book}`)
                })
            } 
            console.log(window.google.books)
            console.log(`ISBN:${book}`)
        }
    },[loaded])



    return(
        <section className="pt-40 xs:mt-150 border-red border.solid border-2">
            {loaded? <div id="viewerCanvas" className="w-500 h-500" ref={canvasRef}></div> : <div>Script not loaded</div>}

         <EmbeddedViewer />
        </section>
       
    )
}

export default ReadNowSection;