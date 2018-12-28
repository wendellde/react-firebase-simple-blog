import React, { Component } from "react";
import SignInForm from "./forms/SignInForm";
import { signIn } from "../../redux/actions/authActions";
import { connect } from "react-redux";

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

    return (
      <div>
        <h2>Sign in</h2>
        <SignInForm
          onChange={this.onChange}
          credentials={credentials}
          onSubmit={this.submit}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  authError: state.auth.authError
});

const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(signIn(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
