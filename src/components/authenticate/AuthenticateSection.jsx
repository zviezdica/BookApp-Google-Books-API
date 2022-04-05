import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const AuthenticateSection = ({ currentUser }) => {
  const [activeAuth, setActiveAuth] = useState("login");
  const [alert, setAlert] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const navigate = useNavigate();

  const handleActiveAuth = (auth) => {
    setActiveAuth(auth);
  };

  useEffect(() => {
    setAlert(true);
    const timer = setTimeout(() => {
      setAlert(false);
      if (currentUser) {
        setShouldNavigate(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [currentUser]);

  useEffect(() => {
    if (shouldNavigate) {
      setShouldNavigate(false);
      navigate("/bookshelf");
    } else return;
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
        {activeAuth === "signup" && <RegisterForm />}
        {activeAuth === "login" && <LoginForm />}
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
