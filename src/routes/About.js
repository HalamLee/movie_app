import React from "react";
import "./About.css";
import profile from "../img/profile.png";
import notion from "../img/notion.png";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <img className="profile" src={profile} />
        <div className="info">
          <h1>Lami</h1>
          <a
            href="https://halamlee.notion.site/Lami-a84fe6caedc34565badcd24913a18f4a"
            target="_blank">
            <img className="notion" src={notion} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
