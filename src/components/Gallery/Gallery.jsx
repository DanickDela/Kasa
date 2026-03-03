import { useState } from "react";
import PropTypes from "prop-types";
import styles from "../../styles/carrousel.module.scss";
import Chevron from "../Chevron/Chevron";

/**
 * Composant gallery
 *
 * Affiche une galerie d’images avec navigation circulaire
 * (image suivante / précédente).
 *
 * Fonctionnalités :
 * - Navigation via boutons gauche/droite
 * - Boucle infinie (retour à la première image après la dernière)
 * - Compteur d’images
 * - Accessibilité via aria-label
 * - Masque les contrôles si une seule image
 *
 * @component
 *
 * @param {Object} props - Propriétés du composant
 * @param {string[]} props.slides - Tableau des URLs des images
 * @param {string} [props.title="Logement"] - Titre utilisé pour l’accessibilité
 *
 * @returns {JSX.Element|null} Carrousel ou null si aucune image
 */

function Gallery({ slides, title = "Logement" }) {
  const [current, setCurrent] = useState(0);
  const Nbpictures = slides?.length ?? 0;

  function nextSlide() {
    setCurrent(function (c) {
      return c === Nbpictures - 1 ? 0 : c + 1;
    });
  }

  function previousSlide() {
    setCurrent(function (c) {
      return c === 0 ? Nbpictures - 1 : c - 1;
    });
  }

  if (!slides || Nbpictures === 0) return null;

  return (
    <section className={styles.carrousel} aria-label={`Carrousel - ${title}`}>
      {Nbpictures > 1 && (
        <button
          type="button"
          className={styles.carrousel_arrowleft}
          onClick={previousSlide}
          aria-label="Image précédente"
        >
          <Chevron
            direction="left"
            color="white"
            className={styles.carrousel__chevron}
          />
        </button>
      )}

      {Nbpictures > 1 && (
        <button
          type="button"
          className={styles.carrousel_arrowright}
          onClick={nextSlide}
          aria-label="Image suivante"
        >
          <Chevron
            direction="right"
            color="white"
            className={styles.carrousel__chevron}
          />
        </button>
      )}

      <img
        className={styles.image}
        src={slides[current]}
        alt={`Image ${current + 1} sur ${Nbpictures} - ${title}`}
      />

      {Nbpictures > 1 && (
        <span className={styles.carrousel__counter}>
          {current + 1}/{Nbpictures}
        </span>
      )}
    </section>
  );
}

Gallery.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
};

export default Gallery;
