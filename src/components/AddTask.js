import { React, useState } from "react";
import "../styles/AddTask.css";

const AddTask = () => {
  const [fields, setFields] = useState();
  const [custom, setCustom] = useState(false);

  const handleAddTask = (event) => {
    event.preventDefault();
    // console.log("****", fields);
  };
  const handleFieldChange = (event) => {
    console.log("**", event.target.value);
    if (event.target.value === "custom") {
      setCustom(true);
    } else {
      setCustom(false);
      setFields(event.target.value);
    }
  };
  const handleInput = (event) => {
    // console.log(event.target.value, fields);
    setFields(event.target.value);
  };

  return (
    <>
      <div className="add-task">
        <form className="task__list" onSubmit={handleAddTask}>
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields}
              onChange={handleFieldChange}
            >
              <option value="Empty Dishwasher">Empty Dishwasher</option>
              <option value="Hoover living room">Hoover living room</option>
              <option value="Water the plants">Water the plants</option>
              <option value="custom">Add your own</option>
            </select>
          </label>

          {!custom && <button type="submit">Add Task</button>}
        </form>
      </div>
      {custom && (
        <div className="custom-task">
          <form onSubmit={handleAddTask}>
            <input type="text" onChange={handleInput} placeholder="add task" />
            <button type="submit">Add Task</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTask;
