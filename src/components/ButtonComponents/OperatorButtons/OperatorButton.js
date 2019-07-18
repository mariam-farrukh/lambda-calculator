import React from "react";

const OperatorButton = (props) => {
  const value = props.testprop
  return (
    <button className = "btn operator-btn" id={"value" + props.optionText} onClick={() => {props.handleButtonPress(value)}}>
      {props.optionText}
    </button>
  );
};

export default OperatorButton;