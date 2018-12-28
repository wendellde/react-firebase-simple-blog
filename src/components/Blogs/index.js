import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import BlogSummary from "./BlogSummary";

const Blogs = ({ blogs, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogs && blogs.map(blog => <BlogSummary blog={blog} key={blog.id} />)}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    blogs: state.firestore.ordered.blogs,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs" }])
)(Blogs);
