import React, { useEffect, useReducer, useRef, useState } from "react";

export function UseRef() {
  // Declare a state variable 'count' with a default value of 0
  //   const [count, setCount] = useState(0);

  const [count, setCount] = useState(0);

  // const a = useRef(0);
  // console.log("a", a.current);

  const ref=useRef()
  console.log("ref",ref.current.value);
  

  useEffect(() => {
    // a.current = a.current + 1;
    console.log("Rerendering..........");
  });

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>
      <h2>{count}</h2>
      <div>
        <button ref={ref} onClick={increment}>Increment</button>
        <button onClick={decrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>
        <button onClick={reset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}
