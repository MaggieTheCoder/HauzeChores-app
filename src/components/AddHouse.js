import React, { useState } from "react";

const AddHouse = () => {
  const [name, setName] = useState();

  const handleAddHouse = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    console.log(name);
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
