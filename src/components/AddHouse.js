import React, { useState } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const AddHouse = () => {
  const [name, setName] = useState();
  const [visibleItem, setVisibleItem] = useState(false);
  const [randomStr, setRandomStr] = useState("");

  const handleAddHouse = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    const randomString = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    });
    console.log({
      house: name,
      uniqueCode: randomString,
    });

    setVisibleItem(true);
    setRandomStr(randomString);
  };

  return (
    <div className="add-house">
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
    </div>
  );
};

export default AddHouse;
