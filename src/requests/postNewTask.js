import axios from "axios";

const postNewTask = (task, houseId, setAddedANewTask) => {
  axios
    .post("http://localhost:4000/tasks", { taskname: task, houseID: houseId })
    .then((res) => {
      console.log("POSTING TASK!", res);
      setAddedANewTask((prev) => prev + 1);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default postNewTask;
