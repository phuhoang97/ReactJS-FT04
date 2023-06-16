import React, { Component } from "react";

export default class DemoForm extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nội dung là: " + this.state.text);
  };

  render() {
    console.log(this.state.text);
    return (
      <div>
        {/* Khi sử dụng form => onSubmit */}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor=''>Student Name:</label>
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
