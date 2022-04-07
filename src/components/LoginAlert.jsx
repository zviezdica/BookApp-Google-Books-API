import React, { useContext } from "react";
import { UserContext } from "./authenticate/UserContext";

const LoginAlert = () => {
  const { user, loginAlert } = useContext(UserContext);

  return (
    <div className="w-max fixed bottom-30 left-1/2">
      {user && loginAlert && (
        <h4 className="relative -left-1/2 bg-alert-green px-20 rounded-sm">
          {user.email} successfullly loged in!
        </h4>
      )}
      {!user && loginAlert && (
        <h4 className="relative -left-1/2 bg-alert-red px-20 rounded-sm">
          You successfullly loged out!
        </h4>
      )}
    </div>
  );
};

export default LoginAlert;
