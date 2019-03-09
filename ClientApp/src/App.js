import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/index";
import ServicesList from "./components/ServicesList";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={ServicesList} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/services/:id" component={Admin} />
        <Route exact path="/categories/:id" component={Admin} />
        <Route exact path="/keywords" component={Admin} />
      </Layout>
    </Router>
  );
};

export default App;
