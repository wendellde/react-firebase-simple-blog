import { CREATE_POST_ERROR, CREATE_POST_SUCCESS } from "./actionTypes";

export const createPost = post => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("blogs")
      .add({
        ...post,
        userId: authorId,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: CREATE_POST_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: CREATE_POST_ERROR }, err);
      });
  };
};
