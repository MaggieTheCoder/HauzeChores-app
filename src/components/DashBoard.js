import React from "react";
// import AddHouse from "./AddHouse";
import AddTask from "./AddTask";
import AddTeam from "./AddTeam";
import LeaderBoard from "./LeaderBoard";
import Tabs from "./Tabs";
import "../styles/Dashboard.css";

const DashBoard = () => {
  return (
    <div className="dashboard">
      {/* <AddHouse /> */}
      <AddTask />
      <AddTeam />
      <Tabs />
      <LeaderBoard />
    </div>
  );
};

export default DashBoard;
