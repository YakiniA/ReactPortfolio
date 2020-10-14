import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import Wrapper from "./components/Wrapper";
import './style.css';

function App() {
  return (
    <Router>
        <Wrapper>
          <div>
          <Route exact path="/" component={Index} />
          </div>
        </Wrapper>
    </Router>
  );
}

export default App;
