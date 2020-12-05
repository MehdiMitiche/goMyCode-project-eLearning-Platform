import { Button } from "antd";
import React from "react";
import "./singleCoursePoster.css";
import Poster from "../../../components/Poster";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../../config";
import { SET_STATE } from "../../../redux/actions/studyActions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const SingleCoursePoster = ({ title, started, status, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { progression } = useSelector((state) => state.study);

  return (
    <Poster style={{ minHeight: "70vh" }}>
      <div className="poster-information">
        <div className="poster-sub-title">Self paced course</div>
        <div className="poster-title">{title}</div>
        <div className="poster-description">
          Build full-fledged Redis applications with Node.js and Express.
        </div>
        <div className="poster-register">
          <Button
            type="primary"
            size="large"
            className="poster-register-btn center"
            onClick={async () => {
              if (started) return history.push(`/studyCourse/${id}`);
              dispatch({
                type: SET_STATE,
                payload: {
                  loadingEnrol: true,
                },
              });
              const response = await axios
                .post(
                  `${API_URL}/progression/${id}`,
                  {},
                  {
                    headers: {
                      authorization: localStorage.getItem("e-learning-token"),
                    },
                  }
                )
                .catch((err) => {
                  console.log(err.response);
                  dispatch({
                    type: SET_STATE,
                    payload: {
                      loadingEnrol: false,
                    },
                  });
                });
              dispatch({
                type: SET_STATE,
                payload: {
                  loadingEnrol: false,
                  progression: {
                    ...progression,
                    ...response.data.result,
                  },
                },
              });
              history.push(`/studyCourse/${id}`);
            }}
          >
            {!started
              ? "ENROLL IN COURSe"
              : status
              ? "COMPLETED COURSE"
              : "CONTINUE LEARNING"}
          </Button>
        </div>
      </div>
      <div className="poster-img"></div>
    </Poster>
  );
};

export default SingleCoursePoster;
