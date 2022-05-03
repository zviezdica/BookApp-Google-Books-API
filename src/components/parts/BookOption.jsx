import { useContext, useRef } from "react";
import { UserContext } from "../../contexts/UserContext";

const BookOption = ({ type, book, url, text, textDel, isInShelf }) => {
  const { handleAddToBookshelf, handleRemoveFromBookshelf } =
    useContext(UserContext);
  const optionDiv = useRef(null);

  const passAddToBookshelf = () => {
    optionDiv.current.classList.add("animate-ping-small");
    handleAddToBookshelf(type, book.id, book.title);
    setTimeout(() => {
      if (optionDiv.current.classList.contains("animate-ping-small"))
        optionDiv.current.classList.remove("animate-ping-small");
    }, 300);
  };

  const passRemoveFromBookshelf = () => {
    console.log("removing from bookshelf");
    handleRemoveFromBookshelf(type, book.id);
  };

  return (
    <div
      className="flex items-center pb-20 hover:text-peacock-blue transition-color cursor-pointer w-max"
      onClick={!isInShelf ? passAddToBookshelf : passRemoveFromBookshelf}
      ref={optionDiv}
    >
      <div
        style={{ backgroundImage: `url(${url})` }}
        className="h-15 w-15 bg-cover bg-center"
      ></div>
      <h4 className="px-10">{!isInShelf ? text : textDel}</h4>
    </div>
  );
};

export default BookOption;
