import React from "react";
import "./loginForm.css";
import { Input, Button } from "antd";

const LoginForm = ({
  onChangeLogin,
  onLogin,
  email,
  password,
  loading,
  error,
}) => {
  return (
    <div className="login-form-container">
      <div className="row">
        <Input
          onChange={(e) => onChangeLogin("email", e.target.value)}
          value={email}
          className="login-input"
          placeholder="EMAIL"
        />
      </div>
      <div className="row">
        <Input
          onChange={(e) => onChangeLogin("password", e.target.value)}
          value={password}
          className="login-input"
          placeholder="PASSWORD"
          type="password"
        />
      </div>
      <div className="row">
        <div className="err-msg">{error}</div>
      </div>
      <div className="row">
        <Button
          type="primary"
          size="large"
          onClick={() => onLogin()}
          loading={loading}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
