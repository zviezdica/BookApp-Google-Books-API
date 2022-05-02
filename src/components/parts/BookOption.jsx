import { useContext, useRef } from "react";
import { UserContext } from "../authenticate/UserContext";

const BookOption = ({ type, book, url, text }) => {
  const { handleAddToBookshelf } = useContext(UserContext);
  const optionDiv = useRef(null);
  const passAddToBookshelf = () => {
    optionDiv.current.classList.add("animate-ping-small");
    handleAddToBookshelf(type, book.id, book.title);
    setTimeout(() => {
      optionDiv.current.classList.remove("animate-ping-small");
    }, 300);
  };
  return (
    <div
      className="flex items-center pb-20 hover:text-peacock-blue transition-color cursor-pointer w-max"
      onClick={passAddToBookshelf}
      ref={optionDiv}
    >
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-15 w-15 bg-cover bg-center"
      ></div>
      <h4 className="px-10">{text}</h4>
    </div>
  );
};

export default BookOption;
