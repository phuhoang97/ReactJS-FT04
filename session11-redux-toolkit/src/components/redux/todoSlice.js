import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todolist",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

console.log(todoslice);

export const { addTodo } = todoslice.actions;
export default todoslice.reducer;
