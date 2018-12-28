import React, { Component } from "react";
import PropTypes from "prop-types";

import CreateBlogForm from "./forms/CreateBlogForm";
import { createPost } from "../../redux/actions/blogActions";
import { connect } from "react-redux";

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
  };

  render() {
    const { postData } = this.state;

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

const mapDispatchToProps = dispatch => ({
  createPost: postData => dispatch(createPost(postData))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateBlog);
