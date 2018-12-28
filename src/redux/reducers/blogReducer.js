import { CREATE_POST_ERROR, CREATE_POST_SUCCESS } from "../actions/actionTypes";

/**
 * @description   Initial State
 */
const initialState = {
  blogPosts: [
    {
      id: 1,
      author: "Wendell",
      title: "Blog Post 1",
      content: "Lorem ipsum..."
    },
    {
      id: 2,
      author: "Wendell",
      title: "Blog Post 2",
      content: "Lorem ipsum et..."
    }
  ]
};

/**
 * @description   Blog Reducer
 * @param {state}
 * @param {action}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS:
      console.log("New Blog Post Created");
      return state;
    case CREATE_POST_ERROR:
      console.log("Error Posting Blog");
      return state;
    default:
      return state;
  }
};
