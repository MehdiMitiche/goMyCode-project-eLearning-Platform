import React from "react";
import CourseOutline from "./CourseOutline";
import "./main.css";
import MainDescription from "./MainDescription";

const Main = ({ whatYouWillLearn, whatYouWillBuild, chapters }) => {
  return (
    <div className="body-card-container">
      <MainDescription title="What you’ll learn" data={whatYouWillLearn} />
      <MainDescription title="What you’ll build" data={whatYouWillBuild} />
      <CourseOutline />
    </div>
  );
};

export default Main;
