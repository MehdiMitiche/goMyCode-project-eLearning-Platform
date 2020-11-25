import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./coursesReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
});

export default rootReducer;
