import React from "react";
import "../styleAssets/Footer.css";
import Icon from "@mdi/react";
import { mdiInstagram, mdiFacebook, mdiYoutube, mdiTwitter } from "@mdi/js";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="col-md-12 footer d-flex justify-content-between px-5 py-3">
        <div className="appName col-md-2">{this.props.appName}</div>
        <div className="col-md-10 row  menuBar d-flex flex-column justify-content-start py-3">
          <div className="col-md-6">
            <div className="mainMenu">Home</div>
            <div className="mainMenu">About us</div>
            <div className="mainMenu">Contact us</div>
            <div className="mainMenu">Customer care</div>
            <div className="mainMenu">Faq</div>
          </div>
          <div className="col-md-6">
            <div>Get updates on social media</div>
            <div className="">
              <Icon path={mdiInstagram} color="#ffffff" size={1} />
              <Icon path={mdiFacebook} color="#ffffff" size={1} />
              <Icon path={mdiTwitter} color="#ffffff" size={1} />
              <Icon path={mdiYoutube} color="#ffffff" size={1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
