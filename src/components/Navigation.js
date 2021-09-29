import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className="nav">
      <Link className="logo" to="/">
        The Cinema
      </Link>
      <div className="menu">
        <Link className="link-page" to="/about">
          <FontAwesomeIcon icon={faUserCircle} className="icon icon-about" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
