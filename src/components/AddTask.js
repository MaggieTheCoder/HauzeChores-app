import { React, useState } from "react";

const AddTask = () => {
  const [fields, setFields] = useState();

  const handleAddTask = (event) => {
    event.preventDefault();
  };
  const handleFieldChange = (event) => {
    setFields(event.target.value);
    console.log(fields);
  };

  return (
    <div className="add-task">
      <form className="task-list" onSubmit={handleAddTask}>
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
          </select>
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
