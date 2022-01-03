import React from "react";
import "../css/style.css";

function Contact() {
  return (
    <>
      <section className="section-cta" id="cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">Do you have a question?</h2>
              <p className="cta-text">
                If you have any questions or would like to reach me, please send
                a message with your name and message below.
              </p>

              <form
                name="cta-form"
                method="POST"
                data-netlify="true"
                id="cta-form"
                className="cta-form"
              >
                <div className="cta-template">
                  <div>
                    <p className="form-row">
                      <label for="full-name">Full Name</label>
                      <input
                        type="text"
                        name="full-name"
                        id="full-name"
                        aria-labelledby="full-name"
                        className="form-input"
                        required
                      />
                    </p>
                  </div>

                  <div>
                    <p className="form-row">
                      <label id="email" for="email">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="mail"
                        aria-labelledby="email"
                        className="form-input"
                      />
                    </p>
                  </div>

                  <div>
                    <p className="form-row">
                      <label id="message" for="message" className="form-input">
                        Please ask a question
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        aria-labelledby="message"
                        className="form-input"
                        rows="7"
                      ></textarea>
                    </p>
                  </div>

                  <div className="form-row">
                    <label for="select-where">
                      Where did you hear about me?
                    </label>
                    <select id="select-where" name="select-where" required>
                      <option value="">Please select one:</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="UpWork">UpWork</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Friends">Friends</option>
                      <option value="Other">Others</option>
                    </select>
                  </div>

                  <p className="form-row form-submit">
                    <button type="submit" className="btn btn--form">
                      Send Message
                    </button>
                  </p>
                </div>
              </form>
            </div>
            <div className="cta-img-box" role="img" aria-label="Laptop"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
