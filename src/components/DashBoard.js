import React from "react";
import AddHouse from "./AddHouse";
import AddTask from "./AddTask";
import AddTeam from "./AddTeam";
import LeaderBoard from "./LeaderBoard";
import Tabs from "./Tabs";

const DashBoard = () => {
  return (
    <div>
      <AddHouse />
      <AddTask />
      <AddTeam />
      <Tabs />
      <LeaderBoard />
    </div>
  );
};

export default DashBoard;
