import React, { Component } from "react";

export default class Baitap5 extends Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      textInput: event.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bạn đã nhập là : ${this.state.textInput}`);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onInput={this.handleChange}
            value={this.state.textInput}
          ></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
