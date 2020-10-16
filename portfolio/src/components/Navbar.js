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
      // <nav className="navbar navbar-expand-lg navbar-dark fixed-top   navbar navbar-expand-lg navbar-dark navbar-default fixed-top">
    
    
     <nav className="navbar navbar-expand-lg navbar-dark navbar-default">
        <Link smooth to="/#home">
          <a className="navbar-brand" href="#home"><img src={image} className="navBarImg" alt="" width="250" height="250"></img></a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"  aria-controls="#navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={"collapse navbar-collapse " + show} id="#navbarCollapse" >
          <ul className="nav navbar-nav links ml-auto">
            <li className="nav-item nav-link">
              <Link smooth to="/#home">
                <a class="active" href="#home" onClick={this.toggleMenu}>Home<span class="sr-only">(current)</span></a>
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link smooth to="/#about">
                <a class="active" href="#about" onClick={this.toggleMenu}>About</a>
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link smooth to="/#portfolio">
                <a class="active" href="#portfolio" onClick={this.toggleMenu}>Portfolio</a>
              </Link>
            </li>
            <li className="nav-item nav-link">
              <Link smooth to="/#contact">
                <a class="active" href="#contact" onClick={this.toggleMenu}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}