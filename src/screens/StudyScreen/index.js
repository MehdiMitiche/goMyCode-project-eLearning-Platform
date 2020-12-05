import React from "react";
import "./studyScreen.css";
import {
  AiOutlineCheckSquare,
  AiFillContainer,
  AiOutlineCheckCircle,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { useHistory, useParams } from "react-router-dom";
import Poster from "../../components/Poster";
import { Button, Modal } from "antd";
import into from "../../assets/undraw_education_f8ru.png";
import success from "../../assets/undraw_completed_ngx6.png";
import { useSelector, useDispatch } from "react-redux";
import { SET_STATE } from "../../redux/actions/studyActions";
import ChapterContent from "./ChapterContent";
import axios from "axios";
import { API_URL } from "../../config";

const StudyScreen = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { sidOpen, course, progression, loading, error } = useSelector(
    (state) => state.study
  );
  const OpenSide = () => {
    sidOpen === "-14vw"
      ? dispatch({ type: SET_STATE, payload: { sidOpen: "0vw" } })
      : dispatch({ type: SET_STATE, payload: { sidOpen: "-14vw" } });
  };

  const nextChapter = async () => {
    dispatch({
      type: SET_STATE,
      payload: { loading: true },
    });
    window.scrollTo(0, 0);
    const response = await axios
      .put(
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
        return dispatch({
          type: SET_STATE,
          payload: { error: "Sorry ! Error occured ...", loading: false },
        });
      });

    if (!response || response.status !== 200)
      return dispatch({
        type: SET_STATE,
        payload: { error: "Sorry ! Error occured ,...", loading: false },
      });
    dispatch({
      type: SET_STATE,
      payload: { loading: false, error: "" },
    });
    if (progression.chapterNumber < course.chapters.length - 1) {
      return dispatch({
        type: SET_STATE,
        payload: {
          progression: {
            ...progression,
            chapterNumber: progression.chapterNumber + 1,
          },
        },
      });
    }
    dispatch({
      type: SET_STATE,
      payload: {
        progression: {
          ...progression,
          status: 1,
          sucessModal: true,
        },
      },
    });
  };

  return (
    <>
      <Poster
        style={{
          minHeight: "10vh",
        }}
      >
        <div className="btn" onClick={OpenSide}>
          {sidOpen !== "-14vw" ? (
            <AiOutlineMenuUnfold />
          ) : (
            <AiOutlineMenuFold />
          )}
        </div>
      </Poster>
      <div className="studyScreen-container center">
        <div
          className="study-sidebar"
          style={{ transform: `translateX(${sidOpen})` }}
        >
          <div className="lesson-title center col">
            {sidOpen !== "-14vw" ? (
              <h3>
                Lesson :
                <div className="sidebar-course-title">{course.title}</div>
              </h3>
            ) : (
              <li className="dot2 center">
                <AiFillContainer />
              </li>
            )}
          </div>
          <div className="lesson-content center col">
            {course.chapters.map((el, i) => (
              <>
                {sidOpen !== "-14vw" ? (
                  <li
                    onClick={() => {
                      if (progression.chapterNumber > i)
                        dispatch({
                          type: SET_STATE,
                          payload: {
                            progression: {
                              ...progression,
                              chapterNumber: i,
                            },
                          },
                        });
                    }}
                    className="center"
                    key={i}
                  >
                    <AiOutlineCheckSquare
                      style={{
                        color:
                          progression.chapterNumber < i
                            ? "grey"
                            : progression.chapterNumber === i
                            ? "black"
                            : "black",
                      }}
                    />
                    <span
                      style={{
                        color:
                          progression.chapterNumber < i
                            ? "grey"
                            : progression.chapterNumber === i
                            ? "black"
                            : "black",
                      }}
                    >
                      {el.title.toUpperCase()}
                    </span>
                  </li>
                ) : (
                  <li className="dot center" key={i}>
                    <AiOutlineCheckSquare
                      style={{
                        color:
                          progression.chapterNumber < i
                            ? "grey"
                            : progression.chapterNumber === i
                            ? "black"
                            : "black",
                      }}
                    />
                  </li>
                )}
              </>
            ))}
          </div>
        </div>
        <ChapterContent
          progression={progression}
          nextChapter={nextChapter}
          loading={loading}
          error={error}
        />
      </div>
      <Modal
        closable={false}
        title={
          <div className="modal-title center">
            <AiOutlineCheckCircle style={{ color: "green", fontSize: "2em" }} />
            <h3>Congratulations you have completed the course</h3>
          </div>
        }
        visible={progression.sucessModal}
        footer={
          <Button
            type="primary"
            size="large"
            onClick={() => {
              dispatch({
                type: SET_STATE,
                payload: {
                  progression: {
                    sucessModal: false,
                  },
                },
              });
              history.push("/");
            }}
          >
            Liste Of course
          </Button>
        }
        width="1000px"
      >
        <div className="img-success center">
          <img src={success} style={{ width: "400px" }} alt="success-img"></img>
        </div>
      </Modal>
    </>
  );
};
export default StudyScreen;
