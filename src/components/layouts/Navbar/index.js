import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import { connect } from "react-redux";

const Navbar = ({ auth }) => (
  <div>
    <Menu pointing secondary>
      <Menu.Item>
        <Link to="/">HOME</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/blogs">BLOGS</Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <SignedInLinks />
        <SignedOutLinks />
      </Menu.Menu>
    </Menu>
  </div>
);

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Navbar);
