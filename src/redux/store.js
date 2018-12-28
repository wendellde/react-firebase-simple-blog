import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import firebaseConfig from "../config/firebaseConfig";

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig), // redux binding for firebase
    reduxFirestore(firebaseConfig) // redux bindings for firestore
  )
);
