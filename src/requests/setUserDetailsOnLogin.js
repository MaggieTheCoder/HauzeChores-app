import axios from "axios";

const setUserDetailsOnLogin = (email, setHouseId, setUserId) => {
  axios
    .get(`http://localhost:4000/query/users/?email=${email}`)
    .then((res) => {
      console.log(res);
      setHouseId(res.data.houseID);
      setUserId(res.data.id);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default setUserDetailsOnLogin;
