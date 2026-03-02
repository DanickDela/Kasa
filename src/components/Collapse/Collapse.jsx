import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/collapse.module.scss";
import Chevron from "../Chevron/Chevron";

function Collapse({ id, aboutTitle, aboutText, className }) {
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
        <h2 className={styles.rulesagency__title}>{aboutTitle}</h2>

        <Chevron direction={isOpen ? "up" : "down"} color="white" />
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
  className: PropTypes.string,
};

export default Collapse;
