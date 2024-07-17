import React from "react";


import './styles.scss'

function Banner({title = '', image = ''}) {
  return (
    <div className="banner">
      <img src={image} className="bannerImg"></img>
      {title && <span className="bannerTitle">{title}</span>}
    </div>
  );
}

export default Banner;
