import React from "react";

import Overlay from "./Overlay";

import "../../css/modal.css";

import placeHolder1 from "../../images/small-modal-img1.jpg";
import placeHolder2 from "../../images/small-modal-img2.jpg";

const Modal = props => (
  <Overlay>
    <div className="modal" id="modal">
      <div className="island-1-2">
        <div className="grid">
          <div className="text-right unit xs-1 s-1 m-1 l-1">
            <button className="btn-close peta" onClick={props.onClick}>
              ×
            </button>
          </div>

          <div className="unit xs-2-3 s-2-3 m-2-3 l-2-3">
            <div className="embed embed--1by1">
              <img className="embed__item" src={props.image} alt="" />
            </div>
          </div>

          <div className="unit xs-1-3 s-1-3 m-1-3 l-1-3">
            <div className="embed embed--1by1">
              <img className="embed__item" src={placeHolder1} alt="" />
            </div>
            <div className="embed embed--1by1">
              <img className="embed__item" src={placeHolder2} alt="" />
            </div>
          </div>

          <div className="unit xs-1 s-1 m-1 l-1 text-content">
            <h6 className="push-1-2 pad-t-1-2">Portfolio Piece Title</h6>
            <p className="micro pad-b-1-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="overlay" />
  </Overlay>
);

export default Modal;
