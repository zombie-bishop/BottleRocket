import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Details from "./pages/Details";
import List from "./pages/List";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={List}></IndexRoute>
      <Route path="details/:restaurant" name="details" component={Details}></Route>
    </Route>
  </Router>,
app);
