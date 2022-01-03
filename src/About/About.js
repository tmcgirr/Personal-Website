import React from "react";
import "../css/style.css";

function About() {
  return (
    <>
      {/* <!-- About Section --> */}
      <section className="section-about" id="about">
        <div className="container">
          <span className="subheading">About</span>
        </div>

        {/* <!-- Bio  --> */}
        <div className="container grid grid-bio step-text-box">
          {/* <!-- <p class="step-number">01</p> --> */}
          <h3 className="heading-tertiary">MY ORIGIN STORY</h3>
          <p className="step-description bio-section">
            I was a personal trainer looking for a change and after taking a few
            "Intro to Programming" classes and I was hooked. I started working
            as a Software Tester for a Medical Tech company using both manual
            and automated testing protocols. I kept studying and quickly
            advanced to become an Application Support Engineer in FinTech, where
            I troubleshoot database issues using SQL.
            <br />
            <br />
            I've continued to advance my knowledge in HTML, CSS, JavaScript and
            React through various courses. The Codecademy Front-End Engineer
            Path provided a solid foundation for developing applications from
            the wireframing and planning, to writing the HTML and styling with
            CSS, and adding functionality with JavaScript and React. I continued
            to learn and expand my knowledge with various tutorials on SQL
            database foundations.
            <br />
            <br />
            Here are a few of the skills I've attained so far:
          </p>
        </div>

        {/* <!-- ABOUT Grid --> */}
        <div className="container grid grid--center-v">
          {/* <!-- STEP 01  (HTML/CSS)--> */}
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">HTML & CSS</h3>
            <p className="step-description">
              I created this website from scratch using the latest elements of
              HTML and CSS. Combining the methodology from various programs and
              tutorials several components are built using Flexbox, CSS Grid,
              and Color Theory.
            </p>
          </div>

          {/* <!-- STEP 02 (JavaScript)--> */}
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">JavaScript</h3>
            <p className="step-description">
              I've implemented various modern JavaScript (ES6+) features to make
              this site responsive and interactive. The buttons and forms
              written in this site allow for a user to interact and submit
              responses. Many of the Projects use APIs, such as the Weather
              component, use the OpenWeather API to provide data for a query or
              geolocation input. The Google calendar uses the Google API and
              authentication to provide the users upcoming events.
            </p>
          </div>

          {/* <!-- STEP 03 (React) --> */}
          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary">React</h3>
            <p className="step-description">
              This site uses React Router to direct the user to each page
              selected from the navigation menu. Each component in the Projects
              section is built using React to allow for seamless rendering when
              a user performs an action, such as location request or Google
              account access. With the use of React hooks each component state
              can be updated based on the requested data from the API call.
            </p>
          </div>

          {/* <!-- STEP 04 (SQL) --> */}
          <div className="step-text-box">
            <p className="step-number">04</p>
            <h3 className="heading-tertiary">SQL</h3>
            <p className="step-description">
              My current knowledge of SQL Server and T-SQL foundations include
              constructing, updating, and selecting data from the database.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
