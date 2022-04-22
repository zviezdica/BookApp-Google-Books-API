import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../authenticate/UserContext";
import infoIcon from "../../../images/icons/info.png";
import favorites_ from "../../../images/icons/favorites.png";
import haveRead_ from "../../../images/icons/have-read.png";
import BookOption from "../../parts/BookOption";

const CurrentBookOptions = ({ book, passPageNum }) => {
  const [rangeValue, setRangeValue] = useState(1);

  const handleRangeValue = (e) => {
    setRangeValue(e.target.value);
    passPageNum(e.target.value);
  };
  return (
    <section className="md:pl-25 md:absolute md:left-4/5 xl:left-7/10 md:top-30 children:py-10  w-max">
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
          className="bg-light-grey h-5 opacity-50 w-130 lg:w-180 hover:opacity-90 appearance-none"
          id="ranger"
        />
        <h3 className="pl-15">Page: {rangeValue}</h3>
      </div>
      <BookOption type='favorites' book={book} url={favorites_} text='Add to favorites'/>
      <BookOption type='haveread' book={book} url={haveRead_} text='Mark as have read'/>
    </section>
  );
};

export default CurrentBookOptions;
