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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [activeCategory]);

  return (
    <section className="container">
      <BestSellersInCategory books={booksInCategory} />
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
      </section>
    </section>
  );
};

export default BestSellersSection;
