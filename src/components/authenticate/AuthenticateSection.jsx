import { useState } from "react";
import logo from "../../images/logo/logo-blue.png";
import AuthForm from "./AuthForm";

const AuthenticateSection = ({ getUser }) => {
  const [activeAuth, setActiveAuth] = useState("login");

  const handleActiveAuth = (auth) => {
    setActiveAuth(auth);
  };

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
    </section>
  );
};

export default AuthenticateSection;
