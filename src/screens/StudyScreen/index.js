import React from "react";
import "./studyScreen.css";
import {
  AiOutlineCheckSquare,
  AiFillContainer,
  AiOutlineCheckCircle,
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { FcStart } from "react-icons/fc";
import { useHistory } from "react-router-dom";
import Poster from "../../components/Poster";
import { Button, Modal } from "antd";
import into from "../../assets/undraw_education_f8ru.png";
import success from "../../assets/undraw_completed_ngx6.png";
import { useSelector, useDispatch } from "react-redux";
import { SET_STATE } from "../../redux/actions/studyActions";

const StudyScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { sidOpen, course, displayCours, progression } = useSelector(
    (state) => state.study
  );
  const OpenSide = () => {
    sidOpen === "-15%"
      ? dispatch({ type: SET_STATE, payload: { sidOpen: "0%" } })
      : dispatch({ type: SET_STATE, payload: { sidOpen: "-15%" } });
  };
  const openCourse = (id) => {
    dispatch({
      type: SET_STATE,
      payload: {
        displayCours: course.chapters.filter((el) => el.id === id),
        sidOpen: "-15%",
      },
    });
  };
  return (
    <>
      <Poster className="poster-content">
        <div className="btn" onClick={OpenSide}>
          {sidOpen !== "-15%" ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </div>
      </Poster>
      <div className="studyScreen-container center">
        <div className="studyScreen-side center col" style={{ left: sidOpen }}>
          <div className="lesson-title center col">
            {sidOpen !== "-15%" ? (
              <h3>
                Lesson :<br></br> {course.title}
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
                {sidOpen !== "-15%" ? (
                  <li className="center" key={i}>
                    <AiOutlineCheckSquare />
                    {el.title}
                  </li>
                ) : (
                  <li className="dot center" key={i}>
                    <AiOutlineCheckSquare />
                  </li>
                )}
              </>
            ))}
          </div>
        </div>
        {displayCours.length === 0 ? (
          <div className="course-intro center ">
            <div className="subtitle center col">
              <h1>{course.title}</h1>
              <blockquote>{course.subTitle}</blockquote>
              <img style={{ width: "400px" }} src={into} alt="img-intro"></img>
              <Button onClick={() => openCourse(1)}>
                Start course
                <FcStart />
              </Button>
            </div>
            <div className="whatYou center col">
              <p className="into-parag center col">
                <h4>what You Will LEarn </h4>
                {course.whatYouWillLEarn}
              </p>
              <p className="into-parag center col">
                <h4>what You Will Build </h4>
                {course.whatYouWillBuild}
              </p>
            </div>
          </div>
        ) : (
          <>
            {displayCours.map((data, i) => (
              <div className="course-details center col" key={i}>
                <div className="intro-course center col">
                  <h1>{data.title}</h1>
                  <p>{data.content}</p>
                </div>
                ​
                <Button
                  style={{ zIndex: "9999" }}
                  onClick={() =>
                    progression.chapterNumber < course.chapters.length - 1
                      ? (openCourse(data.id + 1),
                        dispatch({
                          type: SET_STATE,
                          payload: {
                            progression: {
                              ...progression,
                              chapterNumber: progression.chapterNumber + 1,
                            },
                          },
                        }))
                      : dispatch({
                          type: SET_STATE,
                          payload: {
                            progression: {
                              ...progression,
                              status: 1,
                              sucessModal: true,
                            },
                          },
                        })
                  }
                >
                  Next Course <AiOutlineDoubleRight />
                </Button>
              </div>
            ))}
          </>
        )}
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
            onClick={() => {
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
