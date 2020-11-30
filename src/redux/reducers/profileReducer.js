import { SET_STATE } from "../actions/profileActions";
const initialState = {
  profile: {
    email: "",
    courses: "",
    likedCourses: "",
    favouriteCourses: "",
    error: "",
    loading: false,
  },
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default profileReducer;
