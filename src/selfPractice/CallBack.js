import React, { useCallback, useState } from "react";
import CallBackChild from "./CallBackChild";

const CallBack = () => {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
  console.log("Parent");

  const parentButton = useCallback(() => {
    // alert("button")
    setCount(count + 1);
  },[count])

  
  const childButton = useCallback(() => {
    // alert("button")
    setA(a + 1);
  },[a])

  return (
    <div>
      <CallBackChild parentButton={childButton}/>
      <button className="p-2" onClick={parentButton}>
        Parent Button
      </button>
      <div>{count}</div>
    </div>
  );
};

export default CallBack;
