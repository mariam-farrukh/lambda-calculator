import React from "react";

const Display = (props) => {
  return <div className = "output">
    <h3 className = "output-info"></h3>
    {props.count}
  </div>;
};

export default Display;
