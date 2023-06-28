import React, { useEffect, useState } from "react";
import LayoutNavbar from "../layout/LayoutNavbar";
import Table from "react-bootstrap/Table";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);

  const loadUser = () => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <LayoutNavbar />
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        Đây là Home Page
      </h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.phone}</td>
              <td>{element.email}</td>
              <td>{element.age}</td>
              <td>{element.address}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage;
