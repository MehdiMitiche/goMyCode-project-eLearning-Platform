import React from "react";
import "./homeBody.css";
import CourseCard from "./CourseCard";
import { useHistory } from "react-router-dom";

const COURSES = [
  {
    id: 1,
    title: "Redis for Python Developers",
    description:
      "RU102PY provides a deep dive into Python application development with Redis. You can expect to learn how to make connections to Redis, store and retrieve",
    img:
      "https://lh3.googleusercontent.com/proxy/aKZ9IEctHXtCm34hytOMfsviIPW5LYQpLd5vbYtqUm9oD1MqgsH51SqVHAZ_6aCkWfwwJFLphqrTBWWC4NMretELghi8uf8ozU19ZtoZgk9F54Pz-AhU9p-MoVWr_7TIYUiRyjWa",
  },
  {
    id: 1,
    title: "Redis for Python Developers",
    description:
      "RU102PY provides a deep dive into Python application development with Redis. You can expect to learn how to make connections to Redis, store and retrieve",
    img:
      "https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/470xauto/2ea638bf5532abe5081dabb0fbecbc2d/mongo-db-logo.png",
  },
  {
    id: 1,
    title: "Redis for Python Developers",
    description:
      "RU102PY provides a deep dive into Python application development with Redis. You can expect to learn how to make connections to Redis, store and retrieve",
    img:
      "https://www.erasmuslifebudapest.com/wp-content/uploads/2018/11/node-js-main.jpg",
  },
  {
    id: 1,
    title: "Redis for Python Developers",
    description:
      "RU102PY provides a deep dive into Python application development with Redis. You can expect to learn how to make connections to Redis, store and retrieve",
    img: "https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png",
  },
  {
    id: 1,
    title: "Redis for Python Develdopers",
    description:
      "RU102PY provides a deep dive into Python application development with Redis. You can expect to learn how to make connections to Redis, store and retrieve",
    img: "https://reactjs.org/logo-og.png",
  },
];

const HomeBody = () => {
  const history = useHistory();
  return (
    <div className="home-body-container">
      <div className="home-body-content">
        {COURSES.map((course, i) => (
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
