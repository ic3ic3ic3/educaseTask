import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signin from "./Signin";
import CreateAccount from "./CreateAccount";
import AccountSetting from "./AccountSetting";
import ErrorPage from "./ErrorPage";

const appRouter = createBrowserRouter([
  { 
    path: "/", 
    element: <LandingPage /> ,
    errorElement: <ErrorPage/>
  },
  {
    path: "/sign",
    element: <Signin />,
  },
  {
    path: "/createacount",
    element: <CreateAccount />,
  },
  {
    path: "/acountsetting",
    element: <AccountSetting />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
);
