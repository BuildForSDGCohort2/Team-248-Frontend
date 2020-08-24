import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import history from "./History";
import * as LazyComponent from "../utils/LazyLoaded";

const Routes = (
  <Suspense fallback={"loading..."}>
    <Router history={history}>
      <Switch>
        <LazyComponent.Home path="/" exact />
        <LazyComponent.Login path="/login"/>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;