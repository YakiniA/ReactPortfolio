import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Wrapper from "./components/Wrapper";
import './style.css';

function App() {
  return (
    <Router>
 
          <div>
          <Wrapper>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/home" component={IndexPage} />
          <Route exact path="/About" component={AboutPage} />
          <Route exact path="/Portfolio" component={PortfolioPage} />
          <Route exact path="/Contact" component={ContactPage} />
          </Wrapper>
          </div>
        
    </Router>
  );
}

export default App;
