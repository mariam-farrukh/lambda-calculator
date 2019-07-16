import React, {useState} from "react";

//import any components needed

import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state

  return (
    <div className = "number-container">
      { props.numbers.map(a => {
        return <NumberButton key={a} optionText={a} handleButtonPress={props.handleButtonPress} count={props.count} setCount={props.setCount}/>
        })
      }
    </div>
  );
};

export default Numbers;
