import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.initVal);

  function handleDecrease() {
    if (count >= -365) {
      setCount((c) => c - 1);
      props.onChange(count);
      console.log("handle decrease " + (count - 1));
    }
  }

  function handleIncrease() {
    if (count <= 365) {
      setCount((c) => c + 1);
      props.onChange(count);
      console.log("handle Increase " + (count + 1));
    }
  }

  return (
    <div>
      <button className="App-button" onClick={handleDecrease}>
        -
      </button>
      {props.text} : {count}
      <button className="App-button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

function App() {
  var step = 1;
  var count = 0;

  // Note: thes are vanilla javascript functions, not
  //       react components, therefore parameter c is
  //       simply the number, not a 'props' object
  function onStepChanged(c) {
    step = c;
    console.log("onStepChanged: " + step);
  }

  function onCountChanged(c) {
    count = c;
    console.log("onCountChanged: " + c);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <Counter text="Step" initVal={step} onChange={onStepChanged} />
        <Counter text="Count" initVal={count} onChange={onCountChanged} />
      </header>
    </div>
  );
}

export default App;
