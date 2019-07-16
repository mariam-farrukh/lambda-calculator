import React from "react";

const NumberButton = (props) => {
  const num = parseInt(props.optionText)
  return (
    <button className="btn number-btn" id={"num" + props.optionText} onClick={() => {props.handleButtonPress(num)}}>
      {props.optionText}
    </button>
  );
};

export default NumberButton;