import React, { Component } from "react";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import Footer from "../Footer/Footer";
import IndexHeader from "../Headers/IndexHeader";
import IndexNavbar from "../Navbars/IndexNavbar";
import DemoFooters from "../Footers/DemoFooter";


class Home extends Component {
  render() {
    return (
      <div>
        <IndexNavbar />
        <IndexHeader />
        <SecondSection />
        <ThirdSection />
        <DemoFooters />
      </div>
    );
  }
}

export default Home;
