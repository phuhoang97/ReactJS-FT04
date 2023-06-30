import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_up, act_down, act_random } from "../redux/action";

function CountComp() {
  // Sử dụng useSelector để lấy state
  const count = useSelector((state) => state.count);
  // Sử dụng useDispatch để gửi action lên
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Demo Redux</h2>
      <p>count: {count}</p>
      <button onClick={() => dispatch(act_up(5))}>UP</button>
      <button onClick={() => dispatch(act_down(3))}>DOWN</button>
      <button onClick={() => dispatch(act_random())}>Random</button>
    </div>
  );
}

export default CountComp;
