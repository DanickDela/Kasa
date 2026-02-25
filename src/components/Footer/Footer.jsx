import styles from "../../styles/footer.module.scss";
import logo from "../../assets/logo.svg";

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
