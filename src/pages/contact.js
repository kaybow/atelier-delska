import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

// import studio from "../images/studio.jpg";

const Contact = props => {
  return (
    <>
      <PageHead title="Contact" />
      <Header />

      <main>
        <div className="grid">
          <section className="unit xs-1 s-1 m-1 l-1-3 island contact">
            <h3 className="intouch">get in touch</h3>
            <div>
              <form
                className="push-0"
                method="POST"
                action="https://formspree.io/caitlin@delska.ca"
              >
                <div className="milli push-half">
                  <label htmlFor="name">name</label>
                  <br />
                  <input className="micro" id="name" name="name" required />
                </div>
                <div className="milli push-half">
                  <label htmlFor="email">email address</label>
                  <br />
                  <input
                    className="micro"
                    id="email"
                    type="email"
                    placeholder=""
                    name="email"
                    required
                  />
                </div>
                <div className="milli push-half">
                  <label htmlFor="subject">subject</label>
                  <br />
                  <input className="micro" id="subject" name="_subject" />
                </div>
                <div className="milli push-half">
                  <label htmlFor="details">message</label>
                  <br />
                  <textarea
                    className="micro pad-b-2"
                    id="details"
                    name="message"
                    required
                  />
                </div>
                <div className="text-right">
                  <button className="micro send-btn" type="submit">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </section>

          <div className="unit xs-1 s-1 m-1 l-2-3">
            <div className="studio-container">
              <div className="studio">
                <div />
                <p className="gutter-1-2">
                  Atalier Delska’s studio is located in Alexandria, 40 minutes
                  east of Ottawa, Ontario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
