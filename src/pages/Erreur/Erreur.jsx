import "../../styles/common.scss";
import styles from "../../styles/erreur.module.scss";
import { Link } from "react-router-dom";

function Erreur() {
  return (
    <div className={styles.erreurpage}>
      <div className={styles.erreurpage__404}>404</div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Erreur;
