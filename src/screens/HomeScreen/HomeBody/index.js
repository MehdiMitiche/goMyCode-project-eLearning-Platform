import React from "react";
import "./homeBody.css";
import CourseCard from "./CourseCard";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeBody = () => {
  const { data } = useSelector((state) => state.course);
  const history = useHistory();
  return (
    <div className="home-body-container">
      <div className="home-body-content">
        {data.map((course, i) => (
          <CourseCard
            key={i}
            {...course}
            action={() => history.push(`/course/${course.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBody;
