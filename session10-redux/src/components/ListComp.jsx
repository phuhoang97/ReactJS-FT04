import React from "react";
import { act_random_arr } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

function ListComp() {
  // useSelector để lấy state về
  const list = useSelector((state) => state.list);
  // sử dụng useDispatch để gửi action lên store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Random List</h2>
      <p>{list.toString()}</p>
      <button onClick={() => dispatch(act_random_arr())}>Random</button>
    </div>
  );
}

export default ListComp;
