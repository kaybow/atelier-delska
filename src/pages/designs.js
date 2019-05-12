import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHead from "../components/PageHead";

import Gallery from "./components/Gallery";

const Designs = () => (
  <>
    <PageHead title="Designs" />
    <Header />

    <div class="grid filter">
      <div class="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
        <h6>
          <a href="">
            historical
            <br />
            couture
          </a>
        </h6>
      </div>
      <div class="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
        <h6>
          <a href="">
            vintage
            <br />
            day dresses
          </a>
        </h6>
      </div>
      <div class="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
        <h6>
          <a href="">
            custom
            <br />
            corsetry
          </a>
        </h6>
      </div>
      <div class="unit xs-1-2 s-1-2 m-1-4 l-1-4 category">
        <h6>
          <a href="">
            handmade
            <br />
            vintage accessories
          </a>
        </h6>
      </div>
    </div>

    <main class="gutter">
      <Gallery />
    </main>

    <Footer />
  </>
);

export default Designs;
