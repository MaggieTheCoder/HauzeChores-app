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
  const [userId, setUserId] = useState(0);
  const [inviteCode, setInviteCode] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <NavBar user={user} logOut={logOut} />
      {!user && (
        <LoginPage
          setUser={setUser}
          setHouseId={setHouseId}
          setUserId={setUserId}
        />
      )}
      {user && !houseId && (
        <AddHouse
          setHouseId={setHouseId}
          houseId={houseId}
          user={user}
          setInviteCode={setInviteCode}
        />
      )}
      {user && houseId && <DashBoard houseId={houseId} userId={userId} />}
    </div>
  );
};

export default App;
