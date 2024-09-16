import React, {useState, useEffect} from "react";

import Banner from "../../components/banner";
import Card from "../../components/cards/cards";
import { Link } from "react-router-dom";
import Bannerhome from "../../assets/images/home-banner.jpg"

import './style.scss'

function Accueil() {

  const [logements, setLogements] = useState([])

  // Au chargement du composant on execute le useEffect
  useEffect(() => {
    // Quand on a récupérer les données, on modifie le logements avec le useState
    fetch('/data/logement.json')
      .then(response => response.json())
      .then(data => setLogements(data))
  }, [])

  return (
    <div>
      <Banner title={'Chez vous, partout et ailleurs'} image={Bannerhome}/>
      <div className="container">
        <div className="cards-container">
          {logements.map((logement) =>
            <article key={logement.id}>
              <Link to={`/logement/${logement.id}`}>
                <Card image={logement.cover} title={logement.title} />
              </Link>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accueil;
