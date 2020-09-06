import React, { Component } from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import "./App.scss";
import Home from "./Home/Home";
class App extends Component {

  render() {         
    return (
        <div >
          <Router history={history}>
            {Routes}   
          </Router>
        </div>
    );
  }
}

export default App;
