import { useCallback, useState } from "react";
import { ItemList } from "./ItemsList";

const UseCallBack = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "green" : "red",
  };

  const generateItemsFromAPI = useCallback(
    (indexNumber) => {
      return new Array(count)
        .fill("")
        .map((_, i) => `Element ${i + indexNumber}`);
    },
    [count]
  );

  return (
    <>
      <h1 style={styles}>Elements Count:{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
      <button onClick={() => setColored((prev) => !prev)}>Change Color</button>

      <ItemList getItems={generateItemsFromAPI} />
    </>
  );
};

export default UseCallBack;
