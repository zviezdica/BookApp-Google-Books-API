import { useEffect, useRef, useState } from "react";
import logo from "../../images/logo/logo-blue.png";
import AuthForm from "./AuthForm";

const AuthenticateSection = ({ getUser, currentUser }) => {
  const [activeAuth, setActiveAuth] = useState("login");
  const [alert, setAlert] = useState(false);

  const handleActiveAuth = (auth) => {
    setActiveAuth(auth);
  };

  useEffect(() => {
    setAlert(true);
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentUser]);

  return (
    <section>
      <div className="w-80vw xs:w-400 md:w-500 border-solid border-dark-blue rounded-md border-2 m-auto">
        <div className="flex children:font-bold children:w-1/2 children:text-30 text-center mb-10">
          <div
            onClick={() => handleActiveAuth("login")}
            className={
              "p-8 " +
              (activeAuth === "login" ? "bg-transparent" : "bg-button-blue")
            }
          >
            Log in
          </div>
          <div
            onClick={() => handleActiveAuth("signup")}
            className={
              "p-8 " +
              (activeAuth === "signup" ? "bg-transparent" : "bg-button-blue")
            }
          >
            Sign up
          </div>
        </div>
        <AuthForm auth={activeAuth} getUser={getUser} />
      </div>

      <div className="w-max fixed bottom-30 left-1/2">
        {currentUser && alert && (
          <h4 className="relative -left-1/2 bg-alert-green px-20 rounded-sm">
            {currentUser} successfullly loged in!
          </h4>
        )}
        {!currentUser && alert && (
          <h4 className="relative -left-1/2 bg-alert-red px-20 rounded-sm">
            You successfullly loged out!
          </h4>
        )}
      </div>
    </section>
  );
};

export default AuthenticateSection;
