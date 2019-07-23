import React from "react";
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Images from "./components/images";
import ImageDetails from './components/image-details';
import store from './store';

function Main() {
  return (
    <Switch>
      <Route path="/images" exact component={Images} />
      <Route path="/images/:id?" exact component={ImageDetails} />
      <Redirect exact from="/" to="/images" />
    </Switch>
  );
}

const root = document.getElementById("react-root");

render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  root,
);
