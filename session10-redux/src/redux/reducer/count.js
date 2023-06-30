import * as typeAction from "../constant/typeAction";

// Bước 1: Khai báo giá trị khởi tạo ban đầu initState
const initState = 0;

// Bước 2: Khai báo hàm để xử lý logic
// Trong hàm sẽ nhận 2 tham số: 1 là giá trị khởi tạo ban đầu, 2 là action
// khi action được gửi lên
// {
//     type:
//     payload:
// }
const count = (state = initState, action) => {
  switch (action.type) {
    case typeAction.ACT_UP:
      return (state += action.payload);
    case typeAction.ACT_DOWN:
      return (state -= action.payload);
    case typeAction.ACT_RANDOM:
      return (state = Math.floor(Math.random() * 10));
    default:
      break;
  }
  return state;
};

export default count;
