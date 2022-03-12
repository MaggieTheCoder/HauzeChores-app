import axios from "axios";

const getAllUserTasks = (userId, setUserTasks) => {
  axios
    .get(`http://localhost:4000/query/tasks/?userID=${userId}`)
    .then((res) => {
      console.log(res.data);
      setUserTasks(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getAllUserTasks;
