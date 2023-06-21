import React, { useState } from "react";

function BaiTH07() {
  const [doC, setDoC] = useState(0);
  const [doF, setDoF] = useState(0);

  const handleChangeDoC = (e) => {
    setDoC(e.target.value);
    setDoF((doC * 9) / 5 + 32);
  };
  const handleChangeDoF = (e) => {
    setDoF(e.target.value);
    setDoC(((doF - 32) * 5) / 9);
  };

  return (
    <div>
      <label> do C </label>

      <input type='number' onChange={handleChangeDoC} value={doC} />
      <br />
      <label> do F </label>
      <input type='number' onChange={handleChangeDoF} value={doF} />
    </div>
  );
}

export default BaiTH07;
