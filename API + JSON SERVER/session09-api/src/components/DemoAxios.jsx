import React from "react";
import axios from "axios";

// để sử dụng axios:
// + Bước 1: cài đặt thư viện: npm i axios
// + Bước 2: import thư viện axios để sử dụng: import axios from "axios"

function DemoAxios() {
  // Get Axios
  const handleAxiosGet = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Post Axios
  const handleAxiosPost = () => {
    axios
      .post("http://localhost:8000/users", {
        name: "Hà",
        email: "ha@gmail.com",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Put Axios
  const handleAxiosPut = () => {
    axios
      .put("http://localhost:8000/users/9", {
        name: "Cường",
        email: "cuong@gmail.com",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Patch Axios
  const handleAxiosPatch = () => {
    axios
      .patch("http://localhost:8000/users/9", {
        name: "Cường",
        email: "cuong@gmail.com",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // Delete Axios
  const handleAxiosDelete = () => {
    axios
      .delete("http://localhost:8000/users/11")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Demo Axios</h2>
      <button onClick={handleAxiosGet}>Get Axios</button>
      <button onClick={handleAxiosPost}>Post Axios</button>
      <button onClick={handleAxiosPut}>Put Axios</button>
      <button onClick={handleAxiosPatch}>Patch Axios</button>
      <button onClick={handleAxiosDelete}>Delete Axios</button>
    </div>
  );
}

export default DemoAxios;
