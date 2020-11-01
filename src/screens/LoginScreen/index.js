import React from "react";
import ImgSide from "./ImgSide";
import LoginSide from "./LoginSide";
import "./loginScreen.css";

const LoginScreen = () => {
  return (
    <div className="login-screen-container row">
      <LoginSide style={{ flex: 2 }} />
      <ImgSide style={{ flex: 4 }} />
    </div>
  );
};

export default LoginScreen;
