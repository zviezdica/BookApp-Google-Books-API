import { useEffect, useState } from "react";

const Alert = ({ text, success, danger }) => {
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  });

  return (
    <>
      <div className="w-max fixed bottom-30 left-1/2 chidren:relative children:-translate-x-left-1/2 children:px-20 children:rounded-sm">
        {success && <h4 className="bg-alert-green ">{text}</h4>}
        {danger && <h4 className="bg-alert-red">{text}</h4>}
      </div>
    </>
  );
};

export default Alert;
