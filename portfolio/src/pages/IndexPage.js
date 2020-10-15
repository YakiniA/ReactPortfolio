import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function Index() {

  return (
    <div>
        <Navbar /> 
        <Home />
        <About />
        <Portfolio />
        <Contact />
    </div>
  );
  
}

export default Index;
