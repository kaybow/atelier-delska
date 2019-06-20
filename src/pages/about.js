import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

import { Link } from "gatsby";

import atelier from "../images/caitlin-headshot.png";
import form from "../images/form.svg";
import measuring from "../images/measuring.svg";
import scissors from "../images/scissors.svg";

const About = props => {
  return (
    <>
      <PageHead title="About" />
      <Header />

      <main>
        <div>
          <div className="grid island about">
            <div className="unit xs-1 s-1 m-1 l-1-3 portrait">
              <div className="embed embed--1by1">
                <img
                  alt="portrait of the atelier"
                  className="embed__item"
                  src={atelier}
                />
              </div>
            </div>

            <div className="unit xs-1 s-1 m-1 l-2-3 aboutIntro">
              <h3>about the atelier</h3>
              <p>
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

        <div className="workingtogether pad-t pad-b">
          <h3 className="text-center">working together</h3>

          <div className="text-center">
            <div>
              <img
                className="illustration"
                alt="illustration of a dress form"
                src={form}
              />
              <h5>design vision and consultation</h5>
              <p>
                After an initial consultation in which we discuss your vision, I
                will produce one or more sketches of possible designs to choose
                from. These sketches may be modified until the final design is
                agreed upon.
                <br />
                ___
              </p>
            </div>

            <div>
              <img
                className="illustration"
                alt="illustration of a measuring tape"
                src={measuring}
              />
              <h5>custom pattern creation</h5>
              <p>
                While an in-person fitting session for taking measurements is
                recommend, if not possible, a garment will be made based on the
                measurements provided. I will then draft a fitted personalized
                pattern that is customized for your garment.
                <br />
                ___
              </p>
            </div>

            <div>
              <img
                className="illustration"
                alt="illustration of a pair of sewing scissors"
                src={scissors}
              />
              <h5>garment construction and revisions</h5>
              <p>
                Typically, I will then fit a mock-up of your garment before
                constructing the commissioned piece in your desired fabric.
                Plenty of updates will be sent as you see your design come to
                life.
                <br />
                <br />
                We will continue to work together on the final garment until the
                desired fit is achieved and you have a design you absolutely
                LOVE!
                <br />
                ___
              </p>
            </div>

            <div>
              <p className="fineprint nano">
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

            <div className="pad-b text-center">
              <Link className="micro button2" to="/contact">
                LET'S WORK TOGETHER
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
