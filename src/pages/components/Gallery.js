import React, { useState } from "react";

import DesignImage from "./DesignImage";
import DesignGridPairs from "./DesignGridPairs";
import Modal from "./Modal";

import { designList } from "../../images/designs/DesignList";

const Gallery = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleImageClick = image => {
    setModalOpen(true);
    setSelectedImage(image);
  };

  return (
    <>
      <div class="pad-t-1-2 pad-b-1-2">
        <div class="grid" />

        <div class="grid">
          <DesignGridPairs>
            <DesignImage onClick={handleImageClick} src={designList[0]} />
            <DesignImage onClick={handleImageClick} src={designList[1]} />
          </DesignGridPairs>

          <DesignGridPairs>
            <DesignImage onClick={handleImageClick} src={designList[2]} />
            <DesignImage onClick={handleImageClick} src={designList[3]} />
          </DesignGridPairs>

          <DesignGridPairs>
            <DesignImage onClick={handleImageClick} src={designList[4]} />
            <DesignImage onClick={handleImageClick} src={designList[5]} />
          </DesignGridPairs>
        </div>

        <div class="grid">
          <DesignGridPairs>
            <DesignImage onClick={handleImageClick} src={designList[6]} />
            <DesignImage onClick={handleImageClick} src={designList[7]} />
          </DesignGridPairs>

          <DesignGridPairs>
            <DesignImage onClick={handleImageClick} src={designList[8]} />
            <DesignImage onClick={handleImageClick} src={designList[9]} />
          </DesignGridPairs>

          <DesignGridPairs>
            <DesignImage onClick={handleImageClick} src={designList[10]} />
            <DesignImage onClick={handleImageClick} src={designList[11]} />
          </DesignGridPairs>
        </div>
      </div>

      {modalOpen ? (
        <Modal image={selectedImage} onClick={handleCloseModal} />
      ) : null}
    </>
  );
};

export default Gallery;
