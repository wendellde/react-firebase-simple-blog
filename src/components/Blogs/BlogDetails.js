import React from "react";
import { Card } from "semantic-ui-react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const BlogDetails = ({ blog, auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  if (blog) {
    return (
      <div style={{ marginTop: 20 }}>
        <Card fluid>
          <Card.Content>
            <Card.Header>{blog.title}</Card.Header>{" "}
            <Card.Description>{blog.body}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <small>{`By ${blog.authorFirstName} ${
              blog.authorLastName
            } on ${moment(blog.createdAt.toDate())
              .startOf("hour")
              .fromNow()}`}</small>
          </Card.Content>
        </Card>
      </div>
    );
  } else {
    return <p>Loding...</p>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs ? blogs[id] : null;
  return {
    blog: blog,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs" }])
)(BlogDetails);
