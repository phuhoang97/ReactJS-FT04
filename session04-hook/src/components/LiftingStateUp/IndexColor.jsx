import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

function IndexColor() {
  // Lifting state up là nâng(chuyển) trạng thái lên
  const [color, setColor] = useState("#000000");

  // Cách 1: Tạo hàm => chuyền xuống component con
  //   const handleChangeColor = (e) => {
  //     setColor(e);
  //   };

  // Cách 2: Truyền state từ cha xuống con

  return (
    <div>
      <h2>Lifting State Up</h2>
      {/* Cách 1 */}
      {/* <ColorPicker changeColor={handleChangeColor} /> */}
      {/* Cách 2 */}
      <ColorPicker setColorParent={setColor} number={100} />
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          margin: "0 auto",
          marginTop: "100px",
        }}
      ></div>
    </div>
  );
}

export default IndexColor;
