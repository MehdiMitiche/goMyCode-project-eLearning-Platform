import React from "react";
import { Tabs } from "antd";
import "./loginCard.css";
import LoginForm from "../../../components/LoginForm";
import SigninForm from "../../../components/SignInForm";
import { useSelector, useDispatch } from "react-redux";
import { SET_STATE } from "../../../redux/actions/authActions";

const { TabPane } = Tabs;

const LoginCard = () => {
  const dispatch = useDispatch();
  const { login, register } = useSelector((state) => state.auth);
  const onLogin = () => {
    //API CALL
  };

  const onRegister = () => {
    //API CALL
  };

  const onChangeLogin = (key, val) => {
    dispatch({
      type: SET_STATE,
      payload: { login: { ...login, [`${key}`]: val } },
    });
  };
  const onChangeRegister = (key, val) => {
    dispatch({
      type: SET_STATE,
      payload: { register: { ...login, [`${key}`]: val } },
    });
  };
  return (
    <Tabs defaultActiveKey="1" size="large">
      <TabPane tab="LOGIN" key="1">
        <LoginForm {...login} onLogin={onLogin} onChangeLogin={onChangeLogin} />
      </TabPane>
      <TabPane tab="SIGN IN" key="2">
        <SigninForm
          {...register}
          onRegister={onRegister}
          onChangeRegister={onChangeRegister}
        />
      </TabPane>
    </Tabs>
  );
};

export default LoginCard;
