import React from "react";
import "../css/style.css";

function Home() {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              Hello all, <br />
              my name is <br />
              Trevor McGirr
            </h1>
            <p className="hero-description">
              You have stumbled upon my personal design website.
              <br />
              Feel free to look around.
            </p>
            <a href="/contact" className="btn btn--full margin-right-sm">
              Say Hello
            </a>

            <a href="/about" className="btn btn--outline">
              About Me
            </a>
          </div>
          <div className="hero-img-box">
            <picture>
              <img
                src={require("../img/portrait.png")}
                className="hero-img"
                alt="Trevor McGirr"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* <!-- Knowledge In Section --> */}
      <section className="section-knowledge">
        <div className="container">
          <h2 className="heading-knowledge-in">Current Knowledge In</h2>
          <div className="logos">
            <img src={require("../img/HTML5_logo.png")} alt="HTML5 Logo" />
            <img src={require("../img/css3_logo.png")} alt="CSS3 Logo" />
            <img
              src={require("../img/JavaScript-logo.png")}
              alt="JavaScript Logo"
            />
            <img src={require("../img/react-logo.png")} alt="ReactJS Logo" />
            <img src={require("../img/sql-logo.png")} alt="SQL Logo" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
