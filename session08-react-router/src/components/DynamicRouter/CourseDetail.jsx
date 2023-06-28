import React from "react";
import { useParams } from "react-router-dom";

function CourseDetail() {
  // useParams
  const paramId = useParams();
  console.log(paramId);
  return <div>Khóa học có id: {paramId.id}</div>;
}

export default CourseDetail;
