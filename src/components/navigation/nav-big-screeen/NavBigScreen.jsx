import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import logoBlue from "../../../images/logo/logo-blue.png";
import { UserContext } from "../../authenticate/UserContext";
import UserIcon from "../UserIcon";
import LogOut from "../LogOut";

const NavBigScreen = () => {
  const { user, isLogOutActive } = useContext(UserContext);
  console.log(isLogOutActive);

  return (
    <section className="container flex">
      <div className="w-1/5">
        <div className="logo w-max opacity-90 mx-auto">
          <Link to="/">
            <div
              style={{ backgroundImage: `url(${logoBlue})` }}
              className="h-60 w-60 md:h-70 md:w-70 bg-center bg-cover mx-auto"
            ></div>
            <h4 className="uppercase text-dark-blue tracking-widest text-18 md:text-21 -mt-10 mb-5 text-center w-max mx-auto">
              libar
            </h4>
          </Link>
        </div>
      </div>

      <div className="w-3/5 flex justify-evenly items-center">
        <div>
          <Link to="/search">
            <h4 className="route-link">search books</h4>
          </Link>
        </div>
        <Link to="/">
          <h4 className="route-link">home</h4>
        </Link>
        <Link to="/bookshelf">
          <h4 className="route-link">my bookshelf</h4>
        </Link>
      </div>
      <div className="w-1/5 relative">
        {!user && (
          <Link to="/authenticate">
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-5 md:px-15 border-2 rounded-sm border-solid border-dark-blue uppercase text-17 transition-all duration-300 hover:bg-dark-blue hover:text-white">
              log in
            </button>
          </Link>
        )}
        {user && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex ">
            {<UserIcon />}
          </div>
        )}
      </div>
    </section>
  );
};

export default NavBigScreen;
