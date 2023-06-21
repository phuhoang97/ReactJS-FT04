import React from "react";

// R-5: Lấy dữ liệu từ map bên listStudent
function Student({ keyStudent, inforStudent }) {
  return (
    <tr key={keyStudent}>
      <td>{keyStudent + 1}</td>
      <td>{inforStudent.studentId}</td>
      <td>{inforStudent.studentName}</td>
      <td>{inforStudent.age}</td>
      <td>{inforStudent.gender ? "Nam" : "Nữ"}</td>
      <td>
        <div className='template-demo'>
          <button type='button' className='btn btn-danger btn-icon-text'>
            Xem
          </button>
          <button type='button' className='btn btn-warning btn-icon-text'>
            Sửa
          </button>
          <button type='button' className='btn btn-success btn-icon-text'>
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
