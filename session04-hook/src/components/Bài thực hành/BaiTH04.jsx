import React, { useState } from "react";

function BaiTH04() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    setTask([...task, newTask]);
    setNewTask("");
  };
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div>
      <input type='text' value={newTask} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default BaiTH04;
