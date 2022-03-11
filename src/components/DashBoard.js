import React from "react";
import propTypes from "prop-types";
// import AddHouse from "./AddHouse";
import AddTask from "./AddTask";
import AddTeam from "./AddTeam";
import LeaderBoard from "./LeaderBoard";
import Tabs from "./Tabs";
import "../styles/Dashboard.css";

const DashBoard = ({ houseId, userId }) => {
  return (
    <div className="dashboard">
      <p>user: {userId}</p>
      <p>house: {houseId}</p>
      {/* <AddHouse /> */}
      <AddTask houseId={houseId} userId={userId} />
      <AddTeam />
      <Tabs />
      <LeaderBoard />
    </div>
  );
};

export default DashBoard;

DashBoard.propTypes = {
  houseId: propTypes.number.isRequired,
  userId: propTypes.number.isRequired,
};
