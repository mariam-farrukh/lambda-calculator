import React, {useState} from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Display from "../src/components/DisplayComponents/Display.js"
import {numbers, operators, specials} from "../src/data.js"
import Numbers from "../src/components/ButtonComponents/NumberButtons/Numbers.js"
import Operators from "../src/components/ButtonComponents/OperatorButtons/Operators.js"
import Specials from "../src/components/ButtonComponents/SpecialButtons/Specials.js"
// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [count, setCount] = useState(0);
  const handleButtonPress = (buttonValue) => {
    console.log(buttonValue);
    setCount(count + buttonValue);
  }


  return (
    <div className="container">
      <div className="App">
        <Logo />
        <Display
          count={count}
          setCount={setCount}
        />
        <div className = "btn-container">
          <Specials 
            specials={specials}
            count={count}
            setCount={setCount}
            handleButtonPress = {handleButtonPress}
          />
          <Numbers
              numbers={numbers}
              handleButtonPress={handleButtonPress}
            />
        </div>
        <div className = "btn-container-operators">
          <Operators
              operators={operators}
              handleButtonPress={handleButtonPress}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
