import React, { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import LoginPage from "./LoginPage";
import "../styles/App.css";
import DashBoard from "./DashBoard";
import NavBar from "./NavBar";

const App = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <NavBar user={user} logOut={logOut} />
      <header className="App-header">
        <h1>Houze</h1>
        <h3>Just get it done!</h3>
      </header>
      {!user ? <LoginPage setUser={setUser} /> : <DashBoard />}
    </div>
  );
};

export default App;
