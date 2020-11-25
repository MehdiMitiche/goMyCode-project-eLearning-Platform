import React from "react";
import "./infoList.css";

const InfoList = ({ data, title }) => {
  return (
    <div className="body-card-container">
      <div className="info-list-title">{title}</div>
      <ul className="info-list">
        {data.map((elem, i) => (
          <li key={i}>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
