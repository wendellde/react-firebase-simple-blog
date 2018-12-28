import { CREATE_POST_ERROR, CREATE_POST_SUCCESS } from "./actionTypes";

export const createPost = post => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("blogs")
      .add({
        title: post.title,
        body: post.body,
        userId: "QKP2bko2yuOINcgB2vq2",
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
