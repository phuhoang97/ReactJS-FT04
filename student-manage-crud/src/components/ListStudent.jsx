import React from "react";
import Student from "./Student";

// R-3: Sử dụng destructing để lấy props
// U-5: Nhận dữ liệu từ Parent
function ListStudent({ listStudentProps, handleUpdateStudent }) {
  // U-6: Khai báo hàm handleUpdate để truyền xuống Student
  const handleUpdate = (selectStudent, toggle, actionName) => {
    handleUpdateStudent(selectStudent, toggle, actionName);
  };
  return (
    <div>
      <div className='card-body'>
        <h3 className='card-title'>Danh sách sinh viên</h3>
        <div className='table-responsive pt-3'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {/* R-4: Hiển thị dữ liệu từ props truyền xuống */}
              {/* U-7: Truyền xuống cho Student */}
              {listStudentProps.map((element, index) => (
                <Student
                  keyStudent={index}
                  inforStudent={element}
                  handleUpdate={handleUpdate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListStudent;
