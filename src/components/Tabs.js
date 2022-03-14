/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import propTypes from "prop-types";
import "../styles/Tabs.css";
import Task from "./Task";
import UserTask from "./UserTask";

const Tabs = ({ houseTasks, setAddedANewTask, userId, userTasks, scores }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => {
    setActiveIndex(index);
    console.log("button clicked", index);
    setAddedANewTask((prev) => prev + 1);
  };

  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <div className="tabs">
        <button
          type="button"
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          All Tasks{" "}
        </button>
        <button
          type="button"
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          My Tasks{" "}
        </button>
        <button
          type="button"
          className={`tab ${checkActive(3, "active")}`}
          onClick={() => handleClick(3)}
        >
          Leaderboard{" "}
        </button>
      </div>
      {activeIndex === 1 && (
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            {houseTasks.map((task) => {
              return (
                <Task
                  taskname={task.taskname}
                  key={task.id}
                  id={parseInt(task.id, 10)}
                  setAddedANewTask={setAddedANewTask}
                  userId={userId}
                />
              );
            })}
          </div>
        </div>
      )}

      {activeIndex === 2 && (
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            {userTasks.map((task) => {
              return (
                <UserTask
                  taskname={task.taskname}
                  id={task.id}
                  key={task.id}
                  userId={userId}
                  setAddedANewTask={setAddedANewTask}
                />
              );
            })}
          </div>
        </div>
      )}

      {activeIndex === 3 && (
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            {scores.map((score) => {
              return (
                <div>
                  Name: {score.username} score: {score.score}{" "}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Tabs;

Tabs.propTypes = {
  houseTasks: propTypes.instanceOf(Array).isRequired,
  userTasks: propTypes.instanceOf(Array).isRequired,
  scores: propTypes.instanceOf(Array).isRequired,
  setAddedANewTask: propTypes.func.isRequired,
  userId: propTypes.string.isRequired,
};
