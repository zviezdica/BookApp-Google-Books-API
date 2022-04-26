import { useState } from "react";
import { EmbeddedViewer, CurrentBookOptions } from ".";

const ReadNowSection = ({ book }) => {
  const [goToPage, setGoToPage] = useState(1);
  const [showOptions, setShowOptions] = useState(false);
  console.log(book);

  const handlePageNum = (pageNum) => {
    setGoToPage(pageNum);
  };

  const handleLoadedInfo = (loaded) => {
    setShowOptions(loaded);
  };

  return (
    <section className="relative container ">
      {showOptions && (
        <CurrentBookOptions book={book} passPageNum={handlePageNum} />
      )}
      <EmbeddedViewer
        bookIsbn={book.bookIsbn}
        pageNum={goToPage}
        passLoadedInfo={handleLoadedInfo}
      />
    </section>
  );
};

export default ReadNowSection;
