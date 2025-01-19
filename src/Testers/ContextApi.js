import React, { useReducer, useState } from "react";
import { CounterContext } from "./Context";
import ConterTestingAppParent from "./ConterTestingAppParent";

const ContextApi = () => {
  const intialState = {
    count: 0,
  };
  const ReducerTest = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
    }
  };

  const [state,dispatch]=useReducer(ReducerTest,intialState)

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <ConterTestingAppParent />
    </CounterContext.Provider>
  );
};

export default ContextApi;
