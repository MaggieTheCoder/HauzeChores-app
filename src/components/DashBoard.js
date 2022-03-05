import React from "react";
import AddTask from "./AddTask";
import AddTeam from "./AddTeam";
import LeaderBoard from "./LeaderBoard";
import Tab from "./Tab";

const DashBoard = () => {
  return (
    <div>
      <AddTask />
      <AddTeam />
      <Tab />
      <LeaderBoard />
    </div>
  );
};

export default DashBoard;
