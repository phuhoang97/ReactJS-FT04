import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddUser() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    address: "",
  });

  const { name, phone, email, age, address } = data;

  const handleChangeInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/users", data);
    navigate("/");
  };

  return (
    <div>
      <div className='mx-auto shadow p-5 w-75'>
        <i onClick={() => navigate(-1)} class='fa-solid fa-arrow-left'></i>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleChangeInput}
          />
          <br />
          <label>Phone: </label>
          <input
            type='text'
            name='phone'
            value={phone}
            onChange={handleChangeInput}
          />
          <br />
          <label>Email: </label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChangeInput}
          />
          <br />
          <label>Age: </label>
          <input
            type='text'
            name='age'
            value={age}
            onChange={handleChangeInput}
          />
          <br />
          <label>Address: </label>
          <input
            type='text'
            name='address'
            value={address}
            onChange={handleChangeInput}
          />
          <br />
          <Button variant='outline-primary' type='submit'>
            Add User
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
