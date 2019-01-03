import React from "react";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect, Link } from "react-router-dom";

import BlogSummary from "./BlogSummary";

const Blogs = ({ blogs, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div>
      <h1>Blog Posts</h1>
      {blogs &&
        blogs.map(blog => (
          <Link to={`/blogs/${blog.id}`} key={blog.id}>
            <BlogSummary blog={blog} />
          </Link>
        ))}
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
