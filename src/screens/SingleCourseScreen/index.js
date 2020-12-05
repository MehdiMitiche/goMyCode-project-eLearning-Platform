import React, { useEffect } from "react";
import CourseBody from "./CourseBody";
import SingleCoursePoster from "./SingleCoursePoster";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../../config";
import axios from "axios";
import { SET_STATE } from "../../redux/actions/studyActions";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const SingleCourse = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  window.scrollTo(0, 0);
  const { id } = useParams();
  const courses = useSelector((state) => state.course.data) || [];
  const { progression, loading, error } = useSelector((state) => state.study);
  const singleCourse = courses.find((elem) => elem._id === id);
  useEffect(() => {
    const fetchData = async () => {
      if (!singleCourse) return history.push("/");
      const response = await axios
        .get(`${API_URL}/progression/${id}`, {
          headers: {
            authorization: localStorage.getItem("e-learning-token"),
          },
        })
        .catch((err) => {
          if (err.response.status === 401) return history.push("/login");
          return dispatch({
            type: SET_STATE,
            payload: { loading: false, error: err.response.data.msg },
          });
        });
      if (response.status === 200)
        return dispatch({
          type: SET_STATE,
          payload: {
            loading: false,
            error: "",
            course: singleCourse,
            progression: { ...progression, ...response.data, started: true },
          },
        });
      return dispatch({
        type: SET_STATE,
        payload: {
          loading: false,
          error: "",
          course: singleCourse,
          progression: { ...progression, started: false },
        },
      });
    };
    fetchData();

    // eslint-disable-next-line
  }, [id]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <SingleCoursePoster {...singleCourse} {...progression} id={id} />
          <CourseBody {...singleCourse} />
        </>
      )}
    </div>
  );
};

export default SingleCourse;
