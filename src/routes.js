import { createBrowserRouter } from "react-router-dom";
import { UseCallback } from "./modules/Test2/UseCallback";
import { UseMemo } from "./modules/Test2/Usememo";
import ContextApp from "./modules/Contextapi/ContextApp";
import { Counter } from "./modules/usememo/Counter";
import { UseCallBackCounter } from "./modules/usecallback/UseCallback";
import ProductSearchComponent from "./modules/apicalling/ProductSearchComponent";
import ParentComponentGrid from "./modules/GridTest/Parent";
import ParentComponent from "./modules/NewProParentGrid/ParentComponent";

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
  ]);