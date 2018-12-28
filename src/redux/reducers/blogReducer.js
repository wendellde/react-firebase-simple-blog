const initialState = {
  blogs: [
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

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
