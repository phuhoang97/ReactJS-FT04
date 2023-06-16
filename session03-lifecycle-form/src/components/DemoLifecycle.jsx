import React, { Component } from "react";

export default class DemoLifecycle extends Component {
  // Lifecycle là vòng đời của component
  // Gồm 4 giai đoạn: Khởi tạo, Mounting, Updating, Unmounting
  // 1. Khởi tạo:
  // Nhiệm vụ: Tạo các state ban đầu để sử dụng => this.state={}
  // 2. Mounting:
  // componentWillMount => Render => componentDidMount
  // 3. Updating:
  // componentWillReceiveProps => shouldComponentUpdate => UNSAFE_componentWillUpdate => componentDidUpdate
  // 4. Unmounting
  // componentWillUnmount

  UNSAFE_componentWillMount() {
    console.log("1. componentWillMount");
  }

  componentDidMount() {
    console.log("3. componentDidMount");
  }

  componentWillReceiveProps(){}

  shouldComponentUpdate() {}

  UNSAFE_componentWillUpdate(){}

  componentDidUpdate() {}

  componentWillUnmount() {}
 
  render() {
    console.log("2. Render");
    return <div>DemoLifecycle</div>;
  }
}
