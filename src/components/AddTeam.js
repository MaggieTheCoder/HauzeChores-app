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
    <div className="add-team">
      <form>
        Invite
        <input
          className="input__box"
          type="text"
          placeholder="email"
          onChange={handleAddMember}
        />
        <button type="button" onClick={() => handleSubmit()}>
          Send
        </button>
      </form>
    </div>
  );
};

export default AddTeam;
