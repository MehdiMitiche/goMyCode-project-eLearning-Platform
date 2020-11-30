import React, { useEffect } from "react";
import "./profileScreen.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { SET_STATE } from "../../redux/actions/profileActions";
//import logo from "../../assets/christian-louboutin.jpg";
import { FiSettings } from "react-icons/fi";

const API_URL = "http://localhost:8080";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("e-learning-token");

    const getUserInfo = async () => {
      const response = await axios.get(`${API_URL}/user/${userId}`, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response.data);
      dispatch({
        type: SET_STATE,
        payload: {
          profile: { ...response.data },
        },
      });
    };
    getUserInfo();
  }, []);

  return (
    <div className="profile-screen">
      <div className="container">
        <img
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
          className="profile-img"
        />
        <div className="profile-name">
          {`${profile.firstName} ${profile.lastName}`} <FiSettings />
        </div>
        <div className="email">{`${profile.email}`}</div>
        <div className="courses-container">sssssssssssss</div>
        <div className="user-courses-details">
          <div className="courses-container">liked courses</div>
          <div className="courses-container">favorite courses</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
