import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import CreateBlog from "./components/Blogs/CreateBlog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <h1>App</h1>
          <hr />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/create-blog" component={CreateBlog} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
