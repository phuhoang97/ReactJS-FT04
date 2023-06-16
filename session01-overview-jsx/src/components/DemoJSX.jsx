// rcc

import React, { Component } from "react";

class DemoJSX extends Component {
  render() {
    const greeting = "Hello world !!!";
    const people = {
      name: "Nam Anh đẹp zaii",
      course: "ReactJS",
    };
    return (
      <div>
        {/* Phép nội suy trong jsx */}
        {/* Lưu ý: 
         + class => className
         + các thuộc tính sẽ được viết theo camelCase ví dụ: background-color => backgroundColor
         + các sự kiện cũng sẽ viết theo camelCase ví dụ: onclick => onClick, onchange => onChange 
        */}
        <h2
          style={{ backgroundColor: "pink", color: "white" }}
          className='container'
        >
          {greeting}
        </h2>
        <p>
          studentName: {people.name} - Khóa học: {people.course}
        </p>
      </div>
    );
  }
}

export default DemoJSX;
