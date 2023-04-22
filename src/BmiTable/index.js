import React from "react";
import bmiImage from "../bmiTable.jpg";
import "./index.css";

const BmiTable = () => {
  return (
    <div className="bmiTable">
      <img src={bmiImage} alt="bmiTable" />
    </div>
  );
};

export default BmiTable;
