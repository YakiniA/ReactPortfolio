import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Wrapper from "./components/Wrapper";
import './style.css';

function App() {
  return (
    <Router>
          <div>
          <Wrapper>
          <Route exact path="/" component={IndexPage} />
          </Wrapper> 
          </div>
    </Router>
  );
}

export default App;
