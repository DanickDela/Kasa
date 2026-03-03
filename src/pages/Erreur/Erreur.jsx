import "../../styles/common.scss";
import styles from "../../styles/erreur.module.scss";
import { Link } from "react-router-dom";
/**
 * Page Erreur (404)
 *
 * Affiche un message d’erreur lorsque l'URL demandée
 * ne correspond à aucun contenu existant.
 *
 * Fonctionnalités :
 * - Affichage du code erreur "404"
 * - Message explicatif
 * - Lien de retour vers la page d’accueil
 *
 * Utilise le composant Link de React Router
 * pour permettre un retour sans rechargement de page.
 *
 * @component
 * @returns {JSX.Element} Page d’erreur 404
 */

function Erreur() {
  return (
    <div className={styles.erreurpage}>
      <div className={styles.erreurpage__404}>404</div>
      <p>
        Oups! La page que <br />
        vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Erreur;
