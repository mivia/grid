import React from "react";
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";

import Images from "./components/images";

function Main() {
  return (
    <Switch>
      <Route path="/images" component={Images} />
      <Redirect exact from="/" to="/images" />
    </Switch>
  );
}

const root = document.getElementById("react-root");

render(
  <Router>
    <Main />
  </Router>,
  root,
);
