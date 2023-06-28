import React, { useReducer } from "react";

const initState = 0;

const ACTION_UP = "up";
const ACTION_DOWN = "down";
const RANDOM = "RANDOM";

const reducer = (state, action) => {
  switch (action) {
    case ACTION_UP:
      return state + 1;
    case ACTION_DOWN:
      return state - 1;
    case RANDOM:
      return Math.floor(Math.random() * 10);
    default:
      break;
  }
};

function THReducer() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(ACTION_UP)}>UP</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>DOWN</button>
      <button onClick={() => dispatch(RANDOM)}>RANDOM</button>
    </div>
  );
}

export default THReducer;
