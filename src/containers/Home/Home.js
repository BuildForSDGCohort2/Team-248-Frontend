import React, { Component } from "react";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import IndexHeader from "../Headers/IndexHeader";
import IndexNavbar from "../Navbars/IndexNavbar";
import Footer from "../Footer/Footer";
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/paper-kit.scss?v=1.2.0";

class Home extends Component {
  render() {
    return (
      <div>
        <IndexNavbar />
        <IndexHeader />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
