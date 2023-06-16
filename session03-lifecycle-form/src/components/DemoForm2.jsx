import React, { Component } from "react";

export default class DemoForm2 extends Component {
  constructor() {
    super();
    this.state = {
      course: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      course: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Khóa học bạn chọn là: " + this.state.course);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Chọn khóa học: </label>
          <select onChange={this.handleChange}>
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='Javascript'>Javascript</option>
            <option value='ReactJS'>ReactJS</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
