import React from "react";
import { Form, Button, Message } from "semantic-ui-react";

const SignInForm = ({ credentials, onSubmit, onChange, authError }) => {
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <Form.Field>
        <label htmlFor="title">Email</label>
        <input
          type="email"
          name="email"
          placeholder="please enter your valid email"
          onChange={event => onChange(event)}
          value={credentials.email}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="title">Password</label>
        <input
          type="password"
          name="password"
          placeholder="please enter your valid password"
          onChange={event => onChange(event)}
          value={credentials.password}
        />
      </Form.Field>
      {authError ? (
        <Message negative>
          <Message.Header>{authError}</Message.Header>
        </Message>
      ) : null}
      <Button primary>Login</Button>
    </Form>
  );
};

export default SignInForm;
