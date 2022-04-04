import { useState } from "react";

const AuthForm = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <section className="p-10">
      <div>
        <div className="flex flex-col my-10">
          <label htmlFor="email" className="text-21 mb-3 italic">
            E-mail:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            value={email}
            onChange={handleEmail}
            className="text-16 border-solid border-2 border-lighter-grey p-8 rounded-md"
          ></input>
        </div>
        <div className="flex flex-col my-10">
          <label htmlFor="password" className="text-21 mb-3 italic">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="g7IxpYz.u82_qe"
            value={password}
            onChange={handlePassword}
            className="text-16 border-solid border-2 border-lighter-grey p-8 rounded-md"
          ></input>
        </div>
        {auth === "signup" && (
          <div className="flex flex-col my-10">
            <label htmlFor="confirmPassword" className="text-21 mb-3 italic">
              Confirm password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="g7IxpYz.u82_qe"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className="text-16 border-solid border-2 border-lighter-grey p-8 rounded-md"
            ></input>
          </div>
        )}
      </div>
      <div className="w-1/2 mx-auto text-center">
        {auth === "login" && (
          <button className="py-5 px-50 my-20 border-1 rounded-sm border-solid border-dark-blue uppercase text-17 transition-all duration-300 hover:bg-button-blue hover:text-white">
            log in
          </button>
        )}
        {auth === "signup" && (
          <button className="py-5 px-50 my-20 border-1 rounded-sm border-solid border-dark-blue uppercase text-17 transition-all duration-300 hover:bg-button-blue hover:text-white">
            sign up
          </button>
        )}
      </div>
    </section>
  );
};

export default AuthForm;
