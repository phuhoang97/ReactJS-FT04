import React, { Component } from "react";

export default class Baitap7 extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      fontSize: 20,
      isShow: true,
      content:
        "Trong bài  thực hành này, sẽ tạo giao diện ứng dụng props state và event để thay đổi nội dung của 1 đoạn  văn bản",
    };
  }
  handleToggle = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  handleChangeBackground = () => {
    this.setState({
      color: "black",
      fontSize: 10,
      content: "Hiểu và nắm được cách sử dụng props và state trong React",
    });
  };
  render() {
    return (
      <div>
        {this.state.isShow ? (
          <>
            <p style={{ color: this.state.color }}>{this.state.content}</p>
            <button onClick={this.handleChangeBackground}>Change color</button>
          </>
        ) : (
          ""
        )}
        <button onClick={this.handleToggle}>show</button>
      </div>
    );
  }
}
