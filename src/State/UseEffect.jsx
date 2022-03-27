import { Button, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {};
  }, [type]);

  const mouseMoveHandle = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    console.log("componentDidMounth");
    window.addEventListener("mousemove", mouseMoveHandle);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandle);
    };
  }, []);

  return (
    <div>
      <h1>Recourse: {type}</h1>
      <Stack spacing={2}>
        <Button variant="contained" onClick={() => setType("users")}>
          Users
        </Button>
        <Button variant="contained" onClick={() => setType("todos")}>
          ToDo
        </Button>
        <Button variant="contained" onClick={() => setType("posts")}>
          Posts
        </Button>
      </Stack>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
};

export default UseEffect;
