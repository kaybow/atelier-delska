import React from "react";

import Overlay from "./Overlay";

import "../css/modal.css";

import placeHolder1 from "../images/small-modal-img1.jpg";
import placeHolder2 from "../images/small-modal-img2.jpg";

// TODO: remove duplicate in gallery.js
const designImageByPosition = (design, position) => {
  console.log(design);
  const image = design.images.find(
    image => image.name.substring(0, 1) === position.toString()
  );

  if (!image) {
    return {
      src: position < 3 ? placeHolder1 : placeHolder2
    };
  }

  return image;
};

const designDescription = design => {
  return { __html: design.description };
};

const Modal = ({ design, onCloseClick }) => (
  <Overlay>
    <div className="modal" id="modal">
      <div className="island-1-2">
        <div className="grid">
          <div className="text-right unit xs-1 s-1 m-1 l-1">
            <button className="btn-close peta" onClick={onCloseClick}>
              ×
            </button>
          </div>

          <div className="unit xs-2-3 s-2-3 m-2-3 l-2-3">
            <div className="embed embed--1by1">
              <img
                className="embed__item"
                src={designImageByPosition(design, 1).src}
                alt=""
              />
            </div>
          </div>

          <div className="unit xs-1-3 s-1-3 m-1-3 l-1-3">
            <div className="embed embed--1by1">
              <img
                className="embed__item"
                src={designImageByPosition(design, 2).src}
                alt=""
              />
            </div>
            <div className="embed embed--1by1">
              <img
                className="embed__item"
                src={designImageByPosition(design, 3).src}
                alt=""
              />
            </div>
          </div>

          <div className="unit xs-1 s-1 m-1 l-1 text-content">
            <h6 className="push-1-2 pad-t-1-2">{design.title}</h6>
            <div dangerouslySetInnerHTML={designDescription(design)} />
          </div>
        </div>
      </div>
    </div>
    <div className="overlay" />
  </Overlay>
);

export default Modal;
