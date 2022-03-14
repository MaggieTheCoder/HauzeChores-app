import axios from "axios";

const getHouseScores = async (houseid, setScores) => {
  const result = await axios.get(
    `http://localhost:4000/query/scoreboard/?houseID=${houseid}`
  );
  const allScores = result.data;
  console.log(allScores);
  const sortedScores = allScores.sort((a, b) => {
    return b.score - a.score;
  });
  console.log(sortedScores);
  setScores(sortedScores);
};

export default getHouseScores;
