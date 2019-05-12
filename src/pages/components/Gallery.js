import React, { useState } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import DesignImage from "./DesignImage";
import Modal from "./Modal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.325rem;

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

const Gallery = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleImageClick = image => {
    setModalOpen(true);
    setSelectedImage(image);
  };

  /* Using the design page query, we passed in all the image sources as an array
   in JS we can use this map function to turn each item in the array into
   our DesignImage React component instead of writing one for each image
  */
  const designs = images.map((image, i) => (
    <DesignImage
      key={`${image.name}-${i}`}
      onClick={handleImageClick}
      src={image.src}
      alt={image.name}
    />
  ));

  return (
    <>
      <Grid>{designs}</Grid>
      {modalOpen && <Modal image={selectedImage} onClick={handleCloseModal} />}
    </>
  );
};

export default Gallery;
