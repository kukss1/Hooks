import { AlertTitle } from "@mui/material";
import React from "react";
import { useAlert } from "./AlertContext";

export const Alert = () => {
  const alert = useAlert();

  if (!alert.visible) return null;

  return (
    <AlertTitle vocab="Alert" onClick={alert.hide}>
      {alert.text}
    </AlertTitle>
  );
};
