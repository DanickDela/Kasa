import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/common.scss";

import Accueil from "./pages/Accueil/Accueil";
import Apropos from "./pages/Apropos/Apropos";
import Annonce from "./pages/Annonce/Annonce";
import Erreur from "./pages/Erreur/Erreur";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
/**
 * ============================================================================
 * POINT D'ENTRÉE DE L'APPLICATION REACT
 * ============================================================================
 *
 * Ce fichier initialise l'application React et configure le système de routage.
 * Il monte l'application dans l'élément HTML ayant l'id "root".
 *
 * Fonctionnalités :
 * - Configuration du Router avec react-router-dom
 * - Déclaration des routes principales
 * - Affichage des composants globaux Header et Footer
 *
 * Routes :
 * - "/" → Page d'accueil
 * - "/apropos" → Page À propos
 * - "/annonce/:id" → Page détail d'une annonce
 * - "*" → Page d'erreur 404
 *
 * @file main.jsx
 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/annonce/:id" element={<Annonce />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
