import React, { Component } from "react";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import IndexHeader from "../Headers/IndexHeader";
import IndexNavbar from "../Navbars/IndexNavbar";
import DemoFooters from "../Footers/DemoFooter";
import ContactUs from "../ContactUs/ContactUs";

class Home extends Component {
  render() {
    return (
      <div>
        <IndexNavbar />
        <IndexHeader />
        <SecondSection />
        <ThirdSection />
        <ContactUs />
        <DemoFooters />
      </div>
    );
  }
}

export default Home;
