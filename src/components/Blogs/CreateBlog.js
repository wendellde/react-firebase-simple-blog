import React, { Component } from "react";
import PropTypes from "prop-types";

import CreateBlogForm from "./forms/CreateBlogForm";
import { createPost } from "../../redux/actions/blogActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateBlog extends Component {
  state = {
    postData: {
      title: "",
      body: ""
    }
  };

  onChange = event => {
    this.setState({
      postData: {
        ...this.state.postData,
        [event.target.name]: event.target.value
      }
    });
  };

  submit = e => {
    console.log(this.state.postData);

    // TODO: clean your data, Please validate!
    this.props.createPost(this.state.postData);

    // TODO: Redirect
    this.props.history.push("/blogs");
  };

  render() {
    const { postData } = this.state;
    const { uid } = this.props.auth;

    if (!uid) return <Redirect to="/signin" />;

    return (
      <div>
        <h3>Create Blog</h3>
        <CreateBlogForm
          onChange={this.onChange}
          onSubmit={this.submit}
          postData={postData}
        />
      </div>
    );
  }
}

CreateBlog.propTypes = {
  createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
  createPost: postData => dispatch(createPost(postData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBlog);
