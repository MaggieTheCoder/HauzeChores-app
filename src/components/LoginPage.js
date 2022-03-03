/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LoginPage = () => {
  const [signInDetails, setSignInDetails] = useState();
  const [registerDetails, setRegisterDetails] = useState();

  const handleSignInInputChange = (e) => {
    setSignInDetails({ ...signInDetails, [e.target.name]: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    console.log(signInDetails);
  };

  const handleRegisterInputChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    console.log(registerDetails);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={signIn}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleSignInInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleSignInInputChange}
        />
        <button type="submit">Login!</button>
      </form>
      <hr />
      <form onSubmit={register}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleRegisterInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleRegisterInputChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default LoginPage;
