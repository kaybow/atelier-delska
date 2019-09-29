import React, { useState } from "react";
import styled from "styled-components";

import DesignImage from "./DesignImage";
import Modal from "./Modal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0;

  > .garmentContainer {
    grid-column: span 3;
  }

  @media only screen and (min-width: 40rem) {
    > .garmentContainer {
      grid-column: span 2;
    }
  }

  @media only screen and (min-width: 80rem) {
    > .garmentContainer {
      grid-column: span 1;
    }
  }
`;

// TODO: Rethink the filter so we could safety net the image file names
// (sort alphabetically just in case the images don't have prefixes
const mainDesignImage = design =>
  design.images.find(image => image.name.substring(0, 1) === "1");

/**
 * Design Categories Shape:
 * {
 *   'history': {
 *       designs: [{
 *         design: 'regency-marie',
 *         images: [{
 *            name: 'file-name',
 *            dir: 'path/to/file',
 *            extension: (png|jpg),
 *            src: {someHash}/{fileName}
 *         }],
 *         description: {
 *            name: 'file-name',
 *            dir: 'path/to/file',
 *            extension: 'txt',
 *            src: undefined
 *         }
 *       }],
 *    },
 * }
 *
 */

const Gallery = ({ designCategories, selectedCategory }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDesignName, setSelectedDesignName] = useState(null);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleImageClick = design => () => {
    setModalOpen(true);
    setSelectedDesignName(design);
  };

  /* Using the design page query, we passed in all the image sources as an array
   in JS we can use this map function to turn each item in the array into
   our DesignImage React component instead of writing one for each image
  */
  const mainDesignImages = designCategories[selectedCategory].designs.map(
    (design, i) => (
      <DesignImage
        key={`${design.design}-${i}`}
        onClick={handleImageClick(design.design)}
        src={mainDesignImage(design).src}
        alt={mainDesignImage(design).name}
      />
    )
  );

  const selectedDesign = designCategories[selectedCategory].designs.find(
    design => design.design === selectedDesignName
  );

  return (
    <>
      <Grid>{mainDesignImages}</Grid>
      {modalOpen && (
        <Modal design={selectedDesign} onCloseClick={handleCloseModal} />
      )}
    </>
  );
};

export default Gallery;
