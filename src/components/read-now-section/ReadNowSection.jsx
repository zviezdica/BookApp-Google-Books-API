import { useEffect, useRef, useState } from "react";
import EmbeddedViewer from "./EmbeddedViewer";
const ReadNowSection = ({book}) =>{
    
    return(
        <section className="pt-40 xs:pt-120 md:pt-100">
         <EmbeddedViewer book={book}/>
        </section>
       
    )
}

export default ReadNowSection;