import { useEffect, useState } from "react";
import BestSellersCategory from "./BestSellersCategory";
import BestSellersInCategory from "./BestSellersInCategory";

const axios = require("axios");

const BestSellersSection = () => {
  const [results, setResults] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=qJGgmI6bxmGUDaU8sXsGNTk7cToPzGYQ"
      )
      .then((res) => {
        setResults(res.data.results.lists);
      });
  }, []);

  return (
    <section className="container">
      <BestSellersInCategory />
      <section className="flex flex-wrap">
        {results &&
          results.map((list) => {
            return <BestSellersCategory data={list} key={list.list_name} />;
          })}
      </section>
    </section>
  );
};

export default BestSellersSection;
