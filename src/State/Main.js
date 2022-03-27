import { Button } from "@mui/material";
import React from "react";
import { useAlert } from "./Alert/AlertContext";

export const Main = () => {
  const { show } = useAlert();

  return (
    <>
      <h1>Hi from Context</h1>
      <Button variant="outlined" onClick={() => show("That text from main.js")}>
        Show Alert
      </Button>
    </>
  );
};
