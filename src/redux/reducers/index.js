import { combineReducers } from "redux";
import blogReducer from "./blogReducer";

/**
 * @description   The Root Reducer
 */
export default combineReducers({
  blogs: blogReducer
});
