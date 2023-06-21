import React, { useEffect, useState } from "react";

// C-8: nhận dữ liệu từ parent
// U-12: Nhận dữ liệu từ parent
// U-17: Lấy selectStudent từ parent
function Form({ submitForm, actionName, handleSubmitUpdate, selectStudent }) {
  // C-9: Khai báo state để lưu trữ các dữ liệu trong các ô input
  const [formInput, setFormInput] = useState({
    studentId: "",
    studentName: "",
    age: 0,
    gender: false,
    birthDate: "",
    birthPlace: "",
    address: "",
  });

  // C-10: Sử dụng cú pháp des để lấy các key trong formInput
  const {
    studentId,
    studentName,
    age,
    gender,
    birthDate,
    birthPlace,
    address,
  } = formInput;

  // C-11: Viết hàm handleChangeInput để nhận giá trị của các ô input
  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInput({ ...formInput, [name]: value });
  };

  // C-12: Viết hàm handleSubmitForm để submit dữ liệu
  const handleSubmitForm = (e) => {
    e.preventDefault();
    submitForm(formInput, false);
  };

  // U-14: Viết hàm handleUpdateForm để submit dữ liệu khi update
  const handleUpdateForm = (e) => {
    e.preventDefault();
    handleSubmitUpdate(formInput, false);
  };

  // U-15: Sử dụng useEffect để load dữ liệu cho các input
  useEffect(() => {
    setFormInput(selectStudent);
  }, [selectStudent]);

  return (
    <div className='col-5 grid-margin'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>Thông tin sinh viên</h3>
          <form className='form-sample'>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Mã sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  value={studentId}
                  name='studentId'
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tên sinh viên</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  value={studentName}
                  name='studentName'
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Tuổi</label>
              <div className='col-sm-9'>
                <input
                  type='text'
                  className='form-control'
                  value={age}
                  name='age'
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Giới tính</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  value={gender}
                  name='gender'
                  onChange={handleChangeInput}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Ngày sinh</label>
              <div className='col-sm-9'>
                <input
                  className='form-control'
                  placeholder='dd/mm/yyyy'
                  value={birthDate}
                  name='birthDate'
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Nơi sinh</label>
              <div className='col-sm-9'>
                <select
                  className='form-control'
                  value={birthPlace}
                  name='birthPlace'
                  onChange={handleChangeInput}
                >
                  <option value={"HN"}>Hà Nội</option>
                  <option value={"HCM"}>TP. Hồ Chí Minh</option>
                  <option value={"DN"}>Đà Nẵng</option>
                  <option value={"QN"}>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <label className='col-sm-3 col-form-label'>Địa chỉ</label>
              <div className='col-sm-9'>
                <textarea
                  className='form-control'
                  defaultValue={""}
                  value={address}
                  name='address'
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            {/* U-13: Sử dụng toán tử 3 ngôi để chuyển đổi button */}
            {actionName === "ADD" ? (
              <button
                type='submit'
                className='btn btn-primary me-2'
                onClick={handleSubmitForm}
              >
                Submit
              </button>
            ) : (
              <button
                type='submit'
                className='btn btn-primary me-2'
                onClick={handleUpdateForm}
              >
                Edit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
