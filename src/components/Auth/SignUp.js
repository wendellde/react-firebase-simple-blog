import React, { Component } from "react";
import SignUpForm from "./forms/SignUpForm";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { signUp } from "../../redux/actions/authActions";

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
    this.props.signUp(this.state.credentials);
  };

  render() {
    const { credentials } = this.state;
    const { auth } = this.props;

    if (auth.uid) return <Redirect to="/blogs" />;

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

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
  signUp: credentials => dispatch(signUp(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
