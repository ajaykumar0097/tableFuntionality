import { createBrowserRouter } from "react-router-dom";
import { UseCallback } from "./modules/Test2/UseCallback";
import { UseMemo } from "./modules/Test2/Usememo";
import ContextApp from "./modules/Contextapi/ContextApp";
import { Counter } from "./modules/usememo/Counter";
import { UseCallBackCounter } from "./modules/usecallback/UseCallback";
import ProductSearchComponent from "./modules/apicalling/ProductSearchComponent";
import ParentComponentGrid from "./modules/GridTest/Parent";
import ParentComponent from "./modules/NewProParentGrid/ParentComponent";
import { UseReducer } from "./modules/UseReducer/UseReducer";
import { UseRef } from "./modules/UseRef/UseRef";
import LifecycleComponent from "./modules/UseEffect/UseEffect";
import Apps from "./modules/UseEffect/UseEffect";
import SyntheticEvents from "./modules/SyntheticEvents/SyntheticEvents";
import Props from "./modules/Props/Props";
import Practicing from "./modules/Props/Props";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/usecallback",
        element: <UseCallback/>,
      },

      {
        path: "/usememo",
        element: <UseMemo/>,
      },

      {
        path: "/ContextApp",
        element: <ContextApp/>,
      },
      {
        path: "/usememoCounter",
        element: <Counter/>,
      },
      {
        path: "/UseCallBackCounter",
        element: <UseCallBackCounter/>,
      },
      {
        path: "/ProductSearchComponent",
        element: <ProductSearchComponent/>,
      },
      {
        path: "/ParentComponentGrid",
        element: <ParentComponentGrid/>,
      },
      {
        path: "/gridTesting",
        element: <ParentComponent/>,
      },
      {
        path: "/UseReducer",
        element: <UseReducer/>,
      },
      {
        path: "/UseRef",
        element: <UseRef/>,
      },
      {
        path: "/useeeffect",
        element: <LifecycleComponent/>,
      },
      {
        path: "/SyntheticEvents",
        element: <SyntheticEvents/>,
      },
      {
        path: "/grid",
        element: <ParentComponent/>,
      },
      {
        path: "/Practicing",
        element: <Practicing/>,
      },
  ]);