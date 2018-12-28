import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const Blogs = ({ blogs }) => {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs &&
          blogs.map(({ id, title, author, content }) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{content}</p>
              <small>{author}</small>
            </li>
          ))}
      </ul>
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
