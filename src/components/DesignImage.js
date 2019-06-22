import React from "react";
import styled from "styled-components";

const GarmentContainer = styled.div`
  width: 100%;
`;

const Garment = styled.img``;

const DesignImage = props => (
  <GarmentContainer onClick={props.onClick} className="garmentContainer">
    <div className="embed embed--1by1 image">
      <div className="overlay" />
      <Garment
        className="embed__item garment"
        src={props.src}
        alt={props.alt}
      />
    </div>
  </GarmentContainer>
);

export default DesignImage;
