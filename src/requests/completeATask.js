/* eslint-disable no-unused-vars */
import axios from "axios";
import confetti from "canvas-confetti";

const completeATask = async (taskId, userId, setAddedANewTask) => {
  confetti({
    particleCount: 150,
  });

  const response = await axios.get(
    `http://localhost:4000/query/scoreboard/?UserID=${userId}`
  );
  const myScore = response.data[0].score;
  const updatedScore = myScore + 3;

  try {
    await axios.patch(`http://localhost:4000/scoreboard/${userId}`, {
      score: updatedScore,
    });

    await axios.delete(`http://localhost:4000/tasks/${taskId}`);
    setAddedANewTask((prev) => prev + 1);
  } catch (error) {
    console.log(error);
  }
};

// post to scoreboard using user id
// delete task from db
// confetti

export default completeATask;
