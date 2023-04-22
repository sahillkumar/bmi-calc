import React, { useState } from "react";
import "./index.css";

const InputBox = ({ placeholder, value, setValue, id }) => {
  const handleChange = ({ target: { value } }) => {
    setValue((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="input-container">
      <input
        type="text"
        id="inputBox"
        name="inputBox"
        value={value}
        aria-labelledby="label-inputBox"
        onChange={handleChange}
      />
      <label className="label" htmlFor="inputBox" id="label-inputBox">
        <div className="text">{placeholder}</div>
      </label>
    </div>
  );
};

export default InputBox;
