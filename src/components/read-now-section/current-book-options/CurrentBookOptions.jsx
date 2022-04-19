import infoIcon from "../../../images/icons/info.png";

const CurrentBookOptions = ({ book }) => {
  console.log(book);
  return (
    <section className="md:pl-35 md:absolute md:left-4/5 xl:left-7/10 md:top-30">
      {book.viewability == "PARTIAL" && (
        <div className="flex items-center">
          <div
            style={{ backgroundImage: `url(${infoIcon})` }}
            className="h-30 w-30 bg-center bg-cover"
          ></div>
          <h3 className="text-light-dark pl-5">Only partial viewability</h3>
        </div>
      )}
    </section>
  );
};

export default CurrentBookOptions;
