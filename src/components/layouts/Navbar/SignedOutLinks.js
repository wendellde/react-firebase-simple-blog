import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <Menu.Item>
        <Link to="/register">SIGN UP</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signin">SIGN IN</Link>
      </Menu.Item>
    </React.Fragment>
  );
};

export default SignedOutLinks;
