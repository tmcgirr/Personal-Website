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
            I've continued to advance my knowledge in JavaScript, React, Node, Express, and PostgreSQL
            through various courses. The Codecademy Full-Stack Engineer
            Path provided a solid foundation for developing applications from
            the wireframing and planning, to writing the HTML and styling with
            CSS, adding functionality with React and implementing a database with 
            Express and PsotgreSQL. 
            <br />
            <br />
            Here are a few of the skills I've attained so far:
          </p>
        </div>

        {/* <!-- ABOUT Grid --> */}
        <div className="container grid grid--center-v">
          {/* <!-- STEP 01  (HTML/CSS)--> */}
          <div className="step-text-box">
           
            <h3 className="heading-tertiary">HTML & CSS</h3>
            
          </div>

          {/* <!-- STEP 02 (JavaScript)--> */}
          <div className="step-text-box">
            
            <h3 className="heading-tertiary">JavaScript</h3>
           
          </div>

          {/* <!-- STEP 03 (React) --> */}
          <div className="step-text-box">
          
            <h3 className="heading-tertiary">React</h3>
          
          </div>

          {/* <!-- STEP 04 (Node) --> */}
          <div className="step-text-box">
          
            <h3 className="heading-tertiary">Node</h3>
           
          </div>

          {/* <!-- STEP 05 (Express) --> */}
          <div className="step-text-box">
          
            <h3 className="heading-tertiary">Express</h3>
           
          </div>

          {/* <!-- STEP 06 (SQL) --> */}
          <div className="step-text-box">
          
            <h3 className="heading-tertiary">SQL (PostGreSQL & MSSQL)</h3>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
