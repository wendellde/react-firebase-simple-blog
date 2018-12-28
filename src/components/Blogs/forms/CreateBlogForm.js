import React from "react";
import PropTypes from "prop-types";

import { Form, Button, TextArea } from "semantic-ui-react";

const CreateBlogForm = ({ onChange, onSubmit, postData }) => {
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(event);
      }}
    >
      <Form.Field>
        <label htmlFor="title">Post Title</label>
        <input
          name="title"
          placeholder="Blog title"
          onChange={event => onChange(event)}
          value={postData.title}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="body">Body</label>
        <TextArea
          name="body"
          placeholder="Tell the world!"
          onChange={event => onChange(event)}
          value={postData.body}
        />
      </Form.Field>
      <Button primary>Create Post</Button>
    </Form>
  );
};

CreateBlogForm.propTypes = {
  postData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CreateBlogForm;
