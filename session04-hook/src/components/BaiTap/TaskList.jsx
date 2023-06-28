import React, { useReducer } from "react";

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "CLEAR_TASKS":
      return {
        tasks: [],
      };
    default:
      return state;
  }
};
function TaskList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      name: `Task ${state.tasks.length + 1}`,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const removeTask = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  const clearTasks = () => {
    dispatch({ type: "CLEAR_TASKS" });
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <button onClick={clearTasks}>Clear Tasks</button>
      <ul>
        {state.tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
