import { Button } from "@mui/material";
import { useState, useMemo, useEffect } from "react";

const complexCompute = (num) => {
  console.log("Calc");
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
};

const UseMemo = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => {
    return {
      color: colored ? "darkred" : "black",
    };
  }, [colored]);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("styles Change");
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Вычесляемое свойство:{computed}</h1>
      <Button variant="text" sx={{mr:1}} onClick={() => setNumber((prev) => prev + 1)}>Plus</Button>
      <Button variant="text" sx={{mr:1}} onClick={() => setNumber((prev) => prev - 1)}>Minus</Button>
      <Button variant="outlined" sx={{mr:1}} color="success" onClick={() => setColored((prev) => !prev)}>Change</Button>
    </div>
  );
};

export default UseMemo;
