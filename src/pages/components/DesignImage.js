import React from "react";

const DesignImage = props => (
  <div
    onClick={() => props.onClick(props.src)}
    class="unit xs-1-2 s-1-2 m-1-2 l-1-2 island-1-4"
  >
    <div class="embed embed--1by1 image">
      <div class="overlay" />
      <img class="embed__item garment" src={props.src} alt={props.alt} />
    </div>
  </div>
);

export default DesignImage;
