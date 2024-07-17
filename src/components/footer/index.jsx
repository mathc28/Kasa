import React from "react";
import logoFooter from "./logo-footer.png";

import './styles.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logoFooter} className="footer-logo" alt="logo-kasa"></img>
        <p className="footer-txt" >© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
