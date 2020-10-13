import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../img/YARecent.png'; 

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
  return (
<nav className="navbar navbar-expand-lg">
<a className="navbar-brand" href="/"><img src={image} className= "navBarImg" width="250" height="250"></img></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
  <ul className="navbar-nav navbar-right mr-auto">
    <li className="nav-item">
      <a className="nav-link" href="/">Home </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Portfolio</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Contact</a>
    </li>
  </ul>
</div>
</nav>
    



  );
}

export default Navbar;
