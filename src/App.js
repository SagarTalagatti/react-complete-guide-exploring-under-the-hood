import React, { useState, useCallback } from "react";
//useCallback hook allows us to store a function across component executions, so that the function is not re-created everytime the component is re-evaluated.
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  //this toggleParaHandler function is newly created every time App component is re-evaluated because its just normal JS code after all. Hence, even if we wrapped Button component in React.memo(), it still behaves the same as before, because everytime, a new function that does the same original task is passed to it and hence there is a change in props. This is because functions are objects in JS.
  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]); // useCallback also needs a second param, an array of dependencies just like useEffect.

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParaHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
