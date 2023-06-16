import React, { Component } from "react";

export default class Baitap6 extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      array: [],
      total: 0,
    };
  }
  handleChange = (e) => {
    this.setState({
      number: +e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      array: [...this.state.array, this.state.number],
      total: this.state.total + this.state.number,
      number: "",
    });
  };
  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
          <input type='text' name='' id='' onChange={this.handleChange} />
        </form>
        <p>{this.state.array.join(" + ") + "=" + this.state.total}</p>
      </div>
    );
  }
}
