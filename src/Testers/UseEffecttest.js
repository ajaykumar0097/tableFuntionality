import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  console.log("ajay");
  

  useEffect(() => {
console.log("useeefect");

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

   
  
  }, []); // Empty array: Effect runs only on mount

  return <h1>Count: {count}</h1>;
};

export default Timer;
