import React from "react";

const OperatorButton = () => {
  return (
    <button className = "btn operator-btn">
      {props.optionText}
    </button>
  );
};

export default OperatorButton;