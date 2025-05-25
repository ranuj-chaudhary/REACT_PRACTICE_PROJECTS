import React from "react";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "../container";
import Main from "../components/Main";
const Homepage = () => {
  return (
    <>
      <Header />
      <Main>
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
