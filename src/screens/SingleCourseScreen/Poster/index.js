import { Button } from "antd";
import React from "react";
import "./poster.css";

const Poster = () => {
  return (
    <div className="poster-container center">
      <div className="poster-content">
        <div className="poster-information">
          <div className="poster-sub-title">Self paced course</div>
          <div className="poster-title">Redis for JavaScript Developers</div>
          <div className="poster-description    ">
            Build full-fledged Redis applications with Node.js and Express.
          </div>
          <div className="poster-register">
            <Button type="primary" size="large">
              Register
            </Button>
          </div>
        </div>
        <div className="poster-img"></div>
      </div>
    </div>
  );
};

export default Poster;
