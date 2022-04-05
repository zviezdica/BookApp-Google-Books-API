import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { UserContext } from "./UserContext";

const AuthenticateSection = () => {
  const [activeAuth, setActiveAuth] = useState("login");
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const navigate = useNavigate();

  const { user, loginAlert, setLoginAlert } = useContext(UserContext);

  const handleActiveAuth = (auth) => {
    setActiveAuth(auth);
  };

  useEffect(() => {
    setLoginAlert(true);
    const timer = setTimeout(() => {
      setLoginAlert(false);
    }, 1500);

    if (user) {
      navigate("/bookshelf");
    }
    return () => clearTimeout(timer);
  }, [user]);

  //   useEffect(() => {
  //     if (shouldNavigate) {
  //       setShouldNavigate(false);
  //       navigate("/bookshelf");
  //     } else return;
  //   }, [shouldNavigate]);

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
        {activeAuth === "signup" && <RegisterForm />}
        {activeAuth === "login" && <LoginForm />}
      </div>
    </section>
  );
};

export default AuthenticateSection;
