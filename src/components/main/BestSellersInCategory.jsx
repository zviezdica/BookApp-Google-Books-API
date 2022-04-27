const BestSellersInCategory = ({ books }) => {
  console.log(books);
  return (
    <div>
      {books &&
        books.map((book) => {
          console.log(book.book_image);
          return (
            <div key={book.primary_isbn13}>
              <img
                className="rounded-sm w-200 my-20"
                src={book.book_image}
              ></img>
            </div>
          );
        })}
    </div>
  );
};

export default BestSellersInCategory;
