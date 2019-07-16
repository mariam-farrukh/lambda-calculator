import React from "react";

const SpecialButton = (props) => {
  return (
    <button className = "btn special-btn">
      {props.optionText}
    </button>
  );
};

export default SpecialButton
