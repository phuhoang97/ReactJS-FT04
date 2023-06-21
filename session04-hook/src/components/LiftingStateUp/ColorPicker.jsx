import React from "react";

function ColorPicker(props) {
  const { setColorParent, number } = props;
  // Cách 1:
  // const handleColor = (e) => {
  //   props.changeColor(e.target.value);
  // };

  // Cách 2:

  console.log(number);

  const handleColor = (e) => {
    setColorParent(e.target.value);
  };
  return (
    <div>
      <input type='color' onChange={handleColor} />
    </div>
  );
}

export default ColorPicker;
