import React from "react";
import "./loginSide.css";
import LoginCard from "../LoginCard";

const LoginSide = ({ style }) => {
  return (
    <div style={{ ...style }} className="center col login-side-container">
      <div className="login-logo center">
        <img
          src={
            "https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp"
          }
          width="200"
          alt="login-pic"
        />
      </div>
      <div className="login-card-container">
        <LoginCard />
      </div>
      <div className="login-footer">
        All rights reserverd 2021 ® GoMyCode Algeria
      </div>
    </div>
  );
};

export default LoginSide;
