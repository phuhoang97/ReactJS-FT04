import React from "react";
import { useLocation } from "react-router-dom";

function AboutPage() {
  // Sử dụng useLocation để nhận được dữ liệu từ navigate
  const data = useLocation();
  console.log(data);
  return <div>AboutPage</div>;
}

export default AboutPage;
