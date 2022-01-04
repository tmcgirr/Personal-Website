import React, { useState } from "react";
import "../css/style.css";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("user_BK9Miiyoaic1ZC9pSHq7t");

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const form = document.querySelector("#cta-form");
    const statusMessage = document.querySelector(".status-message");
    generateContactNumber();
    sendForm("default_service", "template_m7y08mg", "#cta-form").then(
      function(response) {
        form.reset();
        console.log("SUCCESS!", response.status, response.text);
        setStatusMessage("Message sent!");
        statusMessage.className = "status-message success";
        setTimeout(() => {
          statusMessage.className = "status-message";
          setStatusMessage("Submit");
        }, 5000);
      },
      function(error) {
        console.log("FAILED...", error);
        setStatusMessage("Failed to send message! Please try again later.");
        statusMessage.className = "status-message failure";
        setTimeout(() => {
          statusMessage.className = "status-message";
          setStatusMessage("Submit");
        }, 5000);
      }
    );
    console.log(data);
  };
  const [contactNumber, setContactNumber] = useState("000000");
  const [statusMessage, setStatusMessage] = useState("Submit");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
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
                id="cta-form"
                className="cta-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="cta-template">
                  <input
                    type="hidden"
                    name="contact_number"
                    value={contactNumber}
                  />
                  <div>
                    <p className="form-row">
                      <label for="user_name">Full Name</label>
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        aria-labelledby="user_name"
                        className="form-input"
                        {...register("user_name")}
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
                        {...register("email")}
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
                        {...register("message")}
                      ></textarea>
                    </p>
                  </div>

                  <div className="form-row">
                    <label for="select-where">
                      Where did you hear about me?
                    </label>
                    <select
                      id="select-where"
                      name="select-where"
                      {...register("select-where")}
                      required
                    >
                      <option value="">Please select one:</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="UpWork">UpWork</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Friends">Friends</option>
                      <option value="Other">Others</option>
                    </select>
                  </div>

                  <p className="form-row form-submit">
                    {/* <button type="submit" className="btn btn--form"> */}
                    <button
                      value="Send"
                      type="submit"
                      className="btn btn--form status-message"
                    >
                      {statusMessage}
                    </button>
                  </p>
                  {/* <p className="status-message">{statusMessage}</p> */}
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
