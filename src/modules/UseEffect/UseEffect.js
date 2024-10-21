import React, { useState, useEffect } from 'react';

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);

//   setTimeout(setCount(count+1),10000)
console.log("hey",count)

useEffect(()=>{
   const timer= setInterval(()=>{
        setCount(prev=> prev+1)
        
    },1000)
//    return _=> clearInterval(timer)
},[])

//   // Emulates componentDidMount and componentDidUpdate
//   useEffect(() => {
//     console.log('Component mounted or updated!');

//     // Cleanup function to emulate componentWillUnmount
//     return () => {
//         setCount(0)
//       console.log('Component unmounted!');
//     };
//   },[count]); // Dependency on 'count', runs when count changes

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

  return (
    <div>
      <h1>Lifecycle in Functional Components</h1>
      <p>Count: {count}</p>
      {/* <button onClick={incrementCount}>Increment</button> */}
    </div>
  );
};

export default LifecycleComponent;

// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   // This useEffect starts the timer when the component mounts
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     // Cleanup function: This will run when the component unmounts
//     return () => {
//       console.log('Timer component unmounted. Cleaning up the interval.');
//     //   clearInterval(intervalId); // Clear the interval to prevent memory leaks
//     };
//   }, []); // Empty array ensures this effect runs only on mount/unmount

//   return <div>Timer: {seconds} seconds</div>;
// };

// const Apps = () => {
//   const [showTimer, setShowTimer] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowTimer(!showTimer)}>
//         {showTimer ? 'Stop Timer' : 'Start Timer'}
//       </button>
//     <Timer />{/* Timer component will unmount when showTimer is false */}
//     </div>
//   );
// };

// export default Apps;

