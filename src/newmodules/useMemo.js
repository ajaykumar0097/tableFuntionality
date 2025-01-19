import React, { useState, useMemo } from "react";

export function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);

  // Memoized value for an expensive computation
  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setIncrement(increment + 1)}>
        Trigger Increment
      </button>
    </div>
  );
}
