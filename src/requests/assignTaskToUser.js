/* eslint-disable no-unused-vars */
import axios from "axios";

const assignTaskToUser = (userId, taskId, setAddedANewTask) => {
  console.log(`assigning task ${taskId} to user ${userId}`);
  axios
    .patch(`http://localhost:4000/tasks/${taskId}`, { userID: userId })
    .then((res) => {
      console.log("success!", res);
      setAddedANewTask((prev) => prev + 1);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default assignTaskToUser;
