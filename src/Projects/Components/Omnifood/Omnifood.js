import React from "react";
import "../../../css/style.css";

function Omnifood() {
  const handleClick = () => {
    window.open("https://omnifood-trevor.netlify.app");
  };
  return (
    <div>
      <img
        src={require("../../../img/omnifood.png")}
        className="projects-img projects"
        alt="Omnifood Project"
        onClick={handleClick}
      />
      <div className="projects-content">
        <div className="projects-tags">
          <img src={require("../../../img/HTML5_logo.png")} alt="HTML5 Logo" />
          <img src={require("../../../img/css3_logo.png")} alt="CSS3 Logo" />
        </div>
        <p className="projects-title">Omnifood Site</p>
        <ul className="projects-attributes">
          <li className="projects-attribute">
            <ion-icon
              className="projects-icon"
              name="desktop-outline"
            ></ion-icon>
            <span>
              <strong>Responsive</strong>
            </span>
          </li>
          <li className="projects-attribute">
            <ion-icon
              className="projects-icon"
              name="color-palette-outline"
            ></ion-icon>
            <span>
              Modern &amp;<strong> Sleek</strong>
            </span>
          </li>
          <li className="projects-attribute">
            <ion-icon
              className="projects-icon"
              name="person-outline"
            ></ion-icon>
            <span>
              <strong>User </strong>friendly
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Omnifood;
