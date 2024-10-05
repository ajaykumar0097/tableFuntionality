import React, { useState } from 'react';
import Navbar from './Navbar';

export function UseCallBackCounter() {
  // Declare a state variable 'count' with a default value of 0
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

  // Function to handle increment
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to handle reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <Navbar adjective={adjective}/>
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>
        <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
      </div>
    </div>
  );
}


