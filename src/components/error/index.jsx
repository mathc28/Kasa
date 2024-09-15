import { Link } from "react-router-dom";
import './styles.scss'


export default function error() {
  return (
	<div className="containerError">
	  <p className="numberError">404</p>
	  <p className="MessageError">Oups! La page que vous demandez n'existe pas.</p>
	  <Link to="/" className="HomePage"> Retourner sur la page d’accueil </Link>
	</div>
  );
}