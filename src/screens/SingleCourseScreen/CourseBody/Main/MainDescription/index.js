import React from "react";
import "./mainDescription.css";

const MainDescription = ({ title, data }) => {
  return (
    <div className="main-description">
      <div className="main-description-title">{title}</div>
      <div className="main-description-data">{data}</div>
      <hr className="main-description-hr" />
    </div>
  );
};

export default MainDescription;
