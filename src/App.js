import React from "react";
import "./index.css";
import Projects from "./Projects/Projects";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import "./css/style.css";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <header className="header">
        <a href="/">
          <img
            className="logo"
            alt="TM logo"
            src={require("./img/TrevDevLogoDark.png")}
          />
        </a>

        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link className="main-nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="main-nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="main-nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="main-nav-link nav-cta" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>

      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <a href="/" className="footer-logo">
              <img
                className="logo"
                alt="TrevDev logo"
                src={require("./img/TrevDevLogoLight.png")}
              />
            </a>

            <ul className="social-links">
              <li>
                <a
                  className="footer-link"
                  href="https://www.linkedin.com/in/trevor-mcgirr-78a02166/"
                >
                  <ion-icon
                    className="social-icon"
                    name="logo-linkedin"
                  ></ion-icon>
                </a>
              </li>
              <li>
                <a className="footer-link" href="https://github.com/tmcgirr">
                  <ion-icon
                    className="social-icon"
                    name="logo-github"
                  ></ion-icon>
                </a>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; <span className="year">2022</span> by Trevor
              McGirr, Inc. All rights reserved.
            </p>
          </div>

          <nav className="nav-col">
            <p className="footer-heading">Resources</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-link" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="footer-link" href="/projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="footer-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </Router>
  );
};

export default App;
