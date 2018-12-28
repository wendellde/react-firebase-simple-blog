import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import { firestoreReducer } from "redux-firestore";

/**
 * @description   The Root Reducer
 */
export default combineReducers({
  blogs: blogReducer,
  firestore: firestoreReducer
});
