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
import getHouseScores from "../requests/getHouseScores";

const DashBoard = ({ houseId, userId, setUserId }) => {
  const [houseTasks, setHouseTasks] = useState([]);
  const [userTasks, setUserTasks] = useState([]);
  const [addedANewTask, setAddedANewTask] = useState(1);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    console.log("page rendering", addedANewTask);
    getAllHouseTasks(houseId, setHouseTasks, userId, setUserTasks);
    getAllUserTasks(userId, setUserTasks);
    getHouseScores(houseId, setScores);
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
        scores={scores}
      />
    </div>
  );
};

export default DashBoard;

DashBoard.propTypes = {
  houseId: propTypes.number.isRequired,
  userId: propTypes.number.isRequired,
  setUserId: propTypes.func.isRequired,
};
