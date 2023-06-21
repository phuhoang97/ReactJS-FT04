// rfce

import React, { useState } from "react";

function TodoList() {
  // Bước 1: Khởi tạo các state để lưu trữ dữ liệu
  // + State Todo dùng để lưu trữ tất cả dữ liệu todolist
  const [todo, setTodo] = useState([]);
  // + State text dùng để lưu trữ dữ liệu của ô input
  const [text, setText] = useState("");

  // Bước 2: Hàm để lấy value của ô input
  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // Bước 3: Viết hàm handleAddTodo để thêm dữ liệu vào todo
  const handleAddTodo = () => {
    setTodo([...todo, { text: text, complete: false }]);
    setText("");
  };

  // Bước 4: Viết hàm handleDeleteTodo để xóa dữ liệu trong todo
  const handleDeleteTodo = (index) => {
    const deleteTodo = [...todo];
    deleteTodo.splice(index, 1);
    setTodo(deleteTodo);
  };

  // Bước 5: Viết hàm handleToggleTodo để chuyển đổi trạng thái cho text
  const handleToggleTodo = (index) => {
    const toggleTodo = todo.map((e, i) =>
      index === i ? { ...e, complete: !e.complete } : e
    );
    setTodo(toggleTodo);
  };

  // Bước 6: Viết hàm handleEditTodo để cập nhật lại dữ liệu cho todo
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todo[index].text);
  };
  // Bước 7: Hàm để cập nhật lại dữ liệu của ô input Edit
  const handleUpdateTodo = () => {
    const updateTodo = [...todo];
    updateTodo[editIndex].text = editText;
    setTodo(updateTodo);
    setEditIndex(-1);
    setText("");
  };

  return (
    <div>
      <h2 className='container'>Todo List</h2>
      <input type='text' value={text} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>ADD</button>

      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type='text'
                  onChange={(e) => setEditText(e.target.value)}
                  value={editText}
                />
                <button onClick={handleUpdateTodo}>Edit Todo</button>
                <button onClick={() => setEditIndex(-1)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span
                  style={{
                    textDecoration: element.complete ? "line-through" : "none",
                  }}
                  onClick={() => handleToggleTodo(index)}
                >
                  {element.text}
                </span>
                <button onClick={() => handleEditTodo(index)}>Edit</button>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
