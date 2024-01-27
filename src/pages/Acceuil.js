import React from "react";

import About from "../components/About";

import Section from "../components/Section";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Avisclients from "../components/Avisclients";
import Entete from "../components/Entete";
import Footer from "../components/Footer";
import Burger from "../components/burger/Burger"

const Acceuil = () => {
  return (
    <>
      <Entete />
      <Burger />
      <About />
      <Section />
      <Team />
      <Contact />
      <Avisclients />
      <Footer />
    </>
  );
};

export default Acceuil;
