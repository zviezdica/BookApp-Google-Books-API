const Alert = ({ text, success, danger }) => {
  return (
    <>
      <div className="w-max fixed bottom-30 left-1/2 chidren:relative children:-translate-x-1/2 children:px-20 children:rounded-sm">
        {success && <h4 className="bg-alert-green ">{text}</h4>}
        {danger && <h4 className="bg-alert-red">{text}</h4>}
      </div>
    </>
  );
};

export default Alert;
