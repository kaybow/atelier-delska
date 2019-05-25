import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHead from "../components/PageHead";

import atelier from "../images/caitlin-headshot.jpg";

const About = props => {
  return (
    <>
      <PageHead title="About" />
      <Header />

      <main className="gutter">
        <div className="pad-b">

          <div className="grid">
            <div className="unit xs-1 s-1 m-1-3 l-1-3 portrait">
              <div className="embed embed--1by1">
                <img
                  className="embed__item"
                  src="images/caitlin-headshot.jpg"
                  src={atelier}
                />
              </div>
            </div>

            <div className="unit xs-1 s-1 m-2-3 l-2-3">
              <p className="about">
                It was a love of people—their history, language and culture that
                originally drew me to the study of fashion history during my
                time at Mount Allison University. As I continued my studies in
                fashion and costume design abroad in Sydney Australia, I fell in
                love with the care and craftsmanship that went into the garments
                of days gone by.
                <br />
                <br />I felt there was much that was lost in our modern age of
                fast fashion—garments often made cheaply and quickly and created
                with the intention of ending up in a trash pile by the following
                season. I was sad to see an infinite variety of beautiful body
                types squeezed into S-M-L labels and longed for a more careful
                and compassionate alternative.
                <br />
                <br />
                Atelier Delska was born with the intention of bringing the world
                of slow fashion back to live with designs inspired by the past.
                Each garment I craft is fitted and designed with care to be
                unique to you.
                <br />
                <br />
                My hope is that each garment we create together will remain a
                wardrobe favourite for years to come!
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3>working together</h3>

          <div className="grid pad-b">
            <div className="unit xs-1 s-1 m-2-3 l-2-3">
              <div className="grid">
                <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 number">
                  <div className="embed embed--1by1">
                    <img
                      className="embed__item"
                      src="https://via.placeholder.com/100x100.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="unit xs-1-2 s-1-2 m-3-4 l-3-4">
                  <h5>design vision and consultation</h5>
                  <p>
                    After an initial consultation in which we discuss your
                    vision, I will produce one or more sketches of possible
                    designs to choose from. These sketches may be modified until
                    the final design is agreed upon.
                  </p>
                </div>
              </div>

              <div className="grid">
                <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 number">
                  <div className="embed embed--1by1">
                    <img
                      className="embed__item"
                      src="https://via.placeholder.com/100x100.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="unit xs-1-2 s-1-2 m-3-4 l-3-4">
                  <h5>custom pattern creation</h5>
                  <p>
                    While an in-person fitting session for taking measurements
                    is recommend, if not possible, a garment will be made based
                    on the measurements provided. I will then draft a fitted
                    personalized pattern that is customized for your garment.
                  </p>
                </div>
              </div>

              <div className="grid">
                <div className="unit xs-1-2 s-1-2 m-1-4 l-1-4 number">
                  <div className="embed embed--1by1">
                    <img
                      className="embed__item"
                      src="https://via.placeholder.com/100x100.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="unit xs-1-2 s-1-2 m-2-3 l-3-4">
                  <h5>garment construction and revisions</h5>
                  <p>
                    Typically, I will then fit a mock-up of your garment before
                    constructing the commissioned piece in your desired fabric.
                    Plenty of updates will be sent as you see your design come
                    to life.
                    <br />
                    <br />
                    We will continue to work together on the final garment until
                    the desired fit is achieved and you have a design you
                    absolutely LOVE!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pad-b fineprint">
          <div className="unit xs-1 s-1 m-1 l-1 number">
            <div className="fineprint2">
              <p className="island-1-2 nano text-center">
                All orders require a non-refundable deposit of 50% before the
                start of work. You may also provide the materials directly in
                person, or place an online order to be shipped to my workspace.
                <br />
                <br />
                Final payment is due prior to delivery of the garment at the
                last fitting. Please allow a minimum of one month for any
                commissioned project to be completed.
                <br />
                <br />
                <i>
                  If you have allergies to cats or dogs we may not be the best
                  fit, as my studio is attached to a home with pets.
                </i>
              </p>
            </div>
          </div>
        </div>

        <div className="pad-b text-center">
          <a className="micro button2" href="contact.html">
            LET'S WORK TOGETHER
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
