import React from "react";
import { Link } from "gatsby"


import delskaLogo from "../../images/delska-logo.svg";
const Header = props => (
  <header className="grid island-1-2 gutter" id="top">
    <div className="unit xs-1 s-1 m-1-4 l-1-4">
      <div className="logo">
        <Link to="/">
          <img
            className="logosize"
            src={delskaLogo}
            alt="Atelier Delska logo to homepage"
          />
        </Link>
      </div>
    </div>

    <div className="unit xs-1 s-1 m-3-4 l-3-4">
      <nav className="push-t">
        <ol className="nano">
          <li>
            <Link to="/designs" activeClassName="active-nav">CUSTOM DESIGNS</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active-nav">ABOUT THE ATELIER</Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active-nav">GET IN TOUCH</Link>
          </li>
        </ol>
      </nav>
    </div>
  </header>
);

export default Header;
