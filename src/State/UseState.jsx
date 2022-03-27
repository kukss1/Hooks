import "../App.css"
import React, { useState } from "react";

const computeInitialCounter = () => {
  console.log("bebeb");
  return Math.trunc(Math.random() * 20);
};

const UseState = () => {
  //const [counter, setCounter] = useState(0)
  //const [counter, setCounter] = useState(computeInitialCounter())
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "счетчик",
    date: Date.now(),
  });

  const increment = () => {
    //setCounter(counter + 1)
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    //setCounter(prevCounter => prevCounter +1)
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

const updateTitle = () => {
  setState(prev => {
    return {
      ...prev,
      title: "Big Data"
    }
  })
}

  return (
    <div className="App">
      <h1>Счетчик:{counter}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>
      <button onClick={updateTitle}>
        Изменить Название
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default UseState;