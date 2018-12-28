import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import CreateBlog from "./components/Blogs/CreateBlog";
import Navbar from "./components/layouts/Navbar";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Navbar />

          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/create-blog" component={CreateBlog} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
