import React, { useState } from 'react';

export function UseMemo({ numbers }) {
  const [count, setCount] = useState(0);


  const getEvenNumbersSum = () => {
    console.log("Calculating sum...");
    return numbers?.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);
  };

  const sum = getEvenNumbersSum();

  return (
    <div>
      <h1>Sum of Even Numbers: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <p>Counter: {count}</p>
    </div>
  );
}

// import React, { useState, useMemo } from 'react';

// export function EvenNumbersSum({ numbers }) {
//   const [count, setCount] = useState(0);

//   const sum = useMemo(() => {
//     console.log("Calculating sum...");
//     return numbers.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);
//   }, [numbers]);

//   return (
//     <div>
//       <h1>Sum of Even Numbers: {sum}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Counter</button>
//       <p>Counter: {count}</p>
//     </div>
//   );
// }


