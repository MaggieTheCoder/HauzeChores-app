import React from "react";
import propTypes from "prop-types";

const UserTask = ({ taskname }) => {
  return (
    <div>
      <button type="button">{taskname}</button>
    </div>
  );
};

export default UserTask;

UserTask.propTypes = {
  taskname: propTypes.string.isRequired,
};
