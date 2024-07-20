// short cut for react functional components
// rafce
// import React, { useEffect } from "react";
import { Cta, Navbar } from "./components";
import { Blog, Features, Footer, Header, Possibility } from "./containers";

import "./App.css";
import { useInView } from "react-intersection-observer";
import { lazy, Suspense } from "react";
import Spinner from "./components/spinner/Spinner";

const WhatGPT3 = lazy(() => import("./containers/whatGPT3/WhatGPT3"));
const Brand = lazy(() => import("./components/brand/Brand"));
// const AppLayout = lazy(() => import("./containers"));
// const Login = lazy(() => import("./containers"));
// const Pricing = lazy(() => import("./containers"));
// const Product = lazy(() => import("./containers"));

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
      <header className="gradient__bg" id="#home">
        <Navbar inView={inView} />
        <Header inView={inView} isSelected={ref} />
      </header>
      <Suspense fallback={<Spinner />}>
        <Brand />

        <WhatGPT3 />
      </Suspense>
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
