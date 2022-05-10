import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setExistingUser } = useContext(UserContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExistingUser({ email, password });
  };

  return (
    <section className="p-10">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex flex-col my-10">
            <label htmlFor="email" className="text-18 mb-3 italic">
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
            <label htmlFor="password" className="text-18 mb-3 italic">
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
        </div>
        <div className="w-1/2 mx-auto text-center">
          <button
            type="submit"
            className="py-5 px-20 md:px-50 my-20 border-1 rounded-sm border-solid border-dark-blue uppercase text-17 transition-all duration-300 hover:bg-button-blue hover:text-white"
          >
            log in
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
