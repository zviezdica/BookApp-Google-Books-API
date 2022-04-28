import { useEffect, useState } from "react";
import { BestSellersCategory, BestSellersInCategory } from ".";

const axios = require("axios");

const BestSellersSection = () => {
  const [results, setResults] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [booksInCategory, setBooksInCategory] = useState("");

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
  };

  const handleCategoryBooks = (books) => {
    setBooksInCategory(books);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=qJGgmI6bxmGUDaU8sXsGNTk7cToPzGYQ"
      )
      .then((res) => {
        setResults(res.data.results.lists);
        setBooksInCategory(res.data.results.lists[0].books);
        setActiveCategory(res.data.results.lists[0].list_id);
      });
  }, []);

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [activeCategory]);

  return (
    <section className="container container--books-in-drawer">
      <div className="mb-20">
        <h2 className="text-32">Looking for a suggestion?</h2>
        <h3 className="text-25 italic">NYT Best Sellers List</h3>
      </div>
      <h4 className="text-21 mb-10">Categories:</h4>
      <section className="flex flex-wrap">
        {results &&
          results.map((list) => {
            return (
              <BestSellersCategory
                data={list}
                key={list.list_name}
                passActiveCategory={handleActiveCategory}
                activeCategory={activeCategory}
                passBooks={handleCategoryBooks}
              />
            );
          })}
        {results && (
          <BestSellersCategory
            data={results}
            name={"All"}
            passActiveCategory={handleActiveCategory}
            activeCategory={activeCategory}
            passBooks={handleCategoryBooks}
          />
        )}
      </section>

      <BestSellersInCategory books={booksInCategory} />
    </section>
  );
};

export default BestSellersSection;
