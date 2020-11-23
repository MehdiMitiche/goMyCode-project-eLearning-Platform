import { SET_STATE } from "../actions/authActions";
const initialState = {
  login: {
    email: "",
    password: "",
    error: "",
    loading: false,
  },
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
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
