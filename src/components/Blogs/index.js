import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import BlogSummary from "./BlogSummary";

const Blogs = ({ blogs }) => {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>{blogs && blogs.map(blog => <BlogSummary blog={blog} />)}</ul>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blogs.blogPosts
});

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Blogs);
