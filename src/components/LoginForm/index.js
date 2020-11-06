import React from "react";
import "./loginForm.css";
import { Input, Button } from "antd";

const LoginForm = ({ onChangeForm, onSubmitForm }) => {
  return (
    <div className="login-form-container">
      <div className="row">
        <Input
          className="login-input"
          placeholder="EMAIL"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="row">
        <Input
          className="login-input"
          placeholder="PASSWORD"
          type="password"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="row">
        <Button type="primary">SUBMIT</Button>
      </div>
    </div>
  );
};

export default LoginForm;
