import { Button } from "antd";
import React from "react";
import "./courseCard.css";

const CourseCard = ({ title, description, img, action }) => {
  return (
    <div className="course-card-container col">
      <div
        className="course-card-img"
        style={{ backgroundImage: `url("/assets/reading.png")` }}
      ></div>
      <div className="course-card-info">
        <div className="course-card-title">{title}</div>
        <div className="course-card-description">{description}</div>
      </div>
      <div className="course-card-action center">
        <Button
          style={{
            width: "80%",
            fontWeight: 600,
            borderRadius: 6,
            height: "65%",
            fontSize: 18,
            color: "#5850ec",
          }}
          size="large"
          onClick={() => action()}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
