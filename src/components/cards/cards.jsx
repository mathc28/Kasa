import React from "react";
import { Link } from "react-router-dom";
import './styles.scss'
/**
 * 
 */
function Card({image, title}) {

  return (
    <div className="card">
      <img src={image} alt="image du logement" className="cardImg" />
      <div className="cardLayer">
			  <p className="cardTitle">{title}</p>
			</div>
    </div>
  );
}

export default Card;
