import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Service from "./Service";
import Portfolio from "./Portfolio"
import Slider from "./Slider"
import Footer from "./Footer"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Slider/>
      <Footer />
    </>
  );
}

export default App;
