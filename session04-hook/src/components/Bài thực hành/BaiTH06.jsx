import React, { useState } from "react";

function BaiTH06() {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    alert(`${data.name} - ${data.email} - ${data.phone}`);
  };

  console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Name</label>
        <input
          onChange={handleChange}
          value={data.name}
          name='name'
          type='text'
        />
        <br />
        <label htmlFor=''>Email</label>
        <input
          onChange={handleChange}
          value={data.email}
          name='email'
          type='text'
        />
        <br />
        <label htmlFor=''>Phone</label>
        <input
          onChange={handleChange}
          value={data.phone}
          name='phone'
          type='number'
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default BaiTH06;
