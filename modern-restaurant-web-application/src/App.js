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
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import { useInView } from "react-intersection-observer";

const App = () => {
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  };
  const { ref, inView, entry } = useInView(options);

  return (
    <div className="app__bg">
      <Navbar isSticky={inView} />
      <Header isSelected={ref} isSticky={inView}/>
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
