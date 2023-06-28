import React, { useEffect, useState } from "react";

function DemoFetchAPI() {
  // Get Fetch Api
  const [dataUsers, setDataUsers] = useState([]);
  const handleGetFetchApi = () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
      .then((data) => setDataUsers(data)) // Lấy dữ liệu về
      .catch((err) => console.log(err));
  };

  // Demo sử dụng fetch với useEffect
  //   useEffect(() => {
  //     fetch("http://localhost:8000/users")
  //       .then((res) => res.json()) // Ép kiểu dữ liệu về dạng json
  //       .then((data) => setDataUsers(data)) // Lấy dữ liệu về
  //       .catch((err) => console.log(err));
  //   }, []);

  // Post Fetch API

  const handlePostFetchApi = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: "Thế Anh", email: "theanh@gmail.com" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // Put Fetch API

  const handlePutFetchApi = () => {
    fetch("http://localhost:8000/users/8", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: "Tú", email: "tu@gmail.com" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // Patch Fetch API
  const handlePatchFetchApi = () => {
    fetch("http://localhost:8000/users/8", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: "Khoa" }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // Lưu ý:
  //   + PUT và PATCH đều được sử dụng để update nhưng:
  //   + PUT sẽ tạo ra bản ghi mới => ghi đè lại bản ghi cũ
  //   + PATCH sẽ không tạo ra bản ghi mới => vẫn ghi nguyên các giá trị trong bản ghi cũ nếu không được cập nhật

  // Delete fetch API

  const handleDeleteFetchApi = () => {
    fetch("http://localhost:8000/users/7", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Demo Fetch API</h2>
      <button onClick={handleGetFetchApi}>Get Fetch API</button>
      <button onClick={handlePostFetchApi}>Post Fetch API</button>
      <button onClick={handlePutFetchApi}>Put Fetch API</button>
      <button onClick={handlePatchFetchApi}>Patch Fetch API</button>
      <button onClick={handleDeleteFetchApi}>Delete Fetch API</button>

      <h4>Table Data Users</h4>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchAPI;
