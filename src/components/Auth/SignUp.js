import React, { Component } from "react";
import SignUpForm from "./forms/SignUpForm";

class SignUp extends Component {
  state = {
    credentials: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  };

  onChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  submit = event => {
    console.log(this.state.credentials);
  };

  render() {
    const { credentials } = this.state;

    return (
      <div>
        <h2>Sign in</h2>
        <SignUpForm
          onChange={this.onChange}
          credentials={credentials}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}

export default SignUp;
