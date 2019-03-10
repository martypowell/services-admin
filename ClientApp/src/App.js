import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/index";
import ServicesList from "./components/ServicesList";
import Layout from "./components/Layout";
import KeywordList from "./components/Keywords";
import Categories from "./components/Categories";

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={ServicesList} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/services/:id?" component={ServicesList} />
        <Route exact path="/categories/:id?" component={Categories} />
        <Route exact path="/keywords" component={KeywordList} />
      </Layout>
    </Router>
  );
};

export default App;
