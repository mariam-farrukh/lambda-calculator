import React, {useState} from "react";

//import any components needed

import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file

import { numbers } from '../path/to/data';

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className = "number-container">
      { props.numbers.map(a => {
        return <NumberButton key={a} optionText={a} ID={a}/>
        })
      }
    </div>
  );
};

export default Numbers;
