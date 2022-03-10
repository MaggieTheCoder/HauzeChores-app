import axios from "axios";

const getHouseId = (email, setHouseId) => {
  axios
    .get(`http://localhost:4000/users/email/${email}`)
    .then((res) => {
      console.log(res);
      setHouseId(res.data.houseId);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getHouseId;
