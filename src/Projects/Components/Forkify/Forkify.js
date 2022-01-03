import React from "react";
import "../../../css/style.css";

function Forkify() {
  const handleClick = () => {
    window.open("https://forkify-trevor.netlify.app");
  };

  return (
    <div>
      <img
        src={require("../../../img/forkify.png")}
        className="projects-img projects"
        alt="Forkify Project"
        onClick={handleClick}
      />
      <div className="projects-content">
        <div className="projects-tags">
          <img src={require("../../../img/HTML5_logo.png")} alt="HTML5 Logo" />
          <img src={require("../../../img/css3_logo.png")} alt="CSS3 Logo" />
          <img
            src={require("../../../img/JavaScript-logo.png")}
            alt="JavaScript Logo"
          />
        </div>
        <p className="projects-title">Forkify App</p>
        <ul className="projects-attributes">
          <li className="projects-attribute">
            <ion-icon
              className="projects-icon"
              name="desktop-outline"
            ></ion-icon>
            <span>
              <strong>Interactive</strong>
            </span>
          </li>
          <li className="projects-attribute">
            <ion-icon
              className="projects-icon"
              name="color-palette-outline"
            ></ion-icon>
            <span>
              Search &amp; <strong>Create</strong>
            </span>
          </li>
          <li className="projects-attribute">
            <ion-icon
              className="projects-icon"
              name="person-outline"
            ></ion-icon>
            <span>
              <strong>API</strong> Integration
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Forkify;
