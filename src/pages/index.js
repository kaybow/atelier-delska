import React from "react";

import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

import leaf from "../images/leaf.png";

const BackgroundWithImage = className => data => (
  <BackgroundImage
    fluid={data.file.childImageSharp.fluid}
    className={className}
  >
    <div className="banneroverlay">
      <div
        className="text-center island-1-2 gutter"
        style={{ paddingBottom: "10%" }}
      >
        <h1 className="pad-b" style={{ paddingTop: "10%" }}>
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
  </BackgroundImage>
);

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/studio2/" }) {
          childImageSharp {
            fluid(maxWidth: 1600, srcSetBreakpoints: [320, 640, 1280]) {
              src
              sizes
              srcSet
              srcSetWebp
              base64
              tracedSVG
              aspectRatio
              originalImg
              presentationHeight
              presentationWidth
              originalName
            }
          }
        }
      }
    `}
    render={BackgroundWithImage(className)}
  />
);

const StyledBackground = styled(BackgroundSection)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  -ms-background-position-x: center;
  -ms-background-position-y: bottom;
  background-position: center bottom;
  background-size: cover;
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  height: 80vh;
`;

const IndexPage = ({ data }) => {
  return (
    <IndexContainer>
      <PageHead title="Home" />
      <Header />
      <Main>
        <StyledBackground />
      </Main>
      <Footer />
    </IndexContainer>
  );
};

export default IndexPage;
