import React from "react";
import CourseBody from "./CourseBody";
import SingleCoursePoster from "./SingleCoursePoster";

const SingleCourse = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <SingleCoursePoster />
      <CourseBody />
    </div>
  );
};

export default SingleCourse;
