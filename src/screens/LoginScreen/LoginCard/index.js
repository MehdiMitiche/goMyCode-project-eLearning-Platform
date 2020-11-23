import React from "react";
import { Tabs } from "antd";
import "./loginCard.css";
import LoginForm from "../../../components/LoginForm";
import SigninForm from "../../../components/SignInForm";
import { useSelector, useDispatch } from "react-redux";
import { SET_STATE } from "../../../redux/actions/authActions";
import axios from "axios";
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;

const API_URL = "http://localhost:8080";

const LoginCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { login, register } = useSelector((state) => state.auth);
  const onLogin = () => {
    //API CALL
  };

  const onRegister = async () => {
    try {
      dispatch({
        type: SET_STATE,
        payload: { register: { ...register, loading: true } },
      });
      const response = await axios.post(`${API_URL}/auth/register`, register);
      if (!response || response.status !== 201)
        dispatch({
          type: SET_STATE,
          payload: { register: { ...register, error: "Err !" } },
        });
      localStorage.setItem("e-learning-token", response.data.token);
      history.push("/");
      dispatch({
        type: SET_STATE,
        payload: {
          register: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            password: "",
            passwordConfirm: "",
            error: "",
            loading: false,
          },
        },
      });
    } catch (err) {
      dispatch({
        type: SET_STATE,
        payload: { register: { ...register, error: "Err !" } },
      });
    }
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
      payload: { register: { ...register, [`${key}`]: val } },
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
