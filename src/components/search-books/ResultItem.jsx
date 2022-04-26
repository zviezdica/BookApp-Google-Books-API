const ResultItem = ({ item, handleDetails }) => {
  const { id, volumeInfo } = item;
  const { authors, imageLinks, publishedDate, subtitle, title } = volumeInfo;
  return (
    <div className="book-card" onClick={() => handleDetails(id)}>
      {title && <h1 className="text-17 text-center pb-10">{title}</h1>}
      {subtitle && <h3 className="text-14 text-center pb-5">{subtitle}</h3>}
      {authors && (
        <h4 className="text-14 text-center pb-5">
          {authors.toString().replace(",", ", ")},{" "}
          {publishedDate && publishedDate.slice(0, 4)}
        </h4>
      )}
      {imageLinks && (
        <img
          className="rounded-sm w-100 my-20"
          src={imageLinks.smallThumbnail}
        ></img>
      )}
      <div className="see-more mb-10 capitalize py-2 px-15 md:px-15 text-peacock-blue text-17 transition-all opacity-0">
        see more
      </div>
    </div>
  );
};

export default ResultItem;
