import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../img/YARecent.png'; 

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div className="container-fuid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
            <span className="sr-only"> Toggle Navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        <a className="navbar-brand" href="#"><img src={image} className= "navBarImg" width="250" height="250"></img></a>
        </div>

      <div className="collapse navbar-collapse" id="navbar-collapse-main">
        <ul className="nav navbar-nav navbar-right links">
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
