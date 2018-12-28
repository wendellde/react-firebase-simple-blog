import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";

/**
 * @description   The Root Reducer
 */
export default combineReducers({
  auth: authReducer,
  blogs: blogReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
