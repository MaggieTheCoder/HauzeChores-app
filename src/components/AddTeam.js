import { React, useState } from "react";
import "../styles/AddTeam.css";

const AddTeam = () => {
  const [name, setName] = useState();

  const handleAddMember = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <div className="add__team">
      <form>
        <h3> Add team mate</h3>
        <input
          className="input__box"
          type="text"
          placeholder="type name"
          onChange={handleAddMember}
        />
        <button type="button" onClick={() => handleSubmit()}>
          Add team mate
        </button>
      </form>
    </div>
  );
};

export default AddTeam;
