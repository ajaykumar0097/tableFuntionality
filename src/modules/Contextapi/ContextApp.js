import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import {nameContext} from '../../context/context'



const ContextApp = () => {
    const [a,setA]=useState("Hey")
    const onhandleClick =()=>{
        setA("Testing Done")
    }
  return (
    <nameContext.Provider value={{a,setA}}>
      <Navbar />
      ContextApp
      <Button />
      <button onClick={onhandleClick}>Click me</button>
    </nameContext.Provider>
  );
};

export default ContextApp;
