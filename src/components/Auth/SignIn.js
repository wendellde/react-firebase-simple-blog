import React, { Component } from "react";
import SignInForm from "./forms/SignInForm";
import { signIn } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    credentials: {
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
    this.props.signIn(this.state.credentials);
  };

  render() {
    const { credentials } = this.state;
    const { uid } = this.props.auth;
    if (uid) return <Redirect to="/blogs" />;

    return (
      <div>
        <h2>Sign in</h2>
        <SignInForm
          onChange={this.onChange}
          credentials={credentials}
          onSubmit={this.submit}
          authError={this.props.authError}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(signIn(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
