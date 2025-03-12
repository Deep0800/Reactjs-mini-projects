import "./index.css";

import React, { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");

  const handleIncrement = () => {
    setCounter(counter + 1);
    setError("");
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setError("You can not go negative");
    }
  };

  return (
    <div className="container">
      <h1>Counter</h1>

      <div>
        <span>{counter}</span>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="buttons">
        <button className="increment" onClick={handleIncrement}>+</button>
        <button className="decrement" onClick={handleDecrement}>-</button>
        <button
          onClick={() => {
            setCounter(0);
            setError("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
