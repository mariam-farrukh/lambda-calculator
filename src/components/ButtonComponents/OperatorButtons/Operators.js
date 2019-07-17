import React, {useState} from "react";

//import any components needed

import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  // const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className = "operator-container">
      {props.operators.map(a => {
         return <OperatorButton key={a.char} testprop={a.value} optionText={a.char} handleButtonPress={props.handleButtonPress}/>
       })}
    </div>
  );
};
export default Operators;
