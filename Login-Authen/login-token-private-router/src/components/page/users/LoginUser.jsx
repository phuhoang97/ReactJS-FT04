import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate input
    if (!email || !password) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    axios
      .post("http://localhost:8000/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("users", JSON.stringify(res.data.accessToken));
          setIsValidToken(true);
          toast.success("Đăng nhập thành công");
          navigate("/");
        }
      })

      .catch((err) => {
        if (err.response && err.response.status === 404) {
          toast.error("Đăng nhập thất bại");
        } else {
          toast.error("Đã xảy ra lỗi");
        }
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <FloatingLabel
          controlId='floatingInput'
          label='Email address'
          className='mb-3'
        >
          <Form.Control
            type='email'
            placeholder='name@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId='floatingPassword' label='Password'>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>

        <Button variant='outline-success' type='submit'>
          Login
        </Button>
      </form>
    </>
  );
}

export default LoginUser;
