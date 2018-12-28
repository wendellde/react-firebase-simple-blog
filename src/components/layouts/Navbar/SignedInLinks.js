import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../../redux/actions/authActions";

const SignedInLinks = ({ signOut }) => {
  return (
    <React.Fragment>
      <Menu.Item>
        <Link to="/create-blog">CREATE</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="" onClick={signOut}>
          LOGOUT
        </Link>
      </Menu.Item>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
