import axios from "axios";

const searchAndJoin = async (inviteCode, setInviteCode) => {
  const searchedHouse = await axios.get(
    `http://localhost:4000/houses/invitecode/${inviteCode}`
  );

  if (searchedHouse) {
    console.log("can join this house", searchedHouse);
    setInviteCode(inviteCode);
  } else {
    console.log("no such house, try again!");
  }
};

export default searchAndJoin;

// set houseId
