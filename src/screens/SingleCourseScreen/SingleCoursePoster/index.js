import { Button } from "antd";
import React from "react";
import "./singleCoursePoster.css";
import Poster from "../../../components/Poster";

const SingleCoursePoster = () => {
  return (
    <Poster style={{ minHeight: "70vh" }}>
      <div className="poster-information">
        <div className="poster-sub-title">Self paced course</div>
        <div className="poster-title">Redis for JavaScript Developers</div>
        <div className="poster-description    ">
          Build full-fledged Redis applications with Node.js and Express.
        </div>
        <div className="poster-register">
          <Button
            type="primary"
            size="large"
            className="poster-register-btn center"
          >
            Register
          </Button>
        </div>
      </div>
      <div className="poster-img"></div>
    </Poster>
  );
};

export default SingleCoursePoster;
