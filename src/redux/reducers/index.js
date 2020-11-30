import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./coursesReducers";
import profileReducer from "./profileReducer";
import studyReducer from "./studyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  study: studyReducer,
  profile: profileReducer,
});

export default rootReducer;
