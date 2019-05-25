import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHead from "../components/PageHead";

import Gallery from "./components/Gallery";

const imageSrcFromEdges = edges =>
  edges.map(edge => ({
    name: edge.node.name,
    src: edge.node.childImageSharp.fluid.src
  }));

const Designs = ({ data }) => (
  <>
    <PageHead title="Designs" />
    <Header />

    <div className="grid filter">
      <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
        <h6>
          <a href="">
            historical
            <br />
            couture
          </a>
        </h6>
      </div>
      <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
        <h6>
          <a href="">
            vintage
            <br />
            day dresses
          </a>
        </h6>
      </div>
      <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
        <h6>
          <a href="">
            custom
            <br />
            corsetry
          </a>
        </h6>
      </div>
      <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
        <h6>
          <a href="">
            handmade
            <br />
            vintage accessories
          </a>
        </h6>
      </div>
    </div>

    <main>
      <Gallery images={imageSrcFromEdges(data.allFile.edges)} />
    </main>

    <Footer />
  </>
);

/* 
    This is basically Gatsby Magic, queries automatically inject data
    onto the page that the query is in (designs.js in this case)

    Since Gatsby automatically creates pages from these top level .js files
    it also grabs the query here and 'injects' by passing it in as the data
    property to the page.
    Much of this query is configured in gatsby-config.js with the 
    gatsby-source-filesystem plugin.
*/
export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "designs" }
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export default Designs;
