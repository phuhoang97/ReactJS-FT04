import React from "react";
import { useParams } from "react-router-dom";

function CourseDetailByTypeId() {
  const param = useParams();
  return (
    <div>
      Khóa học có id: {param.id} - Type: {param.type}
    </div>
  );
}

export default CourseDetailByTypeId;
