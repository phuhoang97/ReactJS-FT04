import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todoSlice);

  console.log(todo);

  // Lưu ý: Khi sử dụng redux
  // => Không nên sử dụng các hàm không thể dự đoán trước được.
  // ví dụ:
  // Math.random, date(), ... => uuid()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), text: text }));
  };

  return (
    <div>
      <h2>TodoList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>ADD</button>
      </form>

      {todo &&
        todo.map((e, i) => (
          <div key={i}>
            <div>{e.text}</div>
          </div>
        ))}
    </div>
  );
}

export default TodoList;
