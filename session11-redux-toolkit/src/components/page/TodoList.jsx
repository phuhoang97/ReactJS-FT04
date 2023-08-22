import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  setNewTask,
  toggleTask,
  updateTask,
  incrementCount,
  decrementCount,
} from "../redux/todoSlice";

function TodoList() {
  const count = useSelector((state) => state.todo.count);
  const tasks = useSelector((state) => state.todo.tasks);
  const newTask = useSelector((state) => state.todo.newTask);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(
      addTask({
        id: Date.now(),
        text: newTask,
        complete: false,
      })
    );
    dispatch(setNewTask(""));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const [selectTask, setSelectTask] = useState(null);

  const handleEditTask = (task) => {
    setSelectTask(task);
    dispatch(setNewTask(task.text));
  };

  const handleUpdateTask = () => {
    dispatch(
      updateTask({
        ...selectTask,
        text: newTask,
      })
    );
    dispatch(setNewTask(""));
    setSelectTask(null);
  };

  return (
    <div>
      <div>
        Count: {count}
        <button onClick={() => dispatch(incrementCount())}>Increase</button>
        <button onClick={() => dispatch(decrementCount())}>Decrease</button>
      </div>
      <h1>TodoList - Redux</h1>
      <input
        type='text'
        value={newTask}
        placeholder='Enter a new task'
        onChange={(e) => dispatch(setNewTask(e.target.value))}
      />
      <button onClick={selectTask ? handleUpdateTask : handleAddTask}>
        {selectTask ? "Update" : "Add"}
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.complete ? "line-through" : "none",
              }}
              onClick={() => handleToggle(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
