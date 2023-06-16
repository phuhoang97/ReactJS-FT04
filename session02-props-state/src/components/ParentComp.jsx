// rcc

import React, { Component } from "react";
import ChilrentComp from "./ChilrentComp";

export default class ParentComp extends Component {
  // Props:
  // Props là viết tắt của properties
  // Props dùng để lưu trữ các attribute
  // Giá trị props không thể thay đổi
  // props dùng để giao tiếp giữa các component với nhau (ví dụ: từ cha xuống con)

  // ParentComp => ChildrenComp
  render() {
    const title = "Rikkei Academy";
    return (
      <div>
        <ChilrentComp titleParent={title} course={"ReactJS"}>
          Time: 15 buổi
        </ChilrentComp>
      </div>
    );
  }
}
