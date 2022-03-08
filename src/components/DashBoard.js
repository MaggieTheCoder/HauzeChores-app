import React from "react";
import AddTask from "./AddTask";
import AddTeam from "./AddTeam";
import LeaderBoard from "./LeaderBoard";
import Tabs from "./Tabs";

const DashBoard = () => {
  return (
    <div>
      <AddTask />
      <AddTeam />
      <Tabs />
      <LeaderBoard />
    </div>
  );
};

export default DashBoard;
