/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
// import AddHouse from "./AddHouse";
import AddTask from "./AddTask";
import AddTeam from "./AddTeam";

import Tabs from "./Tabs";
import "../styles/Dashboard.css";
import getAllHouseTasks from "../requests/getAllHouseTasks";
import getAllUserTasks from "../requests/getAllUserTasks";

const DashBoard = ({ houseId, userId }) => {
  const [houseTasks, setHouseTasks] = useState([]);
  const [userTasks, setUserTasks] = useState([]);
  const [addedANewTask, setAddedANewTask] = useState(1);
  useEffect(() => {
    console.log("page renderig", addedANewTask);
    getAllHouseTasks(houseId, setHouseTasks);
    getAllUserTasks(userId, setUserTasks);
  }, [addedANewTask]);
  return (
    <div className="dashboard">
      <p>user: {userId}</p>
      <p>house: {houseId}</p>
      <p>new task: {addedANewTask}</p>
      {/* <AddHouse /> */}
      <AddTask
        houseId={houseId}
        userId={userId}
        setAddedANewTask={setAddedANewTask}
      />
      <AddTeam />
      <Tabs
        houseTasks={houseTasks}
        userTasks={userTasks}
        setAddedANewTask={setAddedANewTask}
        userId={userId}
      />
    </div>
  );
};

export default DashBoard;

DashBoard.propTypes = {
  houseId: propTypes.number.isRequired,
  userId: propTypes.number.isRequired,
};
