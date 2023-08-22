import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    count: 0,
    tasks: [],
    newTask: "",
  },
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
    // TodoList
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.complete = !task.complete;
      }
    },
    updateTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    },
    setNewTask: (state, action) => {
      state.newTask = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTask,
  updateTask,
  setNewTask,
  incrementCount,
  decrementCount,
} = todoSlice.actions;

export default todoSlice.reducer;
