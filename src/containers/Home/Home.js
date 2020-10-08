import React, { Component } from "react";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import Footer from "../Footer/Footer";
import IndexHeader from "../Headers/IndexHeader";
import IndexNavbar from "../Navbars/IndexNavbar.js";


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
