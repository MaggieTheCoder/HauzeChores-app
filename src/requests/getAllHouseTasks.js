import axios from "axios";

const getAllHouseTasks = async (houseId, setHouseTasks) => {
  const result = await axios.get(
    `http://localhost:4000/query/tasks/?houseID=${houseId}`
  );
  console.log(result);
  const filtered = result.data.filter((task) => {
    return !task.userID;
  });
  console.log(filtered);
  setHouseTasks(filtered);
};

export default getAllHouseTasks;
