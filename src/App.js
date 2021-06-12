import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import StateWise from './components/statewisedata/StateWise';
// import MainPage from "./components/ourpage/mainPage/MainPage";
// Mainpage
import Mainpage from './mainpage/Mainpage';
// Pages
import About from "./components/ourpage/About";
import Services from "./components/ourpage/Services";
import Contact from "./components/ourpage/Contact";
import Tracker from "./components/ourpage/Tracker";
// Modules
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Mainpage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/tracker" component={Tracker}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;