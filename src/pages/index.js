import React from "react";

import styled from "styled-components";
import { Link } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

import leaf from "../images/leaf.png";
import studio2 from "../images/studio2.jpg";

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${studio2});
  min-height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  /* lt ie8 */
  -ms-background-position-x: center;
  -ms-background-position-y: bottom;
  background-position: center bottom;
  /* scale bg image proportionately */
  background-size: cover;
  /* ie8 workaround - http://louisremi.github.io/background-size-polyfill/ */
  -ms-behavior: url(${studio2});
`;

const IndexPage = () => (
  <>
    <PageHead title="Home" />
    <div className="main-container">
      <Header />

      <div className="banner-container">
        <Banner>
          <div className="banneroverlay">
            <div className="text-center island-1-2 gutter">
              <h1 className="pad-b">
                historical and vintage creations
                <br />
                personalized patterns
                <br />
                handcrafted detail
              </h1>
              <Link className="micro button" to="/designs">
                VIEW CUSTOM DESIGNS
              </Link>
            </div>
            <div className="gutter tagline">
              <img
                alt="leaf"
                style={{ verticalAlign: "middle", marginRight: ".325rem" }}
                className="leaf"
                src={leaf}
              />
              <span className="nano taglinetext">
                slow fashion, lovingly handcrafted in ontario, canada
              </span>
            </div>
          </div>
        </Banner>
      </div>
    </div>

    <Footer />
  </>
);

export default IndexPage;
