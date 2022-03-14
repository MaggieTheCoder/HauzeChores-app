import React from "react";
import propTypes from "prop-types";
import deleteTaskById from "../requests/deleteTaskById";
import assignTaskToUser from "../requests/assignTaskToUser";
import "../styles/Task.css";

const Task = ({ taskname, id, setAddedANewTask, userId }) => {
  return (
    <div className="task">
      <button
        type="button"
        className="task__button"
        onClick={() => {
          assignTaskToUser(userId, id, setAddedANewTask);
        }}
      >
        Take it!
      </button>
      <p className="task__name">{taskname}</p>
      <button
        type="button"
        onClick={() => deleteTaskById(id, setAddedANewTask)}
        className="task__button"
      >
        X
      </button>
    </div>
  );
};

export default Task;

Task.propTypes = {
  taskname: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  setAddedANewTask: propTypes.func.isRequired,
  userId: propTypes.number.isRequired,
};
