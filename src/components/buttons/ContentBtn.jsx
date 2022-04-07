const ContentBtn = ({ text }) => {
  return (
    <button className="py-2 md:py-5 px-5 md:px-15 border-1 rounded-md border-solid border-dark-blue uppercase text-12 transition-all duration-300 hover:bg-button-blue hover:text-white hover:border-white">
      {text}
    </button>
  );
};

export default ContentBtn;
