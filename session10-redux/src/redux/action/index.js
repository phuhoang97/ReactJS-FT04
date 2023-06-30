import * as typeAction from "../constant/typeAction";

export const act_up = (value) => {
  return {
    type: typeAction.ACT_UP,
    payload: value,
  };
};

export const act_down = (value) => {
  return {
    type: typeAction.ACT_DOWN,
    payload: value,
  };
};

export const act_random = (value) => {
  return {
    type: typeAction.ACT_RANDOM,
    payload: value,
  };
};

export const act_random_arr = () => {
  return {
    type: typeAction.ACT_RANDOM_ARR,
  };
};
