import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import "./mainApp.scss";

export default function MainApp() {
  return (
    <div>
      <div className="main-app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Router>
            <Switch>
              <Route path="/create-blog/:id?">
                <CreateBlog />
              </Route>
              <Route path="/detail-blog/:id">
                <DetailBlog />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </div>
  );
}
