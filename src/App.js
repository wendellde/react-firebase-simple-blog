import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Blogs from "./components/Blogs";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <h1>App</h1>
          <hr />
          <Route exact path="/blogs" component={Blogs} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
