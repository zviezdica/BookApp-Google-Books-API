import { useState } from "react";
import { info, favorites, haveRead } from "../../../images/icons";
import { BookOption } from "../../parts";

const CurrentBookOptions = ({ book, passPageNum }) => {
  const [rangeValue, setRangeValue] = useState(1);
  const [infoViewabilityActive, setInfoViewabilityActive] = useState(false);

  const handleRangeValue = (e) => {
    setRangeValue(e.target.value);
    passPageNum(e.target.value);
  };
  return (
    <section className="mb-30 md:pl-25 md:absolute md:left-4/5 xl:left-7/10 md:top-30 children:py-10  w-max">
      {book.viewability == "PARTIAL" && (
        <div>
        <div className="flex items-center cursor-default" onMouseEnter={() => setInfoViewabilityActive(true)} onMouseLeave={() => setInfoViewabilityActive(false)}>
          <div
            style={{ backgroundImage: `url(${info})` }}
            className="h-30 w-30 bg-center bg-cover"
          ></div>
          <h3 className="text-light-dark pl-5">Only partial viewability</h3>
        </div>
        {infoViewabilityActive && <div className="absolute w-200 top-50 bg-white z-1 shadow-card p-10">
          <p>This books has only partial viewability. If you don't see selected page, it means that page is not available.</p>
        </div>}
        </div>
      )}
      <div className="flex items-center">
        <input
          type="range"
          min={1}
          max={book.pagesNum}
          value={rangeValue}
          onChange={handleRangeValue}
          className="bg-light-grey h-5 opacity-50 w-130 lg:w-180 hover:opacity-90 appearance-none"
          id="ranger"
        />
        <h3 className="pl-15">Page: {rangeValue}</h3>
      </div>
      <BookOption
        type="favorites"
        book={book}
        url={favorites}
        text="Add to favorites"
      />
      <BookOption
        type="haveread"
        book={book}
        url={haveRead}
        text="Mark as have read"
      />
    </section>
  );
};

export default CurrentBookOptions;
