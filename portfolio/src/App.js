import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

import './style.css';

function App() {
  return (
    <Router>
          <div>
       
          <Route exact path="/" component={IndexPage} />
          
          </div>
    </Router>
  );
}

export default App;
