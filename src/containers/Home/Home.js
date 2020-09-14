import React, { useRef, useEffect } from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import LayoutDefault from "./layouts/LayoutDefault";
import LandingPage from "./views/LandingPage";

const Home = () => {
  const childRef = useRef();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
  }, []);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute
            exact
            path="/"
            component={LandingPage}
            layout={LayoutDefault}
          />
        </Switch>
      )}
    />
  );
};

export default Home;
