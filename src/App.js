import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./action";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h1>Counter count: {counter}</h1>
      <h2>Hello!!!</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
