import { useEffect } from "react";

const BookInBookDrawer = ({ book }) => {
  const { id, volumeInfo } = book.data;
  const { imageLinks, title } = volumeInfo;

  return (
    <div className="p-10 xs:p-20">
      {imageLinks && (
        <img
          className="rounded-sm w-120 "
          src={imageLinks.smallThumbnail}
        ></img>
      )}
    </div>
  );
};

export default BookInBookDrawer;
