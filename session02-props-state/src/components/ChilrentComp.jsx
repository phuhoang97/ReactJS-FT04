import React, { Component } from "react";

export default class ChilrentComp extends Component {
  // State:
  // State dùng để lưu trữ dữ liệu trong component đó => có thể thay đổi được dữ liệu
  // Để sử dụng được state cần khai báo lớp bằng constructor
  // Và sử dụng super để gọi lớp
  // Để cập nhật lại state => sử dụng setState
  constructor() {
    super();
    this.state = {
      studentA: "Nam Anh",
      question: "Có hay trốn không?",
      anwser: "Khôngg",
      display: true,
    };
    // Khi sử dụng với function thường cần phải định nghĩa từ khóa this
    this.handleChangeState = this.handleChangeState.bind(this);
  }

  // Sử dụng với arrow function
  //   handleChangeState = () => {
  //     this.setState({
  //       anwser: "Cóoooooo",
  //     });
  //   };

  // sử dụng với function thường
  handleChangeState() {
    this.setState({
      anwser: "Cóoooooo",
    });
  }

  handleToggleDisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    console.log("Được re-render");
    return (
      <div>
        {/* Nhận props từ component cha */}
        <h2>
          {this.props.titleParent} - Khóa học: {this.props.course}
        </h2>
        <p>{this.props.children}</p>

        <h2>State</h2>
        <p>{this.state.studentA}</p>
        <p>
          {this.state.question} - {this.state.anwser}
        </p>
        {/* Quy tắc đặt tên
        với các hàm xử lý 1 việc gì đó => sẽ có tiền tố trước là handle
        với các hàm xử lý 1 sự kiện gì đó => sẽ có tiền tố đó là on
        */}
        <button onClick={this.handleChangeState}>Click !!!</button>

        {/* Cập nhật state liên tục */}
        {/* 
        
        if(this.state.display) {
        <div>
            <p>Anh Basck cọp sp có nhiệt tình không???</p>
            <p>Có</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
        </div>
        } else {
           <div>
            <p>Anh Basck cọp sp có nhiệt tình không???</p>
            <p>Rất nhiệt tình !!!</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        }
        */}
        {this.state.display ? (
          <div>
            <p>Anh Basck cọp sp có nhiệt tình không???</p>
            <p>Có</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        ) : (
          <div>
            <p>Anh Basck cọp sp có nhiệt tình không???</p>
            <p>Rất nhiệt tình !!!</p>
            <button onClick={this.handleToggleDisplay}>Click</button>
          </div>
        )}
      </div>
    );
  }
}
