import React from "react";
import Student from "./Student";

// R-3: Sử dụng destructing để lấy props
function ListStudent({ listStudentProps }) {
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
              {listStudentProps.map((element, index) => (
                <Student keyStudent={index} inforStudent={element} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListStudent;
