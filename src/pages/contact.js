import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageHead from "../components/PageHead";

import studio from "../images/studio.jpg";

const Contact = props => {
  return (
    <>
      <PageHead title="Contact" />
      <Header />

      <main>

        <div class="grid">
          <section class="unit xs-1 s-1 m-1 l-1-3 island contact">
            <h4 class="intouch">get in touch</h4>
            <div>
              <form
                class="push-0"
                method="POST"
                action="https://formspree.io/caitlin@delska.ca"
              >
                <div class="milli push-half">
                  <label for="name">name</label>
                  <br />
                  <input class="micro" id="name" name="name" required />
                </div>
                <div class="milli push-half">
                  <label for="email">email address</label>
                  <br />
                  <input
                    class="micro"
                    id="email"
                    type="email"
                    placeholder="ex.'me@domain.com'"
                    name="email"
                    required
                  />
                </div>
                <div class="milli push-half">
                  <label for="subject">subject</label>
                  <br />
                  <input class="micro" id="subject" name="_subject" />
                </div>
                <div class="milli push-half">
                  <label for="details">message</label>
                  <br />
                  <textarea
                    class="micro pad-b-2"
                    id="details"
                    name="message"
                    required
                  />
                </div>
                <div class="text-right">
                  <button class="micro send-btn" type="submit">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </section>

          <div class="unit xs-1 s-1 m-1 l-2-3">
            <div class="embed embed--3by2">
              <img
                onclick="myFunction()"
                class="embed__item"
                src={studio}
                alt=""
              />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
};

export default Contact;
