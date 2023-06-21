import React from "react";

// R-5: Lấy dữ liệu từ map bên listStudent
// U-8: Nhận dữ liệu từ ListStudent
function Student({ keyStudent, inforStudent, handleUpdate }) {
  // U-9: Khai báo hàm handleEditStudent để cập nhật lại dữ liệu cho Parent
  const handleEditStudent = (index) => {
    handleUpdate(index, true, "UPDATE");
  };

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
          {/* U-1: Viết hàm để nhận được vị trí của phần tử */}
          <button
            type='button'
            className='btn btn-warning btn-icon-text'
            onClick={() => handleEditStudent(inforStudent)}
          >
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
