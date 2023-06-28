import React from "react";
import { useNavigate } from "react-router-dom";

function DemoNavigate() {
  // useNavigate là 1 hook được cung cấp bởi react-router-dom. Dùng để chuyển trang
  const navigate = useNavigate();
  return (
    <div>
      {/* Sử dụng navigate để chuyển trang */}
      <button onClick={() => navigate("/about")}>Click go to About</button>
      {/* Sử dụng navigate với history */}
      <button onClick={() => navigate(-1)}>Go to back 1</button>
      <button onClick={() => navigate(-2)}>Go to back 2</button>
      <button onClick={() => navigate(2)}>Go to forward 2</button>
      <button onClick={() => navigate(1)}>Go to forward 1</button>
      {/* Sử dụng navigate với replace = true => sẽ không lưu lại history */}
      <button onClick={() => navigate("/about", { replace: true })}>
        Go to About with replace
      </button>
      {/* Sử dụng navigate để truyền dữ liệu */}
      <button onClick={() => navigate("/about", { state: { count: 10 } })}>
        Go to About with Data
      </button>
    </div>
  );
}

export default DemoNavigate;
