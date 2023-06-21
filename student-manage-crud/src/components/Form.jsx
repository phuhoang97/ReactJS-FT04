import React, { useState } from "react";

// C-8: nhận dữ liệu từ parent
function Form({ submitForm, actionName }) {
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

  console.log(formInput);
  // C-12: Viết hàm handleSubmitForm để submit dữ liệu
  const handleSubmitForm = (e) => {
    e.preventDefault();
    submitForm(formInput, false);
  };

  return (
    <div className='col-5 grid-margin'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>Thông tin sinh viên</h3>
          <form className='form-sample' onSubmit={handleSubmitForm}>
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
            <button type='submit' className='btn btn-primary me-2'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
