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
import getHouseByInviteCode from "../requests/getHouseByInviteCode";

const AddHouse = ({ setHouseId, houseId, user }) => {
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
  };

  const handleHouseIDChange = () => {
    getHouseByInviteCode(inviteCode, setHouseId, user.email);
  };
  return (
    <div className="add-house">
      {houseId}
      <form onSubmit={handleAddHouse}>
        <input
          className="input-house__name"
          type="text"
          placeholder="type house name"
          onChange={handleAddHouse}
        />
        <button type="button" onClick={() => handleSubmit()}>
          create
        </button>
        {visibleItem && <p>Your unique code is `{randomStr}`</p>}

        <br />
        <input
          className="input-invitation__code"
          type="text"
          placeholder="use invitation code"
        />
        <button type="button">find and join</button>
      </form>
      <button
        type="button"
        onClick={() => {
          handleHouseIDChange();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default AddHouse;

AddHouse.propTypes = {
  setHouseId: propTypes.func.isRequired,
  user: propTypes.shape().isRequired,
  houseId: propTypes.number.isRequired,
};
