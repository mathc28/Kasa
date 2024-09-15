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
          <NavLink to="/"  className="navLink" >
            Accueil
          </NavLink>
          <NavLink to="/propos" className="navLink">
            A propos
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
