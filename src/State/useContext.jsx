import React from "react";
import { Alert } from "./Alert/Alert";
import { AlertProvider } from "./Alert/AlertContext";
import { Main } from "./Main";



const UseContext = () => {
  return (
    <AlertProvider>
      <div>
        <Alert />
        <Main toggle={() =>{}} />
      </div>
    </AlertProvider>
  );
};

export default UseContext;
