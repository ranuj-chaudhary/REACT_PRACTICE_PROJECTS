// short cut for react functional components
// rafce
// import React, { useEffect } from "react";


import "./App.css";
import { useInView } from "react-intersection-observer";
import { lazy, Suspense } from "react";
import Spinner from "./components/spinner/Spinner";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Header = lazy(() => import("./containers/header/Header"));
const Brand = lazy(() => import("./components/brand/Brand"));
const WhatGPT3 = lazy(() => import("./containers/whatGPT3/WhatGPT3"));
const Features = lazy(() => import("./containers/features/Features"));
const Blog = lazy(() => import("./containers/blog/Blog"));
const Possibility = lazy(() => import("./containers/possibility/Possibility"));
const Cta = lazy(() => import("./components/cta/Cta"));
const Footer = lazy(() => import("./containers/footer/Footer"));

const App = () => {
  // intersection observer
  const options = {
    root: null,
    rootMargin: "-80px",
    threshold: 0,
  };
  const { ref, inView } = useInView(options);

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <header className="gradient__bg " id="#home" style={{margin:" 0 0 6rem"}}>
          <Navbar inView={inView} />
          <Header inView={inView} isSelected={ref} />
        </header>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
