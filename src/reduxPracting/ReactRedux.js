import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,incrementByAmmount,reset } from "./counterSlice";

const ReactRedux = () => {
    const count=useSelector(state=>state.counter.value)
    // console.log("count",count);
    
    const dispatch =useDispatch()
  return (
    <div>
      <button onClick={_=>dispatch(decrement())}>Decrement</button>
      <label htmlFor="">{count}</label>
      <button onClick={_=>dispatch(increment())}>increment</button>

    </div>
  );
};

export default ReactRedux;
