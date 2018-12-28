import React from "react";
import { Form, Button } from "semantic-ui-react";

const SignUpForm = ({ credentials, onSubmit, onChange }) => {
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <Form.Field>
        <label htmlFor="title">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Please enter your name"
          onChange={event => onChange(event)}
          value={credentials.firstName}
        />
        <Form.Field>
          <label htmlFor="title">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Please enter your name"
            onChange={event => onChange(event)}
            value={credentials.lastName}
          />
        </Form.Field>
      </Form.Field>
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
      <Button primary>Register</Button>
    </Form>
  );
};

export default SignUpForm;
