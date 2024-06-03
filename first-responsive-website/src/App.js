// short cut for react functional components
// rafce
import React, { useEffect } from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./App.css";
import { useInView } from "react-intersection-observer";

const App = () => {
  const options = {
    root: null,
    rootMargin: "-80px",
    threshold: 0,
  };
  const { ref, inView, entry } = useInView(options);

  return (
    <div className="App">
      <div className="gradient__bg" id="#home">
        <Navbar inView={inView} />
        <Header inView={inView} isSelected={ref} />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
