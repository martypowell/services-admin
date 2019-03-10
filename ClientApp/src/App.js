import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/index";
import ServicesList from "./components/ServicesList";
import Layout from "./components/Layout";
import KeywordList from "./components/Keywords";
import Categories from "./components/Categories";
import Login from "./components/Admin/Login";
import { store } from "./actions/index";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/services/:id?" component={ServicesList} />
          <Route exact path="/categories/:id?" component={Categories} />
          <Route exact path="/keywords" component={KeywordList} />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
