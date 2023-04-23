import React, { useState } from "react";
import "./index.css";
import InputBox from "./InputBox";

const Calculator = () => {
  const [formValues, setFormValues] = useState({
    kg: "",
    ft: "",
    inches: "",
  });

  const [bmi, setBmi] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();
    const { inches, kg, ft } = formValues;
    const heighInMeters = ft * 0.3048 + inches * 0.0254;
    const result = kg / Math.pow(heighInMeters, 2);
    setBmi(result);
  };

  const clearForm = () => {
    setBmi("");
    setFormValues({
      inches: "",
      ft: "",
      kg: "",
    });
  };

  return (
    <div className="calculator">
      <div className="header">Calculate Your BMI</div>
      <div className="formWrapper">
        <form>
          <div className="weightWrapper">
            <strong className="formLabel">Weight</strong>{" "}
            <InputBox
              placeholder="kg"
              setValue={setFormValues}
              value={formValues.kg}
              id="kg"
            />
          </div>
          <div className="heightWrapper">
            <strong className="formLabel">Height</strong>
            <InputBox
              placeholder="ft"
              setValue={setFormValues}
              value={formValues.ft}
              id="ft"
            />
            <InputBox
              placeholder="inches"
              setValue={setFormValues}
              value={formValues.inches}
              id="inches"
            />
          </div>
          <div className="btnWrapper">
            <button type="submit" className="clearBtn" onClick={clearForm}>
              Reset
            </button>
            <button type="submit" className="submitBtn" onClick={calculateBmi}>
              Calculate BMI
            </button>
          </div>
          {bmi && <div className="result">Your BMI is : {bmi}</div>}
        </form>
      </div>
    </div>
  );
};

export default Calculator;
