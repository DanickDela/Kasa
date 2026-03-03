import styles from "../../styles/footer.module.scss";
import logo from "../../assets/logo.svg";

/**
 * Composant Footer
 *
 * Affiche le pied de page global de l’application.
 * Contient :
 * - Le logo de l’agence
 * - Les mentions légales / copyright
 *
 * Ce composant est présent sur toutes les pages principales
 * et constitue un élément structurel du layout.
 *
 * @component
 *
 * @returns {JSX.Element} Élément footer contenant le logo et les mentions
 */

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src={logo} alt="Logo agence Kasa"></img>
      </div>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
