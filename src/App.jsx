import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

let App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem("count")) || 0;
    setCount(oldCount);
  }, []);

  let countDecrement = () => {
    let newCount = count - 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  let counterIncremnet = () => {
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", JSON.stringify(newCount));
  };

  let reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <div className="counter">
          <button onClick={countDecrement}>-</button>
          <p className="count-size">Count is: {count}</p>
          <button onClick={counterIncremnet}>+</button>
        </div>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
