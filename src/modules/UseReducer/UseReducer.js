import React, { useReducer, useState } from 'react';

export function UseReducer() {
  // Declare a state variable 'count' with a default value of 0
//   const [count, setCount] = useState(0);

const reducer=(state,action)=>{
    console.log("reducer",state,action);
    if(action.type==="INCREMENT") return state+1
    if(action.type==="DECREMENT") return state-1
    if(action.type==="RESET") return 0
    
}
  const [count, dispatch]= useReducer(reducer,0)
  console.log("dispatch",dispatch);
  

  // Function to handle increment
  const increment = () => {
    // setCount(count + 1);
    dispatch({type:"INCREMENT"})
  };

  // Function to handle decrement
  const decrement = () => {
    // setCount(count - 1);
    dispatch({type:"DECREMENT"})
  };

  // Function to handle reset
  const reset = () => {
    dispatch({type:"RESET"})
    // setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
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


