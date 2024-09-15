import React from "react";
import Banner from "../../components/banner/index";
import Bannerabout from "../../components/banner/about-banner.jpg";
import Collapsible from "../../components/collapsible";
import './styles.scss'

const About = () => {
  return <div>
    <Banner image={Bannerabout}/>
    <div className="collapses">
      <Collapsible label="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.</p>
      </Collapsible>
      <Collapsible label="Respect">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </Collapsible>
      <Collapsible label="Service">
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
        perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </Collapsible>
      <Collapsible label="Sécurité">
        <p>Sur les anciennes maquettes : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience
        parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
      </Collapsible>
    </div>
  </div>;
};

export default About;
