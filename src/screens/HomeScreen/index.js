import React, { useEffect } from "react";
import HomePoster from "./HomePoster";
import HomeBody from "./HomeBody";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SET_STATE } from "../../redux/actions/coursesActions";
import { API_URL } from "../../config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useHistory } from "react-router-dom";

const HomeScreen = () => {
  const history = useHistory();
  const { loading, error } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: SET_STATE, payload: { loading: true } });
      const response = await axios
        .get(`${API_URL}/course`, {
          headers: {
            authorization: localStorage.getItem("e-learning-token"),
          },
        })
        .catch((err) => {
          if (err.response.status === 401) history.push("/login");
          return dispatch({
            type: SET_STATE,
            payload: { loading: false, error: err.response.data.msg },
          });
        });

      dispatch({
        type: SET_STATE,
        payload: {
          data: response.data,
          loading: false,
        },
      });
    };
    fetchData();

    return () => {
      dispatch({ type: SET_STATE, payload: { loading: true, error: "" } });
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <HomePoster />
      {loading ? <Loading /> : error ? <Error /> : <HomeBody />}
    </div>
  );
};

export default HomeScreen;
