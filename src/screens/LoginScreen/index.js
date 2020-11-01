import React from "react";
import ImgSide from "./ImgSide";
import LoginSide from "./LoginSide";
import "./loginScreen.css";
import { isLoggedIn } from "../../helpers";
import { Redirect } from "react-router-dom";

const LoginScreen = () => {
  if (isLoggedIn()) return <Redirect to="/" />;
  return (
    <div className="login-screen-container row">
      <LoginSide style={{ flex: 2 }} />
      <ImgSide style={{ flex: 4 }} />
    </div>
  );
};

export default LoginScreen;
