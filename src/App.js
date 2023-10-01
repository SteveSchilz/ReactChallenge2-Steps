import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// Plain Javascript function to output a date
const formattedTimestamp = (now) => {
  const date = now.toISOString().split("T")[0];
  //const time = now.toTimeString().split(" ")[0];
  //return `${date} ${time}`;
  return `${date}`;
};

// Plain Javascript function to add number of days to a date
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function weekDay(day) {
  let weekDays = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  return weekDays[day];
}

// SpinButton Component
//
// Parameters
// props.val = current value of item
// props.onChange = plain javascript function to call when changing item
//                  (parameter = stepSize)
// props.stepSize = integer value how much to change component on increment/decremanet
function SpinButton(props) {
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
  var now = new Date();
  var diffDate = addDays(now, count);
  var dayNum = diffDate.getDay(); // Day of week 1-7

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
        <SpinButton
          text="Step"
          val={step}
          onChange={onStepChanged}
          stepSize={1}
        />
        <SpinButton
          text="Count"
          val={count}
          onChange={onCountChanged}
          stepSize={step}
        />
        <p>
          {count} day{dayNum !== 1 ? "s" : ""} from now is {weekDay(dayNum)},{" "}
          {formattedTimestamp(addDays(now, count))}
        </p>
      </header>
    </div>
  );
}

export default App;
