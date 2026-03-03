import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/collapse.module.scss";
import Chevron from "../Chevron/Chevron";

/**
 * Composant Collapse
 *
 * Affiche une section dépliable/repliable avec persistance d’état.
 * L’état d’ouverture est sauvegardé dans le localStorage
 * afin d’être conservé lors d’un rechargement de page.
 *
 * Fonctionnalités :
 * - Toggle ouverture / fermeture
 * - Rotation animée du Chevron
 * - Persistance via localStorage
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {string} props.id - Identifiant unique utilisé pour la clé localStorage
 * @param {string} props.aboutTitle - Titre affiché dans l’en-tête du collapse
 * @param {React.ReactNode} props.aboutText - Contenu affiché dans la zone dépliée
 * @param {string} [props.className] - Classe CSS optionnelle pour le conteneur externe
 *
 * @returns {JSX.Element} Composant Collapse interactif
 */

function Collapse({
  id,
  aboutTitle,
  aboutText,
  fontdesktop,
  fontmobile,
  className,
}) {
  const STORAGE_KEY = `collapse_${id}`;

  // lecture dulocalStorage au memoent de l'initialisation
  const [isOpen, setIsOpen] = useState(
    () => localStorage.getItem(STORAGE_KEY) === "true",
  );

  // Sauvegarder à chaque changement
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(isOpen));
  }, [isOpen, STORAGE_KEY]);

  return (
    <div className={className}>
      <div className={styles.rulesagency} onClick={() => setIsOpen(!isOpen)}>
        <h2
          className={styles.rulesagency__title}
          style={{
            "--title-size-desktop": fontdesktop,
            "--title-size-mobile": fontmobile,
          }}
        >
          {aboutTitle}
        </h2>
        <Chevron
          direction={isOpen ? "down" : "up"}
          color="white"
          className={styles.collapse__chevron}
        />
      </div>

      {isOpen && (
        <div className={styles.rulesagency__toggle}>
          <p>{aboutText}</p>
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  id: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  fontdesktop: PropTypes.string.isRequired,
  fontmobile: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Collapse;
