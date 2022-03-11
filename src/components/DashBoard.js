import React from "react";
import propTypes from "prop-types";
// import AddHouse from "./AddHouse";
import AddTask from "./AddTask";
import AddTeam from "./AddTeam";
import LeaderBoard from "./LeaderBoard";
import Tabs from "./Tabs";
import "../styles/Dashboard.css";

const DashBoard = ({ houseId }) => {
  return (
    <div className="dashboard">
      {houseId}
      {/* <AddHouse /> */}
      <AddTask />
      <AddTeam />
      <Tabs />
      <LeaderBoard />
    </div>
  );
};

export default DashBoard;

DashBoard.propTypes = {
  houseId: propTypes.number.isRequired,
};
