import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterUser() {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    age: "",
    address: "",
  });

  const { email, password, confirmPassword, fullname, age, address } = register;

  const navigate = useNavigate();

  const handleChangeRegister = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegister({ ...register, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate input
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !fullname ||
      !age ||
      !address
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    // Validate password match
    if (password !== confirmPassword) {
      toast.error("Mật khẩu và xác nhận mật khẩu không khớp");
      return;
    }

    axios
      .post("http://localhost:8000/register", register)
      .then(() => {
        navigate("/login-user");
        toast.success("Đăng ký thành công");
      })
      .catch((error) => {
        toast.error("Đã xảy ra lỗi");
      });
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <FloatingLabel
          controlId='floatingInput'
          label='Email address'
          className='mb-3'
        >
          <Form.Control
            type='email'
            placeholder='name@example.com'
            value={email}
            name='email'
            onChange={handleChangeRegister}
          />
        </FloatingLabel>

        <FloatingLabel controlId='floatingPassword' label='Password'>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            name='password'
            onChange={handleChangeRegister}
          />
        </FloatingLabel>

        <FloatingLabel controlId='floatingPassword' label='Confirm Password'>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            name='confirmPassword'
            onChange={handleChangeRegister}
          />
        </FloatingLabel>

        <FloatingLabel controlId='floatingInput' label='Full Name'>
          <Form.Control
            type='text'
            placeholder='Full Name'
            value={fullname}
            name='fullname'
            onChange={handleChangeRegister}
          />
        </FloatingLabel>

        <FloatingLabel controlId='floatingInput' label='Age'>
          <Form.Control
            type='text'
            placeholder='Age'
            value={age}
            name='age'
            onChange={handleChangeRegister}
          />
        </FloatingLabel>

        <FloatingLabel controlId='floatingInput' label='Address'>
          <Form.Control
            type='text'
            placeholder='Address'
            value={address}
            name='address'
            onChange={handleChangeRegister}
          />
        </FloatingLabel>

        <Button variant='outline-success' type='submit'>
          Register
        </Button>
      </form>
    </>
  );
}

export default RegisterUser;
