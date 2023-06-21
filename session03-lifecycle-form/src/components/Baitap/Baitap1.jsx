import React, { Component } from "react";
import $ from "jquery";

export default class Baitap1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      cpassword: "",
      email: "",
      isLoggedIn: false,
      errors: {
        username: "",
        password: "",
        cpassword: "",
        email: "",
      },
    };
  }

  componentDidMount() {
    $(document).ready(function () {
      var panelOne = $(".form-panel.two").height();
      var panelTwo = 0;

      // Check if the element exists before accessing its scrollHeight
      var formPanelTwo = $(".form-panel.two")[0];
      if (formPanelTwo) {
        panelTwo = formPanelTwo.scrollHeight;
      }

      $(".form-panel.two")
        .not(".form-panel.two.active")
        .on("click", function (e) {
          e.preventDefault();

          $(".form-toggle").addClass("visible");
          $(".form-panel.one").addClass("hidden");
          $(".form-panel.two").addClass("active");
          $(".form").animate(
            {
              height: panelTwo,
            },
            200
          );
        });

      $(".form-toggle").on("click", function (e) {
        e.preventDefault();
        $(this).removeClass("visible");
        $(".form-panel.one").removeClass("hidden");
        $(".form-panel.two").removeClass("active");
        $(".form").animate(
          {
            height: panelOne,
          },
          200
        );
      });
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: "", // Reset the error message for the field
      },
    }));
  };

  handleLoginSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const errors = {};

    // Kiểm tra hợp lệ cho các trường dữ liệu
    if (!username) {
      errors.username = "Please enter your username";
    }
    if (!password) {
      errors.password = "Please enter your password";
    }

    if (Object.keys(errors).length === 0) {
      // Thực hiện xử lý đăng nhập ở đây

      // Lưu trạng thái đăng nhập vào local storage
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);

      this.setState({ isLoggedIn: true, errors: {} });
    } else {
      this.setState({ isLoggedIn: true, errors: errors }); // Thay đổi thành errors thay vì {}
    }
  };

  handleRegisterSubmit = (event) => {
    event.preventDefault();
    const { username, password, cpassword, email } = this.state;
    const errors = {};

    // Kiểm tra hợp lệ cho các trường dữ liệu
    if (!username) {
      errors.username = "Please enter a username";
    }
    if (!password) {
      errors.password = "Please enter a password";
    }
    if (!cpassword) {
      errors.cpassword = "Please confirm your password";
    } else if (password !== cpassword) {
      errors.cpassword = "Passwords do not match";
    }
    if (!email) {
      errors.email = "Please enter an email address";
    } else if (!this.validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (Object.keys(errors).length === 0) {
      // Thực hiện xử lý đăng ký ở đây

      // Lưu thông tin đăng ký vào local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("email", email);

      // Lưu trạng thái đăng nhập vào local storage
      localStorage.setItem("isLoggedIn", true);

      this.setState({ isLoggedIn: true, errors: {} });
    } else {
      this.setState({ isLoggedIn: true, errors: errors }); // Thay đổi thành errors thay vì {}
    }
  };

  validateEmail = (email) => {
    // Kiểm tra định dạng email bằng biểu thức chính quy
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  render() {
    const { isLoggedIn, errors } = this.state;

    if (isLoggedIn) {
      return (
        <div>
          <h1>Welcome, {localStorage.getItem("username")}!</h1>
          {/* Hiển thị nội dung đã đăng nhập */}
        </div>
      );
    }

    return (
      <div>
        <div className='form'>
          <div className='form-toggle' />
          <div className='form-panel one'>
            <div className='form-header'>
              <h1>Account Login</h1>
            </div>
            <div className='form-content'>
              <form onSubmit={this.handleLoginSubmit}>
                <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    required
                    onChange={this.handleInputChange}
                  />
                  {errors.username && (
                    <div className='error'>{errors.username}</div>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    required
                    onChange={this.handleInputChange}
                  />
                  {errors.password && (
                    <div className='error'>{errors.password}</div>
                  )}
                </div>
                <div className='form-group'>
                  <label className='form-remember'>
                    <input type='checkbox' />
                    Remember Me{" "}
                  </label>
                  <a className='form-recovery' href='#'>
                    Forgot Password?
                  </a>
                </div>
                <div className='form-group'>
                  <button type='submit'>Log In</button>
                </div>
              </form>
            </div>
          </div>
          <div className='form-panel two'>
            <div className='form-header'>
              <h1>Register Account</h1>
            </div>
            <div className='form-content'>
              <form onSubmit={this.handleRegisterSubmit}>
                <div className='form-group'>
                  <label htmlFor='username'>Username</label>
                  <input
                    type='text'
                    id='username'
                    name='username'
                    required
                    onChange={this.handleInputChange}
                  />
                  {errors.username && (
                    <div className='error'>{errors.username}</div>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    required
                    onChange={this.handleInputChange}
                  />
                  {errors.password && (
                    <div className='error'>{errors.password}</div>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='cpassword'>Confirm Password</label>
                  <input
                    type='password'
                    id='cpassword'
                    name='cpassword'
                    required
                    onChange={this.handleInputChange}
                  />
                  {errors.cpassword && (
                    <div className='error'>{errors.cpassword}</div>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    onChange={this.handleInputChange}
                  />
                  {errors.email && <div className='error'>{errors.email}</div>}
                </div>
                <div className='form-group'>
                  <button type='submit'>Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
