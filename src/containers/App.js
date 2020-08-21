import React, { Component } from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import messages from "../assets/Local/messages";
import "./App.scss";

class App extends Component {

  render() {     
    const { lang } = this.props;
    
    return (
      <IntlProvider
        locale={lang}
        messages={messages[lang]}>
        <div className={lang === "ar" ? "rtl" : "ltr"} dir={lang === "ar" ? "rtl" : "ltr"}>
          <Router history={history}>
            {Routes}   
          </Router>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.locale.lang
  }
}

export default connect(mapStateToProps)(App);