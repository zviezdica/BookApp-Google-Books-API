import { useEffect, useRef, useState } from "react";

const EmbeddedViewer = ({ book }) => {
  const canvasRef = useRef();
  const [loaded, setLoaded] = useState(false);
  console.log(loaded);

  const alertNotFound = () => {
    alert("could not embed the book!");
  };

  //add google books script
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.google.com/books/jsapi.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    scriptTag.id = "google-script";
    document.body.appendChild(scriptTag);
  }, []);

  //when script is loaded
  useEffect(() => {
    const loadViewer = () => {
      let viewer = new window.google.books.DefaultViewer(canvasRef.current);
      viewer.load(`ISBN:${book}`, alertNotFound);
    };
    if (!loaded) return;
    else {
      //if viewer is already embedded
      if (window.viewer) {
        loadViewer();
        //if not
      } else {
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          let viewer;
          window.viewer = viewer;
          viewer = new window.google.books.DefaultViewer(canvasRef.current);
        });
        //to be sure viewer is embedded
        setTimeout(() => {
          loadViewer();
        }, 2000);
      }
    }
  }, [loaded]);

  return (
    <>
      {loaded ? (
        <div id="viewerCanvas" className="w-9/10 h-80vh " ref={canvasRef}></div>
      ) : (
        <div>Script not loaded</div>
      )}
    </>
  );
};

export default EmbeddedViewer;
