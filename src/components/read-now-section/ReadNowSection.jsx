import { useEffect, useRef, useState } from "react";
import EmbeddedViewer from "./EmbeddedViewer";
import CurrentBookOptions from "./current-book-options/CurrentBookOptions";

const ReadNowSection = ({ book }) => {
  const [goToPage, setGoToPage] = useState(1);

  const handlePageNum = (pageNum) => {
    setGoToPage(pageNum);
  };

  return (
    <section className="relative container">
      <CurrentBookOptions book={book} passPageNum={handlePageNum} />
      <EmbeddedViewer bookIsbn={book.bookIsbn} pageNum={goToPage} />
    </section>
  );
};

export default ReadNowSection;
