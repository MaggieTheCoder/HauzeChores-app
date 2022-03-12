import axios from "axios";

const deleteTaskById = (id, setAddedANewTask) => {
  axios
    .delete(`http://localhost:4000/tasks/${id}`)
    .then((res) => {
      console.log("deleted", id, res);
      setAddedANewTask((prev) => prev + 1);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default deleteTaskById;
