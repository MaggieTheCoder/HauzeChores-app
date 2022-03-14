/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import propTypes from "prop-types";
import "../styles/AddTask.css";
import postNewTask from "../requests/postNewTask";

const AddTask = ({ houseId, userId, setAddedANewTask }) => {
  const [task, setTask] = useState("Empty Dishwasher");
  const [custom, setCustom] = useState(false);

  const handleAddTask = async (event) => {
    event.preventDefault();
    await postNewTask(task, houseId);
    setAddedANewTask((prev) => prev + 1);
  };
  const handleFieldChange = (event) => {
    console.log("**", event.target.value);
    if (event.target.value === "custom") {
      setCustom(true);
    } else {
      setCustom(false);
      setTask(event.target.value);
    }
  };
  const handleInput = (event) => {
    // console.log(event.target.value, fields);
    setTask(event.target.value);
  };

  return (
    <>
      <div className="add-task">
        <form className="task__list">
          <label htmlFor="type">
            Task
            <select
              id="type"
              name="type"
              value={task}
              onChange={handleFieldChange}
            >
              <option value="Empty Dishwasher">Empty Dishwasher</option>
              <option value="Hoover living room">Hoover living room</option>
              <option value="Water the plants">Water the plants</option>
              <option value="custom">Add your own</option>
            </select>
          </label>

          {!custom && (
            <button
              type="button"
              onClick={() => postNewTask(task, houseId, setAddedANewTask)}
            >
              Add
            </button>
          )}
        </form>
      </div>
      {custom && (
        <div className="custom-task">
          <form onSubmit={handleAddTask}>
            <input type="text" onChange={handleInput} placeholder="add task" />
            <button
              type="button"
              onClick={() => postNewTask(task, houseId, setAddedANewTask)}
            >
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTask;

AddTask.propTypes = {
  houseId: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
  setAddedANewTask: propTypes.bool.isRequired,
};
