import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import  userDetails  from "../addUserDetailsApiRedux/features/addUserSlice";


export  const store= configureStore({
    reducer:{
      counter:counterReducer,
      app:userDetails
    }
})


