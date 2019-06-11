import React, { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHead from "../components/PageHead";

import Gallery from "./components/Gallery";

const TEXT = "txt";

const categoryList = ["accessories", "corsetry", "historical", "vintage"];

const designsByCategory = (files, category) =>
  files
    .filter(file => file.dir.includes(category))
    .reduce((directories, file) => {
      const designName = file.dir.substring(
        file.dir.lastIndexOf("/") + 1,
        file.dir.length
      );

      if (!directories.includes(designName)) {
        directories.push(designName);
      }

      return directories;
    }, []);

const imageSrcOrNull = node =>
  node.childImageSharp ? node.childImageSharp.fluid.src : null;

const designFiles = edges =>
  edges.map(edge => ({
    name: edge.node.name,
    dir: edge.node.dir,
    extension: edge.node.extension,
    relativePath: edge.node.relativePath,
    src: imageSrcOrNull(edge.node)
  }));

const fileIsOfDesign = design => file => file.dir.includes(design);

const designDescription = files => files.find(file => file.extension === TEXT);
const designImages = files => files.filter(file => file.extension !== TEXT);

const categoryDesigns = (files, category) => {
  const designList = designsByCategory(files, category);

  return designList.map(design => ({
    design,
    images: designImages(files.filter(fileIsOfDesign(design))),
    description: designDescription(files.filter(fileIsOfDesign(design)))
  }));
};

const designCategories = edges => {
  const files = designFiles(edges);

  return categoryList.reduce((designCategories, category) => {
    designCategories[category] = {
      designs: categoryDesigns(files, category)
    };
    return designCategories;
  }, {});
};

const CategoryBtn = styled.div`
  height: 100%;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Designs = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState("historical");

  return (
    <>
      <PageHead title="Designs" />
      <Header />

      <div className="grid filter">
        <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
          <h6>
            <CategoryBtn onClick={() => setSelectedCategory("historical")}>
              historical
              <br />
              couture
            </CategoryBtn>
          </h6>
        </div>
        <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
          <h6>
            <CategoryBtn onClick={() => setSelectedCategory("vintage")}>
              vintage
              <br />
              day dresses
            </CategoryBtn>
          </h6>
        </div>
        <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
          <h6>
            <CategoryBtn onClick={() => setSelectedCategory("corsetry")}>
              custom
              <br />
              corsetry
            </CategoryBtn>
          </h6>
        </div>
        <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
          <h6>
            <CategoryBtn onClick={() => setSelectedCategory("accessories")}>
              handmade
              <br />
              vintage accessories
            </CategoryBtn>
          </h6>
        </div>
      </div>

      <main>
        <Gallery
          designCategories={designCategories(data.allFile.edges)}
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
        extension: { regex: "/(jpeg|jpg|gif|png|txt)/" }
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
  }
`;

export default Designs;
