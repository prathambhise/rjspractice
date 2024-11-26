import React, { useState } from "react";
import "./Counter.css"

function Counter() {
  const [count, setCount] = useState(0);

  const countAdd = () => {
    setCount(count + 1);
  };
  const countSub = () => {
    setCount(count - 1);
  };
  const countReset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={countAdd}>
          Add
        </button>
        <button className="counter-button" onClick={countReset}>
          Reset
        </button>
        <button className="counter-button" onClick={countSub}>
          Sub
        </button>
      </div>
    </>
  );
}

export default Counter;
