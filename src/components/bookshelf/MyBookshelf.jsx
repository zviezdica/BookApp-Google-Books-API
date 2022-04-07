import BookshelfList from "./BookshelfList";

const MyBookshelf = () => {
  return (
    <section className="container">
      <div className="flex divide-x-1 divide-peacock-blue h-60vh">
        <BookshelfList />
        <div className="pl-40">books from bookshelf</div>
      </div>
    </section>
  );
};

export default MyBookshelf;
