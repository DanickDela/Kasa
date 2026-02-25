import { Link } from "react-router-dom";
import styles from "../../styles/header.module.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="Logo agence Kasa"></img>
      </div>
      <nav className={styles.header__nav}>
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
