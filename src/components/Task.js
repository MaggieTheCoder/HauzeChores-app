import React from "react";
import propTypes from "prop-types";
import deleteTaskById from "../requests/deleteTaskById";
import assignTaskToUser from "../requests/assignTaskToUser";

const Task = ({ taskname, id, setAddedANewTask, userId }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          assignTaskToUser(userId, id, setAddedANewTask);
        }}
      >
        {taskname}
      </button>
      <button
        type="button"
        onClick={() => deleteTaskById(id, setAddedANewTask)}
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
  userId: propTypes.string.isRequired,
};
