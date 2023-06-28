import React, { createContext, useState } from "react";
import CompB from "./CompB";

// Khai báo để tạo ngữ cảnh
export const themeContext = createContext();

function ParentContext() {
  // useContext là 1 hook cung cấp Context để giúp đơn giản hóa việc chia sẻ dữ liệu
  // trong cây DOM mà không cần phải truyền từng cấp

  // Trường hợp 1: Truyền props
  // ParentContext => CompB => CompC
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h2>Demo useContext</h2>

      {/* Trường hợp 1: Sử dụng props để truyền dữ liệu */}
      {/* <button onClick={handleChangeTheme}>Change theme</button>
      <CompB theme={theme} /> */}

      {/* Trường hợp 2: Sử dụng useContext */}
      <themeContext.Provider value={theme}>
        <button onClick={handleChangeTheme}>Change theme</button>
        <CompB />
      </themeContext.Provider>
    </div>
  );
}

export default ParentContext;
