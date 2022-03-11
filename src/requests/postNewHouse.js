import axios from "axios";

const postNewHouse = (houseName, randomCode) => {
  axios
    .post("http://localhost:4000/houses", {
      housename: houseName,
      invitecode: randomCode,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default postNewHouse;
