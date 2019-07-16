import React from "react";

const NumberButton = () => {
  return (
    <button className="btn number-btn">
      {props.optionText}
    </button>
  );
};

export default NumberButton;