import React from "react";
import "./signinForm.css";
import { Input, Button } from "antd";

const SigninForm = ({
  firstName,
  lastName,
  password,
  email,
  phone,
  passwordConfirm,
  onRegister,
  onChangeRegister,
  loading,
}) => {
  return (
    <div className="login-form-container">
      <div className="row">
        <Input
          onChange={(e) => onChangeRegister("firstName", e.target.value)}
          value={firstName}
          className="login-input"
          placeholder="FIRST NAME"
        />
        <Input
          onChange={(e) => onChangeRegister("lastName", e.target.value)}
          value={lastName}
          className="login-input"
          placeholder="LAST NAME"
        />
      </div>
      <div className="row">
        <Input
          onChange={(e) => onChangeRegister("email", e.target.value)}
          value={email}
          className="login-input"
          placeholder="EMAIL"
        />
      </div>
      <div className="row">
        <Input
          onChange={(e) => onChangeRegister("phone", e.target.value)}
          value={phone}
          className="login-input"
          placeholder="PHONE NUMBER"
        />
      </div>
      <div className="row">
        <Input
          type="password"
          onChange={(e) => onChangeRegister("password", e.target.value)}
          value={password}
          className="login-input"
          placeholder="PASSWORD"
        />
        <Input
          type="password"
          onChange={(e) => onChangeRegister("passwordConfirm", e.target.value)}
          value={passwordConfirm}
          className="login-input"
          placeholder="Password"
        />
      </div>
      <div className="row">
        <Button
          loading={loading}
          type="primary"
          size="large"
          onClick={() => onRegister()}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default SigninForm;
