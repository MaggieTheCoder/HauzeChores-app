/* eslint-disable no-unused-vars */
import axios from "axios";

// const getHouseByInviteCode = (inviteCode, setHouseId, email, houseId) => {
//   axios
//     .get(`http://localhost:4000/houses/invitecode/${inviteCode}`)
//     .then((res) => {
//       console.log(res);
//       setHouseId(res.data.id);
//     })
//     .then(
//       axios
//         .patch(`http://localhost:4000/users/email/${email}`, {
//           houseid: houseId,
//         })
//         .then((res) => {
//           console.log(res);
//         })
//     )
//     .catch((error) => {
//       console.log(error);
//     });
// };

const getHouseByInviteCode = async (inviteCode, setHouseId, email) => {
  const response = await axios.get(
    `http://localhost:4000/houses/invitecode/${inviteCode}`
  );
  console.log(response);
  const { id } = response.data;
  try {
    console.log(id);
    setHouseId(response.data.id);
    await axios.patch(`http://localhost:4000/query/users/?email=${email}`, {
      houseid: response.data.id,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getHouseByInviteCode;
