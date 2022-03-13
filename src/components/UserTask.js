import React from "react";
import propTypes from "prop-types";
import completeATask from "../requests/completeATask";
import "../styles/UserTask.css";

const UserTask = ({ taskname, id, userId }) => {
  return (
    <div className="usertask">
      <button
        className="usertask__button"
        type="button"
        onClick={() => {
          completeATask(id, userId);
        }}
      >
        Done!
      </button>
      <p className="usertask__name">{taskname}</p>
    </div>
  );
};

export default UserTask;

UserTask.propTypes = {
  taskname: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  userId: propTypes.string.isRequired,
};
