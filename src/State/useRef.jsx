import { Button, TextField } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  //const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Renders Count:{renderCount.current}</h1>
      <h2>Last State : {prevValue.current}</h2>
      <TextField
        ref={inputRef}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Button variant="contained" sx={{ml:1}} onClick={focus}>Focus</Button>
    </div>
  );
};

export default UseRef;
