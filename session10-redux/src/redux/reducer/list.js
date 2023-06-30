import * as typeAction from "../constant/typeAction";

const initState = [3, 5, 7, 9];

const list = (state = initState, action) => {
  console.log("state ==>", state);
  console.log("action ==>", action);
  switch (action.type) {
    case typeAction.ACT_RANDOM_ARR:
      return (state = [...state, Math.floor(Math.random() * 100)]);
    default:
      return state;
  }
};

export default list;
