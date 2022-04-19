import { useState } from "react";
import infoIcon from "../../../images/icons/info.png";

const CurrentBookOptions = ({ book, passPageNum }) => {
  const [rangeValue, setRangeValue] = useState(1);

  const handleRangeValue = (e) => {
    setRangeValue(e.target.value);
    passPageNum(e.target.value);
  };
  return (
    <section className="md:pl-35 md:absolute md:left-4/5 xl:left-7/10 md:top-30 children:py-10">
      {book.viewability == "PARTIAL" && (
        <div className="flex items-center">
          <div
            style={{ backgroundImage: `url(${infoIcon})` }}
            className="h-30 w-30 bg-center bg-cover"
          ></div>
          <h3 className="text-light-dark pl-5">Only partial viewability</h3>
        </div>
      )}
      <div className="flex items-center">
        <input
          type="range"
          min={1}
          max={book.pagesNum}
          value={rangeValue}
          onChange={handleRangeValue}
          className="bg-light-grey h-5 opacity-50 w-200 hover:opacity-90 appearance-none"
          id="ranger"
        />
        <h3 className="pl-20">Page: {rangeValue}</h3>
      </div>
    </section>
  );
};

export default CurrentBookOptions;
