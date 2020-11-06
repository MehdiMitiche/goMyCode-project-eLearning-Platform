import React from "react";
import "./signinForm.css";
import { Input, Button } from "antd";

const SigninForm = () => {
  return (
    <div className="login-form-container">
      <div className="row">
        <Input
          className="login-input"
          placeholder="FIRST NAME"
          onChange={(e) => console.log(e.target.value)}
        />
        <Input
          className="login-input"
          placeholder="FIRST NAME"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
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
          placeholder="PHONE NUMBER"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="row">
        <Input
          className="login-input"
          placeholder="PHONE NUMBER"
          onChange={(e) => console.log(e.target.value)}
        />
        <Input
          className="login-input"
          placeholder="PHONE NUMBER"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="row">
        <Button type="primary">SUBMIT</Button>
      </div>
    </div>
  );
};

export default SigninForm;
