import React from "react";
import Header from "./Scenes/Header";
import Content from "./Scenes/Content";
import Footer from "./Scenes/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./Scenes/AboutUs";
import ContactUs from "./Scenes/ContactUs";

export default class App extends React.Component {
  state = {
    appName: "Revoyons",
  };

  render() {
    return (
      <div className="App">
        {/* <Content /> */}
        <Router>
          <Header appName={this.state.appName} />
          <Route path="/" exact component={Content} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={ContactUs} />
        </Router>
        <Footer appName={this.state.appName} />
      </div>
    );
  }
}
