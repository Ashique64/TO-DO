import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    const trimmedValue = value.trim();
    if (trimmedValue !== '' && isNaN(trimmedValue)) {
      addTask(trimmedValue);
      setValue("");
    }
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Add a New Task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={addItem} className="add-button">
          ADD
        </button>
      </div>
    </>
  );
};

export default AddTask;
