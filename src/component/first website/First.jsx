import React from "react";
import Navbar from "./websitecomponent/Navbar";
import "./first.css";
import Home from "./pages/Home";
// import { Services } from "./pages/Services";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Services";

const First = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Product} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default First;
