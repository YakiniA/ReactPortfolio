import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../img/YARecent.png'; 

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item

  const Navbar = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-md">
    <a className="navbar-brand" href="#home"><img src={image} className= "navBarImg" width="250" height="250"></img></a>
    <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapseEx"  aria-controls="navbarCollapseEx" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}  id="navbarCollapseEx" >
      <ul className="navbar-nav navbar-right mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    </nav>

  );
  }


export default Navbar;
