import React from "react";
import { Tabs } from "antd";
import "./loginCard.css";
import LoginForm from "../../../components/LoginForm";
import SigninForm from "../../../components/SignInForm";

const { TabPane } = Tabs;

const LoginCard = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      size="large"
      onChange={(key) => console.log(key)}
    >
      <TabPane tab="LOGIN" key="1">
        <LoginForm />
      </TabPane>
      <TabPane tab="SIGN IN" key="2">
        <SigninForm />
      </TabPane>
    </Tabs>
  );
};

export default LoginCard;
