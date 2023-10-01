import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// SpinButton Component
//
// Parameters
// props.val = current value of item
// props.onChange = plain javascript function to call when changing item
//                  (parameter = stepSize)
// props.stepSize = integer value how much to change component on increment/decremanet
function Counter(props) {
  function handleDecrease() {
    if (props.val >= -365) {
      props.onChange(-1 * props.stepSize);
    }
  }

  function handleIncrease() {
    if (props.val <= 365) {
      props.onChange(+1 * props.stepSize);
    }
  }

  return (
    <div>
      <button className="App-button" onClick={handleDecrease}>
        -
      </button>
      {props.text} : {props.val}
      <button className="App-button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // Note: these callbacks are vanilla javascript functions,
  //       not react components, therefore parameter is
  //       simply the number, not a 'props' object
  function onStepChanged(valueToAdd) {
    setStep((s) => s + valueToAdd);
    console.log("onStepChanged " + step);
  }

  function onCountChanged(valueToAdd) {
    setCount((c) => c + valueToAdd);
    console.log("onCountChanged: " + count);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <Counter text="Step" val={step} onChange={onStepChanged} stepSize={1} />
        <Counter
          text="Count"
          val={count}
          onChange={onCountChanged}
          stepSize={step}
        />
      </header>
    </div>
  );
}

export default App;
