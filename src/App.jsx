import React from 'react';
import Navbar from "./Navbarsection/Navbar";
import Header from "./HeaderSection/Header";
import About from "./AboutSection/About";
import Service from "./ServiceSection/Service";
import Portfolio from "./PortfolioSection/Portfolio"
import Slider from "./Slider"
import Footer from "./Footersection/Footer"

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
