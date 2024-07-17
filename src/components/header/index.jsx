import React from "react";
import Logoheader from "./logo.jpg";
import { NavLink } from "react-router-dom";

import './styles.scss'

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <h1>
          <a href="/">
          <img src={Logoheader} href="/" className="logoKasa" alt="logo de kasa" />
          </a>
        </h1>
        <div className="navFlex">
          <NavLink to="/" activeclassname="active" className="navLink" exact="true">
            Accueil
          </NavLink>
          <NavLink to="/propos" activeclassname="active" className="navLink" exact="true">
            A propos
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
