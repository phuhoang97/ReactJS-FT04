import React, { Component } from "react";
import "./DemoForm3.css";

export default class DemoForm3 extends Component {
  constructor() {
    super();
    this.state = {
      studentName: "",
      age: "",
      course: "",
    };
  }

  handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    Tên sinh viên là: ${this.state.studentName}
    Tuổi: ${this.state.age}
    Khóa học: ${this.state.course}
    `);
  };

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <label>Tên sinh viên: </label>
          <input
            name='studentName'
            type='text'
            value={this.state.studentName}
            onChange={this.handleChange}
          />
          <br />
          <label>Tuổi </label>
          <input
            type='text'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label>Chọn khóa học: </label>
          <select
            value={this.state.course}
            name='course'
            onChange={this.handleChange}
          >
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='Javascript'>Javascript</option>
            <option value='ReactJS'>ReactJS</option>
          </select>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
