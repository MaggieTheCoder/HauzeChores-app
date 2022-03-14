/* eslint-disable no-unused-vars */
import axios from "axios";

const setNewUserDetails = async (
  inviteCode,
  setHouseId,
  email,
  setUserID,
  setCode
) => {
  setCode(inviteCode);
  const response = await axios.get(
    `http://localhost:4000/houses/invitecode/${inviteCode}`
  );
  console.log(response);
  const { id } = response.data;
  try {
    console.log(id);
    setHouseId(response.data.id);

    const userData = await axios.get(
      `http://localhost:4000/query/users/?email=${email}`
    );
    const userid = userData.data.id;
    await axios.patch(`http://localhost:4000/users/${userid}`, {
      houseid: response.data.id,
    });
    setUserID(userid);
  } catch (error) {
    console.log(error);
  }
};

export default setNewUserDetails;
