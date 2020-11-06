import React from "react";
import "./navbar.css";

const Nabar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo center">LOGO</div>
      <div className="navabar-sub-menu">
        <div className="navbar-sub-menu-item center">Courses</div>
        <div className="navbar-sub-menu-item center">Profile</div>
        <div className="navbar-sub-menu-item center">Logout</div>
      </div>
    </div>
  );
};

export default Nabar;
