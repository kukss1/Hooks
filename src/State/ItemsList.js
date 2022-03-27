import React, { useEffect, useState } from "react";

export const ItemList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems(42);
    setItems(newItems);
  }, [getItems]);
  return (
    <ul>
      {items.map((i) => (
        <li kay={i}>{i}</li>
      ))}
    </ul>
  );
};
