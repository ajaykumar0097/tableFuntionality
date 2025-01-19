import React, { useState } from "react";
import Child1 from "./Child1";
import { nameContext } from "../../../context/context";

const ContApi = () => {
  const [child, setChild] = useState({
    child1: "Test1",
    child2: "Test2",
    child3: "Test3",
  });
  return (
    <nameContext.Provider value={{child,setChild}}>
      <div>
        <Child1 />
      </div>
    </nameContext.Provider>
  );
};

export default ContApi;
