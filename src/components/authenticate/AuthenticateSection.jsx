import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { UserContext } from "./UserContext";
import Alert from "../parts/Alert";
// import LoginGoogle from "./google/LoginGoogle";
// import LogoutGoogle from "./google/LogoutGoogle";

const AuthenticateSection = () => {
  const [activeAuth, setActiveAuth] = useState("login");
  const navigate = useNavigate();

  const {
    user,
    newUser,
    existingUser,
    userLoggedOut,
    userLoggedIn,
    setUserLoggedIn,
  } = useContext(UserContext);

  const handleActiveAuth = (auth) => {
    setActiveAuth(auth);
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      const timer = setTimeout(() => {
        navigate("/bookshelf");
        setUserLoggedIn(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [user]);

  return (
    <section>
      <div className="w-80vw xs:w-400 md:w-500 border-solid border-dark-blue rounded-md border-2 m-auto">
        <div className="flex children:font-bold children:w-1/2 children:text-30 text-center mb-10">
          <div
            onClick={() => handleActiveAuth("login")}
            className={
              "p-8 rounded-sm -ml-1 " +
              (activeAuth === "login"
                ? "bg-transparent text-dark-blue"
                : "bg-dark-blue text-white")
            }
          >
            Log in
          </div>
          <div
            onClick={() => handleActiveAuth("signup")}
            className={
              "p-8 rounded-sm ml-1 " +
              (activeAuth === "signup"
                ? "bg-transparent"
                : "bg-dark-blue text-white")
            }
          >
            Sign up
          </div>
        </div>
        {activeAuth === "signup" && <RegisterForm />}
        {activeAuth === "login" && <LoginForm />}
        {/* <LoginGoogle />
        <LogoutGoogle /> */}
        {userLoggedOut && (
          <Alert danger={true} text="You successfully logged out" />
        )}
        {userLoggedIn && (
          <Alert success={true} text="You successfully logged in" />
        )}
      </div>
    </section>
  );
};

export default AuthenticateSection;
