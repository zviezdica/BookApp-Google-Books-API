const BestSellersCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="p-5 w-max border-solid border-2 border-button-blue text-center rounded-md m-5">
      <h3 className="text-button-blue text-14">{data.list_name}</h3>
    </div>
  );
};

export default BestSellersCategory;
