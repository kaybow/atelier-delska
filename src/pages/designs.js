import React, { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHead from "../components/PageHead";

import Gallery from "./components/Gallery";

import { designCategories } from "./util/designUtilities";

const CategoryBtn = styled.div`
  height: 100%;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const baseStyle = "unit xs-1-2 s-1-2 m-1-4 l-1-4 category";

const Designs = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("historical");

  const getStyle = category => {
    if (category === selectedCategory) {
      return `${baseStyle} selected-category`;
    }
    return baseStyle;
  };

  return (
    <>
      <PageHead title="Designs" />
      <Header />

      <div className="grid filter">
        <div
          className={getStyle("historical")}
          onClick={() => setSelectedCategory("historical")}
        >
          <h6>
            <CategoryBtn>
              historical
              <br />
              couture
            </CategoryBtn>
          </h6>
        </div>
        <div
          className={getStyle("vintage")}
          onClick={() => setSelectedCategory("vintage")}
        >
          <h6>
            <CategoryBtn>
              vintage
              <br />
              day dresses
            </CategoryBtn>
          </h6>
        </div>
        <div
          className={getStyle("corsetry")}
          onClick={() => setSelectedCategory("corsetry")}
        >
          <h6>
            <CategoryBtn>
              custom
              <br />
              corsetry
            </CategoryBtn>
          </h6>
        </div>
        <div
          className={getStyle("accessories")}
          onClick={() => setSelectedCategory("accessories")}
        >
          <h6>
            <CategoryBtn>
              handmade
              <br />
              vintage accessories
            </CategoryBtn>
          </h6>
        </div>
      </div>

      <main>
        <Gallery
          designCategories={designCategories(
            data.allFile.edges,
            data.allMarkdownRemark.edges
          )}
          selectedCategory={selectedCategory}
        />
      </main>

      <Footer />
    </>
  );
};

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
          name
          dir
          extension
          relativePath
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          fileAbsolutePath
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default Designs;
