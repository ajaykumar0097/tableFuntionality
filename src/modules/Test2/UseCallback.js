// import React, { useState } from 'react';
// import ChildComponent from './UseCallBackChilds1';


// export function ParentComponent1() {
//   const [count, setCount] = useState(0);


//   const handleClick = () => {
//     console.log("Button clicked");
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <ChildComponent onClick={handleClick} />
//     </div>
//   );
// }

// // Usage
// {/* <ParentComponent />; */}


// import React, { useState, useEffect } from 'react';

// function DataFetcher({ fetchData }) {
//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return <div>Fetching data...</div>;
// }

// export function ParentComponent1() {
//   const [count, setCount] = useState(0);

//   const fetchData = () => {
//     console.log("Fetching data...");
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <DataFetcher fetchData={fetchData} />
//     </div>
//   );
// }

import React, { useState, useEffect, useCallback } from 'react';

function DataFetcher({ fetchData }) {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div>Fetching data...</div>;
}

export function UseCallback() {
  const [count, setCount] = useState(0);

  const fetchData = useCallback(() => {
    console.log("Fetching data...");
  }, []); // No dependencies, so it's memoized

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <DataFetcher fetchData={fetchData} />
    </div>
  );
}



// Usage


