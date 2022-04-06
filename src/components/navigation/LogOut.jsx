import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../authenticate/UserContext";

const LogOut = () => {
  const { logout } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/authenticate");
  };

  return (
    <div className="h-150 md:h-200 w-180 md:w-200 absolute -left-1/10 md:-left-1/5 top-40 bg-white shadow-card">
      <div className="relative w-full h-full">
        <button
          onClick={handleLogout}
          className="absolute bottom-15 left-1/2 -translate-x-1/2 py-2 px-5 md:px-10 border-2 rounded-sm border-solid border-dark-blue uppercase text-17 transition-all duration-300 hover:bg-dark-blue hover:text-white"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default LogOut;