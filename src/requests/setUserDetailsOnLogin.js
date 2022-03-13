import axios from "axios";

const setUserDetailsOnLogin = async (email, setHouseId, setUserId, setCode) => {
  const res = await axios.get(
    `http://localhost:4000/query/users/?email=${email}`
  );
  console.log(res);
  setHouseId(res.data.houseID);
  setUserId(res.data.id);
  const houseData = await axios.get(
    `http://localhost:4000/houses/${res.data.houseID}`
  );
  const { inviteCode } = houseData.data;
  setCode(inviteCode);
};

export default setUserDetailsOnLogin;
