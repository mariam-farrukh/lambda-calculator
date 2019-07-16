import React, {useState} from "react";

//import any components needed

import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  // const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className = "operator-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       props.operators.map(a => {
         return <OperatorButton key={a.char} optionText={a.char} handleButtonPress={props.handleButtonPress.value}/>
       })}
    </div>
  );
};
export default Operators;
