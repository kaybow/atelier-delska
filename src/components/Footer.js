import React from "react";

import facebookIcon from "../images/social/socialmedia_facebook.png";
import pinterestIcon from "../images/social/socialmedia_pinterest.png";
import wordPressIcon from "../images/social/socialmedia_wordpress.png";
import instagramIcon from "../images/social/socialmedia_instagram.png";

const Footer = props => (
  <footer className="island-1-2 gutter">
    <div className="grid">
      <nav className="footernav unit xs-2-3 s-2-3 m-2-3 l-2-3 micro grid">
        <ol className="push-0">
          <li>
            <a href="/">home |</a>
          </li>
          <li>
            <a href="designs">custom designs |</a>
          </li>
          <li>
            <a href="about">about the atelier |</a>
          </li>
          <li>
            <a href="contact">get in touch</a>
          </li>
        </ol>
      </nav>

      <div className="unit xs-1-3 s-1-3 m-1-3 l-1-3 micro top text-right top">
        <a href="#top">back to top</a>
      </div>
    </div>

    <div className="pad-t-1-2">
      <div className="social">
        <a className="badge" href="https://www.facebook.com/AtelierDelska/">
          <img alt="Facebook" src={facebookIcon} />
        </a>
        <a className="badge" href="https://www.pinterest.ca/cwmargaret67/">
          <img alt="Pinterest" src={pinterestIcon} />
        </a>
        <a className="badge" href="https://delska.blog/">
          <img alt="Wordpress" src={wordPressIcon} />
        </a>
        <a href="https://www.instagram.com/atelierdelska/">
          <img alt="Instagram" src={instagramIcon} />
        </a>
      </div>
    </div>

    <div className="kaybow pico">
      <a href="http://kaybow.design/" className="pico push-0">
        kaybow design | www.kaybow.design. All rights reserved.
      </a>
    </div>
  </footer>
);

export default Footer;
