import React, { Component } from "react";
import "../styleAssets/Header.css";
import Icon from "@mdi/react";
import { mdiAlphaRCircleOutline } from "@mdi/js";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="col-md-12 header d-flex justify-content-between px-5 py-3">
        <div className="col-md-8 d-flex">
          <Icon path={mdiAlphaRCircleOutline} color="#ffffff" size={2} spin />
          <div className="appName ml-3">{this.props.appName}</div>
        </div>
        <div className="col-md-4 menuBar d-flex justify-content-between align-items-center">
          <Link to="/" className="mainMenu">Home</Link>
          <Link to="about" className="mainMenu">About us</Link>
          <Link to="contact" className="mainMenu">Contact us</Link>
          <Link to="/faq" className="mainMenu">Support</Link>
        </div>
      </div>
    );
  }
}

export default Header;
