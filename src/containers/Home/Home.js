import React, { Component } from "react";
import Hero from "../Hero/Hero";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import Footer from "../Footer/Footer";
class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <SecondSection />
        <ThirdSection />
        <Footer />
      </div>
    );
  }
}

export default Home;
