const BestSellersCategory = ({
  data,
  passActiveCategory,
  activeCategory,
  passBooks,
  name,
}) => {
  const handleClick = () => {
    passActiveCategory(data.list_id || name);
    if (!name) {
      passBooks(data.books);
    } else {
      let books = [];
      data.forEach((list) => {
        list.books.forEach((book) => {
          books.push(book);
        });
      });
      passBooks(books);
    }

    window.scrollTo({
      top: document.body.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        "p-3 sm:p-5 w-max transition-all border-solid border-1 sm:border-2 border-button-blue text-center rounded-md m-3 sm:m-5 text-12 sm:text-14 cursor-pointer" +
        (activeCategory == data.list_id || activeCategory == name
          ? " bg-button-blue text-white "
          : " text-button-blue ")
      }
      onClick={handleClick}
    >
      <h3>{data.list_name || name}</h3>
    </div>
  );
};

export default BestSellersCategory;
