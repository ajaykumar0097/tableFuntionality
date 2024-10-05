import React, { useMemo, useState } from 'react';


const nums= new Array(3000).fill(0).map((_,i)=>{
    return {
        index:i,
        isMagical:i===3000
    }
})


export function Counter() {
console.log("inside")
// console.log(nums)
  // Declare a state variable 'count' with a default value of 0
  const [count, setCount] = useState(0);
  const [number, setNumbers] = useState(nums);

  const magicalNumber=number.find(item=>item.isMagical===true)
//   console.log("magicalNumber",magicalNumber);
const magic = useMemo(number.find(item=>item.isMagical===true),[])
console.log(magic);

  


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


