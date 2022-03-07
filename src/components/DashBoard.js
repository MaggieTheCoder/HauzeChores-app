import React from "react";
import AddTask from "./AddTask";
import AddTeam from "./AddTeam";
import LeaderBoard from "./LeaderBoard";

const DashBoard = () => {
  return (
    <div>
      <AddTask />
      <AddTeam />
      <LeaderBoard />
    </div>
  );
};

export default DashBoard;
