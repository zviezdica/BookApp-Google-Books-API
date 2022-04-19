import { useEffect, useRef, useState } from "react";
import EmbeddedViewer from "./EmbeddedViewer";
import CurrentBookOptions from "./current-book-options/CurrentBookOptions";

const ReadNowSection = ({ book }) => {
  const [goToPage, setGoToPage] = useState(1);

  return (
    <section className="relative container">
      <CurrentBookOptions book={book} />
      <EmbeddedViewer bookIsbn={book.bookIsbn} />
    </section>
  );
};

export default ReadNowSection;
