import React from "react";
import Control from "./Control";
import ListStudent from "./ListStudent";
import Form from "./Form";

function ParentComp() {
  return (
    <div>
      <div className='row'>
        <div className='col-lg-7 grid-margin stretch-card'>
          <div className='card'>
            {/* START CONTROL */}
            <Control />
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <ListStudent />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <Form />
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}

export default ParentComp;
