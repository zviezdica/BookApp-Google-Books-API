import { useEffect, useRef, useState } from "react";
import { Loader } from "../parts";
//to make viewer reachable out of functions
let viewer = undefined;

const EmbeddedViewer = ({ bookIsbn, pageNum, passLoadedInfo }) => {
  const canvasRef = useRef();
  const [loaded, setLoaded] = useState(false);

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
      viewer = new window.google.books.DefaultViewer(canvasRef.current);
      viewer.load(`ISBN:${bookIsbn}`, alertNotFound);
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
          window.viewer = viewer;
          viewer = new window.google.books.DefaultViewer(canvasRef.current);
        });
        //to ensure to load book when viewer is embedded
        setTimeout(() => {
          loadViewer();
        }, 2000);
      }
    }
    passLoadedInfo(loaded);
  }, [loaded]);

  useEffect(() => {
    if (loaded && viewer) {
      viewer.goToPage(pageNum);
    }
  }, [pageNum]);

  return (
    <div className="-mt-10">
      {loaded ? (
        <div>
          {/* <div className="h-20 border-red border-solid border-1">
            <div className="h-20 w-20 bg-red" onClick={handlePageNum}></div>
          </div> */}
          <div
            id="viewerCanvas"
            className="w-90vw h-135vw xs:w-80vw xs:h-80vh sm:w-575 mx-auto"
            ref={canvasRef}
          ></div>
        </div>
      ) : (
        // <div>Script not loaded</div>
        <div className="w-1/2 m-auto">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default EmbeddedViewer;
