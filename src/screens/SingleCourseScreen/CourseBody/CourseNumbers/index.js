import React from "react";
import "./courseNumbers.css";

const CourseNumbers = ({ data }) => {
  return (
    <div className="body-card-container">
      {Object.keys(data).map((key, i) => (
        <div key={key}>
          <div className="course-numbers-item">
            <div className="course-numbers-title">{key}</div>
            <div className="course-numbers-text">{data[key]}</div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CourseNumbers;
