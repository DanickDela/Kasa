import { NavLink, Link } from "react-router-dom";
import styles from "../../styles/header.module.scss";
import logo from "../../assets/logo.png";

/**
 * Composant Header
 *
 * Affiche l’en-tête principal de l’application.
 * Il contient :
 * - Le logo cliquable redirigeant vers la page d’accueil
 * - La navigation principale (Accueil / À propos)
 *
 * La navigation utilise :
 * - <Link> pour le logo (navigation simple)
 * - <NavLink> pour les liens du menu afin de gérer automatiquement
 *   l’état actif via l’attribut aria-current="page"
 *
 * Accessibilité :
 * - Utilisation de la balise <header> sémantique
 * - Navigation encapsulée dans <nav> avec aria-label
 * - Gestion automatique de aria-current par NavLink
 *
 * @component
 * @returns {JSX.Element} Élément header structuré et accessible
 */

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link to="/">
          <img src={logo} alt="Logo agence Kasa"></img>
        </Link>
      </div>
      <nav className={styles.header__nav} aria-label="Navigation principale">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/apropos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
