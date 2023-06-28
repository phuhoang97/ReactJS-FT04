import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  // Khai báo searchParam
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name Course</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ReactJS</td>
            <td>12000</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ Course: "ReactJS", Price: "120000" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>NodeJS</td>
            <td>14000</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ Course: "NodeJS", Price: "140000" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Chi tiết khóa học</h3>
      <p>
        Khóa học tên: {searchParam.get("Course")} - Giá tiền:
        {searchParam.get("Price")}
      </p>
    </div>
  );
}

export default Course;
