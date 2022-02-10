import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../component/Navigation";
import Footer from "../component/Footer"; 
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";

function PageRoutes(props) {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/experience" component={Experience} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default PageRoutes;
