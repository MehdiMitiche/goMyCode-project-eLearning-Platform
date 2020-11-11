import React from "react";
import "./poster.css";

const Poster = ({ children, style }) => {
  return (
    <div className="poster-container center" style={{ ...style }}>
      <div className="poster-content">{children}</div>
    </div>
  );
};

export default Poster;
