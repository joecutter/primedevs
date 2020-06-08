import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //router

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Service from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import Onboard from "../pages/Onboard/Onboard";
import { Typeform } from "../components/quiz/typeForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route exact path="/onboard" component={Onboard} /> */}
        <Route exact path="/onboard" component={Typeform} />
      </BrowserRouter>
    </div>
  );
}

export default App;
