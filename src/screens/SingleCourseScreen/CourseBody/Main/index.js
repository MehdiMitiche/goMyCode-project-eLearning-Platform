import React from "react";
import CourseOutline from "./CourseOutline";
import "./main.css";
import MainDescription from "./MainDescription";

const Main = () => {
  return (
    <div className="body-card-container">
      <MainDescription
        title="What you’ll learn"
        data="RU102JS provides a deep dive into Redis for Node.js applications. You can expect to learn how to make connections to Redis, store and retrieve data, and leverage essential Redis features such as sorted sets and streams."
      />
      <MainDescription
        title="What you’ll build"
        data="As the course progresses, you’ll write code that implements the features of a solar power monitoring application. This real-world project consists of three components:

        A command-line data loading application
        A REST API backend using Express
        A Vue.js front end (No Vue experience required!)
        We’ll store data in Redis using a data model that we’ll develop along the way. The project will leverage a number of Redis data structures, including:
        
        Hashes
        Sets
        Sorted sets
        Geospatial indexes
        Streams
        We’ll provide examples of best practices such as the use of pipelining, transactions, and Lua scripting. We’ll also demonstrate several common Redis patterns, including rate-limiting for API calls and leaderboards for top-producing solar sites."
      />
      <CourseOutline />
    </div>
  );
};

export default Main;
