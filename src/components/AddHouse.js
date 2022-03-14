/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import propTypes from "prop-types";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import postNewHouse from "../requests/postNewHouse";
import setNewUserDetails from "../requests/setNewUserDetails";
import "../styles/AddHouse.css";

const AddHouse = ({ setHouseId, houseId, user, setCode, setUserId }) => {
  const [name, setName] = useState();
  const [visibleItem, setVisibleItem] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  const [randomStr, setRandomStr] = useState("");

  const handleAddHouse = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async () => {
    const randomString = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    });
    console.log({
      house: name,
      uniqueCode: randomString,
    });
    postNewHouse(name, randomString);
    setInviteCode(randomString);
    setVisibleItem(true);
    setRandomStr(randomString);
    setCode(randomStr);
  };

  const handleHouseIDChange = () => {
    setNewUserDetails(inviteCode, setHouseId, user.email, setUserId, setCode);
  };
  return (
    <div className="add-house">
      <form onSubmit={handleAddHouse} className="Addhouse__house">
        <input
          className="input-house__name"
          type="text"
          placeholder="type house name"
          onChange={handleAddHouse}
        />
        <button
          className="create_button"
          type="button"
          onClick={() => handleSubmit()}
        >
          CREATE
        </button>
        {visibleItem && <p>Your unique code is `{randomStr}`</p>}

        <br />
        <input
          className="input-invitation__code"
          type="text"
          placeholder="use invitation code"
        />
        <button className="find_button" type="button">
          FIND and JOIN
        </button>
      </form>
      <button
        className="next_button"
        type="button"
        onClick={() => {
          handleHouseIDChange();
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default AddHouse;

AddHouse.propTypes = {
  setHouseId: propTypes.func.isRequired,
  setUserId: propTypes.func.isRequired,
  user: propTypes.shape().isRequired,
  houseId: propTypes.number.isRequired,
  setCode: propTypes.func.isRequired,
};
