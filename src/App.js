import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset=()=>{
    setCount(0);
  }

  return (
    <div className="counter-container">
      <p className="counter-text">Number: {count}</p>
      <button className="counter-button" onClick={increment}>Increment</button>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
