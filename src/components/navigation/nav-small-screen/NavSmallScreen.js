import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logoBlue } from "../../../images/logo";
import { UserContext } from "../../../contexts/UserContext";
import { UserIcon } from "..";

const NavSmallScreen = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <section>
      <div className="container flex justify-between items-center py-10 ">
        <div className="logo w-max opacity-90">
          <Link to="/">
            <div
              style={{ backgroundImage: `url(${logoBlue})` }}
              className="h-50 w-50 xs:h-70 xs:w-70 bg-center bg-cover mx-auto"
            ></div>
            <h4 className="uppercase text-dark-blue tracking-widest text-17 -mt-10 mb-5 text-center w-max mx-auto">
              libar
            </h4>
          </Link>
        </div>
        <div className="relative">
          {!user && (
            <Link to="/authenticate">
              <button className="absolute top-1/2 left-1/2 -translate-x-3/5 -translate-y-1/2 py-2 px-15 border-2 rounded-sm border-solid border-dark-blue uppercase text-17 transition-all duration-300 hover:bg-dark-blue hover:text-white whitespace-nowrap">
                log in
              </button>
            </Link>
          )}
          {user && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex z-2">
              {<UserIcon />}
            </div>
          )}
        </div>
        <div
          onClick={() => setIsNavOpened(!isNavOpened)}
          className={
            "nav-icon w-40 h-30 xs:w-65 xs:h-45 relative rotate-0 transition-all cursor-pointer opacity-90 " +
            (isNavOpened ? "open" : "")
          }
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={
          "text-center transition-all overflow-hidden duration-300 " +
          (isNavOpened ? "h-218" : "h-0")
        }
      >
        <div>
          <Link to="/search">
            <h4
              className="route-link py-20 border-b-1 border-solid border-greyish"
              onClick={() => setIsNavOpened(false)}
            >
              search books
            </h4>
          </Link>
        </div>
        <Link to="/">
          <h4
            className="route-link py-20 border-b-1 border-solid border-greyish"
            onClick={() => setIsNavOpened(false)}
          >
            home
          </h4>
        </Link>
        <Link to="/bookshelf">
          <h4
            className="route-link py-20 border-b-1 border-solid border-greyish"
            onClick={() => setIsNavOpened(false)}
          >
            my bookshelf
          </h4>
        </Link>
      </div>
    </section>
  );
};

export default NavSmallScreen;
