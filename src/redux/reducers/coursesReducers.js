import { SET_STATE } from "../actions/coursesActions";
const initialState = {
  data: null,
  loading: false,
  error: "",
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default courseReducer;
