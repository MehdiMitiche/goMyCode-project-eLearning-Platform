import React from "react";
import "./navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

const Nabar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo center">
        <img
          src={
            "https://fabskill.com/assets/img/bus_cover/cropped/63_1565191317.webp"
          }
          alt="logo"
          width="200"
          height="50"
        />
      </div>
      <div className="navabar-sub-menu">
        <div className="navbar-sub-menu-item center">Courses</div>
        <div className="navbar-sub-menu-item center">Profile</div>
        <div className="navbar-sub-menu-item center">Logout</div>
      </div>
      <div className="navbar-sub-menu-mobile center">
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Nabar;
