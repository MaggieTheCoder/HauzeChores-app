/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import LoginPage from "./LoginPage";
import "../styles/App.css";
import DashBoard from "./DashBoard";
import NavBar from "./NavBar";
import AddHouse from "./AddHouse";

const App = () => {
  const [user, setUser] = useState({});
  const [houseId, setHouseId] = useState(0);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <NavBar user={user} logOut={logOut} />
      {!user && <LoginPage setUser={setUser} setHouseId={setHouseId} />}
      {user && !houseId && <AddHouse />}
      {user && houseId && <DashBoard />}
    </div>
  );
};

export default App;
