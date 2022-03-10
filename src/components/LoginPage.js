import React, { useState } from "react";
import propTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import "../styles/LoginPage.css";
import postNewUser from "../requests/postNewUser";
import Header from "./Header";
import Footer from "./Footer";
import getHouseId from "../requests/getHouseId";

const LoginPage = ({ setUser, setHouseId }) => {
  const [signInDetails, setSignInDetails] = useState();
  const [registerDetails, setRegisterDetails] = useState();
  const [errorMessage, setErrorMessage] = useState();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const handleSignInInputChange = (e) => {
    setSignInDetails({ ...signInDetails, [e.target.name]: e.target.value });
  };

  const signIn = async (e) => {
    e.preventDefault();
    console.log(signInDetails);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signInDetails.email,
        signInDetails.password
      );
      console.log(user);
      getHouseId(signInDetails.email, setHouseId);
      e.target.reset();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const handleRegisterInputChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(registerDetails);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerDetails.email,
        registerDetails.password
      );
      console.log(user);
      postNewUser(registerDetails.email);
      e.target.reset();
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      <Header />
      <div className="Login">
        <form onSubmit={signIn} className="Login__login">
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleSignInInputChange}
            data-testid="login-email"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleSignInInputChange}
            data-testid="login-password"
          />
          <button type="submit" className="Login__button">
            Login
          </button>
        </form>
        <hr />
        <form onSubmit={register} className="Login__register">
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleRegisterInputChange}
            data-testid="register-email"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleRegisterInputChange}
            data-testid="register-password"
          />
          <button type="submit" className="Login__button">
            Register
          </button>
        </form>
        {errorMessage && <p>Error! {errorMessage}</p>}
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;

LoginPage.propTypes = {
  setUser: propTypes.func.isRequired,
  setHouseId: propTypes.func.isRequired,
};
