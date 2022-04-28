const BestSellersCategory = ({
  data,
  passActiveCategory,
  activeCategory,
  passBooks,
}) => {
  const handleClick = () => {
    passActiveCategory(data.list_id);
    console.log(data.list_id);
    passBooks(data.books);
  };

  return (
    <div
      className={
        "p-5 w-max border-solid border-2 border-button-blue text-center rounded-md m-5 text-14 " +
        (activeCategory == data.list_id
          ? " bg-button-blue text-white "
          : " text-button-blue ")
      }
      onClick={handleClick}
    >
      <h3>{data.list_name}</h3>
    </div>
  );
};

export default BestSellersCategory;
