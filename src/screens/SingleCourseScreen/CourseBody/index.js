import React from "react";
import "./courseBody.css";
import CourseNumbers from "./CourseNumbers";
import InfoList from "./InfoList";
import InstructorCard from "./InstructorCard";
import Main from "./Main";

const CourseBody = ({ whatYouWillLearn, whatYouWillBuild, chapters }) => {
  return (
    <div className="course-body-container center">
      <div className="course-body-content">
        <div className="body-main">
          <Main
            whatYouWillLearn={whatYouWillLearn}
            whatYouWillBuild={whatYouWillBuild}
            chapters={chapters}
          />
        </div>
        <div className="body-info">
          <CourseNumbers
            data={{
              "Course Number": "RU102JS",
              starts: "November 10, 2020",
              Ends: "December 17, 2020",
              "Estimated Effort": "3 hours per week",
            }}
          />
          <InfoList
            title="Prerequisites"
            data={[
              "The JavaScript programming language (including ES6 features)",
              "The Node.js programming model",
              "The basics of the Express web application framework",
              "Redis and Redis Data Structures (approximately to the level covered in the RU101 course)",
            ]}
          />
          <InfoList
            title="Software Requirements"
            data={[
              "Web Browser: Firefox 39.0+ or Chrome 43+ (Internet Explorer is currently not supported)",
              "Operating System: Mac OS X 10.7+ 64-bit, Ubuntu 14.04+ 64-bit, or Windows 10",
              "Software: Docker, or local installs of Node.js 8.9.3 or higher and Redis 5 or 6",
              "Non-blocked access to youtube.com, university.redislabs.com and github.com",
            ]}
          />
          <InstructorCard />
        </div>
      </div>
    </div>
  );
};

export default CourseBody;
