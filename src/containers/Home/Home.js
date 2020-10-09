import React, { Component } from "react";
import Hero from "../Hero/Hero";
import SecondSection from "../SecondSection/SecondSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import AcceptanceQualifictions from "../AcceptanceQualifictions/AcceptanceQualifictions";
import Footer from "../Footer/Footer";
import Header from "../../components/Header/Header.js";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "70px" ,
  },
}));

const Home = function() {
  const classes = useStyles();

    return (
      <div>
        <Header />
        <Container className={classes.container}>
          <Hero />
          <SecondSection />
          <ThirdSection />
          <ServicesSection />
          <AcceptanceQualifictions />
        </Container>
        <Footer />
      </div>
    );
  }

export default Home;
