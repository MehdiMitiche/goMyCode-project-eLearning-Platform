import React from "react";
import HomePoster from "./HomePoster";
import HomeBody from "./HomeBody";
/*
const COURSES_DATA = [
  {
    id: 1,
    img: "/assets/test1.png",
    title: "Introduction to Redis Data Structures",
    shortDescription:
      "RU101 is an introductory course, perfect for developers new to Redis. In this course, you'll learn about the data structures in Redis, and you'll see how take benifit from redis",
    longDescription:
      "RU101 is an introductory course, perfect for developers new to Redis. In this course, you'll learn about the data structures in Redis, and you'll see how take benifit from redis",
    date: "01/11/2020",
    estimatedEffort: "3 hours per week",
    softwareRequirement: [
      "Web Browser: Firefox 39.0+ or Chrome 43+ (Internet Explorer is currently not supported)",
      "Operating System: Mac OS X 10.7+ 64-bit, Ubuntu 14.04+ 64-bit, or Windows 8+ (64-bit)",
      " Non-blocked access to youtube.com and university.redislabs.com",
    ],
    istructorId: 0,
    program: [
      {
        title: "Introduction",
        content: [
          "Web Overview",
          "MERN Stack ecosystem",
          "API and web developmemnt",
        ],
      },
      {
        title: "Master HTML/CSS",
        content: [
          "Web Overview",
          "MERN Stack ecosystem",
          "API and web developmemnt",
        ],
      },
      {
        title: "Play with JS dom !",
        content: [
          "Web Overview",
          "MERN Stack ecosystem",
          "API and web developmemnt",
        ],
      },
      {
        title: "Build real apps with React",
        content: [
          "Web Overview",
          "MERN Stack ecosystem",
          "API and web developmemnt",
        ],
      },
      {
        title: "Optmized APIs with EXPRESS JS",
        content: [
          "Web Overview",
          "MERN Stack ecosystem",
          "API and web developmemnt",
        ],
      },
    ],
  },
];
*/
const HomeScreen = () => {
  return (
    <div>
      <HomePoster />
      <HomeBody />
    </div>
  );
};

export default HomeScreen;
