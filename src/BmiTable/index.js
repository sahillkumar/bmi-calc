import React from "react";
import bmiImage from "../bmiTable.jpg";
import "./index.css";

const BmiTable = () => {
  return (
    <div className="bmiTable">
      <div className="imgWrapper">
        <img src={bmiImage} alt="bmiTable" />
      </div>
    </div>
  );
};

export default BmiTable;
