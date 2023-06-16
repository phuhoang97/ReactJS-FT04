import React, { Component } from "react";

export default class Baitap3 extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  handleClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div>
        Baitap3
        <button onClick={this.handleClick}>click me</button>
        <div>{this.state.value}</div>
      </div>
    );
  }
}
