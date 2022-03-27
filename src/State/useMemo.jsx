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
      <button onClick={() => setNumber((prev) => prev + 1)}>Plus</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Minus</button>
      <button onClick={() => setColored((prev) => !prev)}>Change</button>
    </div>
  );
};

export default UseMemo;
