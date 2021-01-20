import React from "react";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import AboutOverview from "./Components/AboutOverview/AboutOverview"

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <div className="main">
          <Switch>
            <Route exact path="/" component={AboutOverview} />
            {/* <Route exact path="/experience" component={Experience} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/:id" component={Project} /> */}
          </Switch>
        </div>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
