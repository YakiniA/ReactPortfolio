import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../img/YARecent.png';
import { HashLink as Link } from 'react-router-hash-link';

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {
    const show = (this.state.menu) ? "show" : "";
    return (
      // <nav className="navbar navbar-expand-lg navbar-dark fixed-top       navbar-dark navbar-default     navbar navbar-expand-lg navbar-dark navbar-default fixed-top">
    
     <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <Link smooth to="/#home">
         <img src={image} className="navBarImg" alt="" width="150" height="100"></img>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"  aria-controls="#navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse " + show} id="#navbarCollapse" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-link">
              <Link smooth to="/#home" onClick={this.toggleMenu}>
               Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link smooth to="/#about" onClick={this.toggleMenu}>
               About
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link smooth to="/#portfolio" onClick={this.toggleMenu}>
               Portfolio
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link smooth to="/#contact" onClick={this.toggleMenu}>
              Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}