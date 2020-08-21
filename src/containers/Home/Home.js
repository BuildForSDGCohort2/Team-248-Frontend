import React, { Component } from "react";
import { injectIntl } from "react-intl";
import { Button } from "../../components/Button/Button"
import { connect } from "react-redux"
import { setCurrentLang } from "../../store/actions/Lang";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  switchLang = (lang) => {
    const { setLangAction } = this.props;
    setLangAction(lang === "en"?"ar":"en")
  }
  render() { 
    const { messages } = this.props.intl;
    const { lang } = this.props;
    return ( 
      <div>
        <h1>{messages.home}</h1>
       <Button onClick={()=> this.switchLang(lang)}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lang: state.locale.lang
  }
}
const mapStateToDispatch = {
    setLangAction:setCurrentLang
}

export default connect(mapStateToProps,mapStateToDispatch)(injectIntl(Home));