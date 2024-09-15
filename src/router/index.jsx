// Importation des composants et des éléments nécessaires depuis React Router
import { Routes, Route } from "react-router-dom";

import About from "../pages/about";
import Accueil from "../pages/homepage";
import Logement from "../pages/housing";
import Error from "../pages/error";

/**
 * Configuration des différentes routes de l'application
 */
function Router (){
    return <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
    </Routes>
}

export default Router