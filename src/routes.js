import { createBrowserRouter } from "react-router-dom";
import { UseCallback } from "./modules/Test2/UseCallback";
import { UseMemo } from "./modules/Test2/Usememo";
import ContextApp from "./modules/Contextapi/ContextApp";
// import { Counter } from "./modules/usememo/Counter";
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
import ParentComponent1 from "./modules/colorRows/ParentComponent";
import { CallbackHell } from "./modules/callbackhell_promises_asyncawait/CallbackHell";
import JavascriptPractice from "./modules/JavascriptPractice";
import FormSubmit from "./modules/formSubmit/FormSubmit";
import ContApi from "./modules/Contextapi/selfPracticeForContextApi/ContApi";
import Application from "./modules/Application/Application";
import { ExpensiveComponent } from "./newmodules/useMemo";
import CallBack from "./selfPractice/CallBack";
import Carousel from "./modules/Carousel";
import ReactRedux from "./reduxPracting/ReactRedux";
import AddUser from "./addUserDetailsApiRedux/AddUser";
import ContextApi from "./Testers/ContextApi";
import Timer from "./Testers/UseEffecttest";
// import Counter from "./addUserDetailsApiRedux/components/Redux/Counter";

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
      // {
      //   path: "/usememoCounter",
      //  element: <Counter/>,
      // }, 
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
      {
        path: "/ParentComponent1",
        element: <ParentComponent1/>,
      },
      {
        path: "/CallbackHell",
        element: <CallbackHell/>,
      },
      {
        path: "/JavascriptPractice",
        element: <JavascriptPractice/>,
      },
      {
        path: "/FormSubmit",
        element: <FormSubmit/>,
      },
      {
        path: "/ContApi",
        element: <ContApi/>,
      },
      {
        path: "/application",
        element: <Application/>,
      },
      {
        path: "/ExpensiveComponent",
        element: <ExpensiveComponent/>,
      },
      {
        path: "/CallBack",
        element: <CallBack/>,
      },
      {
        path: "/Carousel",
        element: <Carousel/>,
      },
      {
        path: "/ReactRedux",
        element: <ReactRedux/>,
      },
      {
        path: "/AddUser",
        element: <AddUser/>,
      },

      {
        path: "/AddUser",
        element: <AddUser/>,
      },
      {
        path: "/ContextApi",
        element: <ContextApi/>,
      },
      {
        path: "/Timer",
        element: <Timer/>,
      },


  ]);