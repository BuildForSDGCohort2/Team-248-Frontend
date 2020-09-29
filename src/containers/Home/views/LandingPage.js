import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import { AcceptanceQualifictions } from "../components/sections/AcceptanceQualifications";
//import Cta from "../components/sections/Cta";

const LandingPage = () => {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <AcceptanceQualifictions />
      <Testimonial topDivider />
    </>
  );
};

export default LandingPage;
