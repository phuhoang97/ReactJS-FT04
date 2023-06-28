import React, { useReducer } from "react";

function DemoUseReducer() {
  // Trong hook useReducer được cung cấp như sự lựa chọn để thay thế cho useState
  // useState được sử dụng trong các component đơn giản
  // useReducer được sử dụng trong các component phức tạp

  // Khi sử dụng với useState:
  // Bước 1: Khai báo giá trị ban đầu
  // Bước 2: Action (up: count + 1, down: count - 1)

  // Khi sử dụng với Reducer:
  // Bước 1: Khai báo giá trị ban đầu
  // Bước 2: Action (up: count + 1, down: count - 1)
  // Bước 3: Reducer
  // Bước 4: Dispatch

  // Ví dụ:

  // Bước 1: Khai báo giá trị ban đầu (initialState)
  const initialState = 0;

  // Bước 2: Khai báo các action
  const ACTION_UP = "UP";
  const ACTION_DOWN = "DOWN";

  // Bước 3: Reducer
  // Reducer nhận 2 tham số:
  // Tham số 1: là state hiện tại
  // Tham số 2: là action
  // reducer sẽ xem state, action là gì => xử lý
  const reducer = (state, action) => {
    switch (action) {
      case ACTION_UP:
        return state + 1;
      case ACTION_DOWN:
        return state - 1;
      default:
        break;
    }
  };

  // Bước 4: dispatch
  // Khai báo giống useState nhưng tham số thứ 2 sẽ được đổi thành dispatch
  // useReducer có thể nhận vào 3 đối số: 1. reducer, 2. giá trị khởi tạo (initialState)
  const [count, dispatch] = useReducer(reducer, initialState);


  // Khi sử dụng 1 sự kiện gì đấy => sẽ sử dụng dispatch để gửi hành động (action) lên cho reducer xử lý
  return (
    <div>
      <h2>Demo useReducer</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(ACTION_UP)}>UP</button>
      <button onClick={() => dispatch(ACTION_DOWN)}>DOWN</button>
    </div>
  );
}

export default DemoUseReducer;
