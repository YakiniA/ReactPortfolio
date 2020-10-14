import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Index() {

  return (
    <div>
        <Navbar /> 
        <Home />
        <About />
        <Portfolio />
        <Footer />
    </div>
  );
  
}

export default Index;
