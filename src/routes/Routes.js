import React, { Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import history from "./History";
import * as LazyComponent from "../utils/LazyLoaded";

const Routes = (
  <Suspense fallback={"loading..."}>
    <Router history={history}>
      <Switch>
        <LazyComponent.Home path="/" exact />
        <LazyComponent.SignUp path="/register"/>
        <LazyComponent.ForgetPassword path="/forget-password" exact />
        <LazyComponent.Login path="/login" exact />
        <LazyComponent.CreateOffer exact path="/create-offer" />
        <LazyComponent.Profile exact path="/profile" />
        <LazyComponent.Offers exact path="/offers" />
        <LazyComponent.OfferDetails  path="/offers/:id" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
