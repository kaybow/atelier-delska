import React from "react";

import delskaLogo from "../../images/delska-logo.svg";
const Header = props => (
  <header className="grid island-1-2 gutter" id="top">
    <div className="unit xs-1 s-1 m-1-4 l-1-4">
      <div className="logo">
        <a href="/">
          <img
            className="logosize"
            src={delskaLogo}
            alt="Atelier Delska logo to homepage"
          />
        </a>
      </div>
    </div>

    <div className="unit xs-1 s-1 m-3-4 l-3-4">
      <nav className="push-t">
        <ol className="nano">
          <li id="nav-designs">
            <a href="designs">CUSTOM DESIGNS</a>
          </li>
          <li id="nav-about">
            <a href="about">ABOUT THE ATELIER</a>
          </li>
          <li id="nav-contact">
            <a href="contact">GET IN TOUCH</a>
          </li>
        </ol>
      </nav>
    </div>
  </header>
);

export default Header;
