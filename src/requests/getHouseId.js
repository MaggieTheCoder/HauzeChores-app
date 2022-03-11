import axios from "axios";

const getHouseId = (email, setHouseId) => {
  axios
    .get(`http://localhost:4000/email?email=${email}`)
    .then((res) => {
      console.log(res);
      setHouseId(res.data.houseID);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getHouseId;
