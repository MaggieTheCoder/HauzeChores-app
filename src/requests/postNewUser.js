import axios from "axios";

const postNewUser = (userEmail) => {
  console.log("posting....");
  axios
    .post("http://localhost:4000/users", { email: userEmail })
    .then((res) => {
      console.log("POSTED", res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postNewUser;
