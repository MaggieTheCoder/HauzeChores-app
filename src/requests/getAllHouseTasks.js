/* eslint-disable no-unused-vars */
import axios from "axios";

const getAllHouseTasks = async (
  houseId,
  setHouseTasks,
  userId,
  setUserTasks
) => {
  const result = await axios.get(
    `http://localhost:4000/query/tasks/?houseID=${houseId}`
  );
  console.log(result);
  const filteredHouse = result.data.filter((task) => {
    return !task.userID;
  });
  console.log(filteredHouse);
  setHouseTasks(filteredHouse);
  const filteredUser = result.data.filter((task) => {
    return task.userID === userId;
  });
  console.log(filteredUser, userId);
};

export default getAllHouseTasks;
