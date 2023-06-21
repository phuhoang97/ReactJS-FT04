import React, { useState } from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  // R-1: Thêm dữ liệu vào listStudent
  const [students, setStudents] = useState([
    {
      studentId: "SV001",
      studentName: "Nguyễn Văn A",
      age: 20,
      gender: true,
      birthDate: "12/02/2022",
      birthPlace: "HN",
      address: "HN",
    },
    {
      studentId: "SV002",
      studentName: "Nguyễn Thị B",
      age: 20,
      gender: false,
      birthDate: "14/04/2000",
      birthPlace: "DN",
      address: "DN",
    },
    {
      studentId: "SV003",
      studentName: "Nguyễn Văn C",
      age: 20,
      gender: true,
      birthDate: "18/06/1988",
      birthPlace: "HCM",
      address: "HCM",
    },
  ]);

  // C-1: Làm toggle để bật tắt form => khai báo các state
  const [actionName, setActionName] = useState("ADD");
  const [toggle, setToggle] = useState(false);

  // C-2: Khai báo hàm để truyền xuống con (lifting state up)
  const handleToggleAction = (toggle, action) => {
    setActionName(action);
    setToggle(toggle);
  };

  // C-7: Viết hàm submit để truyền cho component con
  const handleSubmitAdd = (newStudent, toggle) => {
    setStudents([...students, newStudent]);
    setToggle(toggle);
  };

  // U-2: Khai báo state để lưu trữ student
  const [selectStudent, setSelectStudent] = useState({});

  // U-3: Khai báo hàm handleUpdateStudent để truyền xuống listStudent
  const handleUpdateStudent = (selectStudent, toggle, actionName) => {
    setSelectStudent(selectStudent);
    setToggle(toggle);
    setActionName(actionName);
  };

  // U-10: Khai báo hàm submit update để truyền xuống form
  const handleSubmitUpdate = (studentUpdate, toggle) => {
    const update = students.map((e) =>
      e.studentId == studentUpdate.studentId ? studentUpdate : e
    );
    setStudents(update);
    setToggle(toggle);
  };

  return (
    <div>
      <div className='row'>
        <div className='col-lg-7 grid-margin stretch-card'>
          <div className='card'>
            {/* START CONTROL */}
            <Control toggle={toggle} actionToggle={handleToggleAction} />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            {/* R-2 truyền dữ liệu xuống listStudent để hiển thị */}
            {/* U-4: Truyền dữ liệu xuống ListStudent */}
            <ListStudent
              listStudentProps={students}
              handleUpdateStudent={handleUpdateStudent}
            />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        {/* C-6: Nhận dữ liệu từ toggle để làm toggle */}
        {/* C-11: Truyền hàm handleSubmitUpdate xuống cho Form */}
        {/* U-16: Truyền selectStudent để có input có giá trị */}
        {toggle ? (
          <Form
            submitForm={handleSubmitAdd}
            actionName={actionName}
            handleSubmitUpdate={handleSubmitUpdate}
            selectStudent={selectStudent}
          />
        ) : (
          <></>
        )}
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default ParentComp;
