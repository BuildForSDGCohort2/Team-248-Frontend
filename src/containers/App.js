import React, { Component } from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import "./App.scss";

class App extends Component {

  render() {         
    return (
      <>
        <Router history={history}>{Routes}</Router>
      </>
    );
  }
}

export default App;
